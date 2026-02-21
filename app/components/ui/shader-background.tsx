"use client";

import { useEffect, useRef } from "react";

const vsSource = `
  attribute vec4 aVertexPosition;
  void main() {
    gl_Position = aVertexPosition;
  }
`;

// Orange-tinted plasma shader – brand color #E84C19 = vec4(0.909, 0.298, 0.098)
const fsSource = `
  precision highp float;
  uniform vec2 iResolution;
  uniform float iTime;

  const float overallSpeed    = 0.035;
  const float gridSmoothWidth = 0.015;
  const float scale           = 5.0;
  const float lineSpeed       = 1.0  * overallSpeed;
  const float lineAmplitude   = 0.7;
  const float lineFrequency   = 0.15;
  const float warpSpeed       = 0.2  * overallSpeed;
  const float warpFrequency   = 0.4;
  const float warpAmplitude   = 0.6;
  const float offsetFrequency = 0.5;
  const float offsetSpeed     = 1.33 * overallSpeed;
  const float minOffsetSpread = 0.6;
  const float maxOffsetSpread = 2.0;
  const float minLineWidth    = 0.008;
  const float maxLineWidth    = 0.07;
  const int   linesPerGroup   = 6;

  // Brand orange: #E84C19
  const vec4 lineColor = vec4(0.909, 0.298, 0.098, 1.0);

  #define drawCircle(pos, radius, coord) \
    smoothstep(radius + gridSmoothWidth, radius, length(coord - (pos)))
  #define drawSmoothLine(pos, halfWidth, t) \
    smoothstep(halfWidth, 0.0, abs(pos - (t)))
  #define drawCrispLine(pos, halfWidth, t) \
    smoothstep(halfWidth + gridSmoothWidth, halfWidth, abs(pos - (t)))

  float random(float t) {
    return (cos(t) + cos(t * 1.3 + 1.3) + cos(t * 1.4 + 1.4)) / 3.0;
  }

  float getPlasmaY(float x, float hFade, float offset) {
    return random(x * lineFrequency + iTime * lineSpeed) * hFade * lineAmplitude + offset;
  }

  void main() {
    vec2 uv    = gl_FragCoord.xy / iResolution.xy;
    vec2 space = (gl_FragCoord.xy - iResolution.xy * 0.5) / iResolution.x * 2.0 * scale;

    float hFade = 1.0 - (cos(uv.x * 6.28318) * 0.5 + 0.5);
    float vFade = 1.0 - (cos(uv.y * 6.28318) * 0.5 + 0.5);

    space.y += random(space.x * warpFrequency + iTime * warpSpeed) * warpAmplitude * (0.5 + hFade);
    space.x += random(space.y * warpFrequency + iTime * warpSpeed + 2.0) * warpAmplitude * hFade;

    vec4 lines = vec4(0.0);

    for (int l = 0; l < linesPerGroup; l++) {
      float ni           = float(l) / float(linesPerGroup);
      float offsetTime   = iTime * offsetSpeed;
      float offsetPos    = float(l) + space.x * offsetFrequency;
      float rand         = random(offsetPos + offsetTime) * 0.5 + 0.5;
      float halfWidth    = mix(minLineWidth, maxLineWidth, rand * hFade) * 0.5;
      float offset       = random(offsetPos + offsetTime * (1.0 + ni))
                           * mix(minOffsetSpread, maxOffsetSpread, hFade);
      float linePos      = getPlasmaY(space.x, hFade, offset);
      float line         = drawSmoothLine(linePos, halfWidth, space.y) * 0.5
                           + drawCrispLine(linePos, halfWidth * 0.15, space.y);

      float cx           = mod(float(l) + iTime * lineSpeed, 25.0) - 12.0;
      vec2  cp           = vec2(cx, getPlasmaY(cx, hFade, offset));
      float circle       = drawCircle(cp, 0.01, space) * 4.0;

      lines += (line + circle) * lineColor * rand;
    }

    // Very dark warm base – near #0C0C0C with barely-visible orange tint
    vec4 bgColor1 = vec4(0.05, 0.02, 0.01, 1.0);
    vec4 bgColor2 = vec4(0.10, 0.04, 0.01, 1.0);
    vec4 color    = mix(bgColor1, bgColor2, uv.x);
    color        *= vFade;
    color.a       = 1.0;
    color        += lines;

    gl_FragColor  = color;
  }
`;

export default function ShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl");
    if (!gl) return;

    // Compile shader helper
    const compile = (type: number, src: string): WebGLShader | null => {
      const s = gl.createShader(type);
      if (!s) return null;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        gl.deleteShader(s);
        return null;
      }
      return s;
    };

    const vs = compile(gl.VERTEX_SHADER, vsSource);
    const fs = compile(gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return;

    const prog = gl.createProgram();
    if (!prog) return;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const attrib  = gl.getAttribLocation(prog, "aVertexPosition");
    const resLoc  = gl.getUniformLocation(prog, "iResolution");
    const timeLoc = gl.getUniformLocation(prog, "iTime");

    // Size canvas to parent, not window
    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width  = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement!);
    resize();

    let raf: number;
    const t0 = Date.now();

    const render = () => {
      const t = (Date.now() - t0) / 1000;
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(prog);
      gl.uniform2f(resLoc, canvas.width, canvas.height);
      gl.uniform1f(timeLoc, t);
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.vertexAttribPointer(attrib, 2, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(attrib);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{
        // screen blend: black = invisible, orange lines add to existing glow
        mixBlendMode: "screen",
        opacity: 0.09,
      }}
    />
  );
}
