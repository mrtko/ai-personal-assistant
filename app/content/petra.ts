/**
 * ────────────────────────────────────────────────────────────────
 *  PETRA – CONTENT CONFIG
 *  Alle Texte der Petra-Produktseite zentral editierbar.
 *  Styling-Klassen (Tailwind) bleiben in den Komponenten.
 * ────────────────────────────────────────────────────────────────
 */

export const petra = {
  /* ── Seiten-Metadaten ──────────────────────────────────────── */
  meta: {
    title: "Petra – Personal Assistant | KI-Team",
    description:
      "Petra ist deine persönliche KI-Assistentin für administrative Aufgaben: E-Mails, Aufgaben, Ideen, Dankbarkeitsprotokoll und mehr. Alles via Telegram. Kein App-Download, keine Einarbeitung.",
  },

  /* ── Hero ──────────────────────────────────────────────────── */
  hero: {
    badge: "KI-Assistenz · Administration · Automatisierung",
    headline: "Personal Assistant",
    tagline: "Meine Personal Assistant heisst übrigens PETRA",
    subline:
      "Deine KI-Assistentin, die administrative Aufgaben übernimmt, damit du Kopf und Zeit für das Wesentliche hast.",
    description:
      "Petra ist eine KI-Assistenzrolle, die deine tägliche administrative Last übernimmt: E-Mails formulieren, Aufgaben erfassen, Ideen sichern, Termine verwalten. Du sendest eine Sprachnachricht per Telegram. Petra erledigt den Rest. Vollautomatisch. Ohne Umwege.",
    quote:
      "Meistens spreche ich mit Petra während einer Autofahrt, alle Ideen werden sofort zentral gespeichert. Das ist echte Entlastung.",
    quoteAuthor: "Martin, Unternehmer",
    cta: {
      primary: "Module entdecken",
      secondary: "Technische Details",
    },
    stats: [
      { value: "8+", label: "einsatzbereite Module" },
      { value: "< 30 Sek.", label: "Reaktionszeit" },
      { value: "100%", label: "via Telegram bedienbar" },
      { value: "0", label: "App-Downloads nötig" },
    ],
  },

  /* ── Herausforderung ───────────────────────────────────────── */
  challenge: {
    label: "Das Problem",
    heading: "Kennst du das?",
    subheading:
      "Viele Unternehmer und Führungspersönlichkeiten leiden täglich unter denselben Problemen, ohne zu wissen, dass sie sich mit KI lösen lassen.",
    items: [
      {
        icon: "⏰",
        title: "Zeit läuft durch die Finger",
        description:
          "Kleine administrative Aufgaben wie E-Mails, Notizen, Aufgaben eintragen fressen täglich Stunden, die du eigentlich in Wachstum, Kreativität oder Menschen investieren möchtest.",
      },
      {
        icon: "🧠",
        title: "Der Kopf ist immer voll",
        description:
          "Du willst nichts vergessen, aber kannst nicht alles im Kopf behalten. Das ständige Jonglieren von Gedanken kostet Energie und führt zu Stress, auch wenn die Aufgaben eigentlich klein wären.",
      },
      {
        icon: "📋",
        title: "Struktur bleibt ein Wunsch",
        description:
          "Du weißt, dass bessere Organisation möglich wäre, aber jedes neue System fühlt sich wie zusätzliche Arbeit an. Also bleibt es beim Wunsch.",
      },
      {
        icon: "🔄",
        title: "Immer wieder dieselbe Routine",
        description:
          "Täglich dieselben kleinen Aufgaben: E-Mail formulieren, To-Do eintragen, Idee aufschreiben. Du kannst es, aber musst es wirklich du sein, der das tut?",
      },
    ],
  },

  /* ── Lösung & Nutzen ───────────────────────────────────────── */
  solution: {
    label: "Der Weg nach vorne",
    heading: "Dein persönlicher KI-Assistent",
    solutionHeading: "Die Lösung",
    benefitsHeading: "Was das für dich bedeutet",
    highlight:
      "Petra übernimmt deine administrative Routine, vollautomatisch, zuverlässig und genau so, wie du es magst.",
    highlightLabel: "Der Unterschied",
    description:
      "Anstatt dich täglich durch administrative Kleinstaufgaben zu kämpfen, redest du einfach mit Petra. Per Sprachnachricht oder Text auf Telegram. Petra versteht, verarbeitet und handelt, direkt in deinen bevorzugten Tools wie Notion, Asana oder dem Kalender.",
    solutions: [
      "KI-Assistenzrolle mit klarer Persönlichkeit und Arbeitsweise",
      "8 spezialisierte Module für die häufigsten Admin-Aufgaben",
      "Vollautomatische Workflows via Make, n8n, Notion und Telegram",
      "Bedienbar per Sprache oder Text. Ohne App, ohne Einarbeitung.",
      "Flexibel erweiterbar nach deinen individuellen Bedürfnissen",
    ],
    benefits: [
      {
        icon: "✨",
        title: "Mehr Leichtigkeit",
        description:
          "Administrative Aufgaben laufen einfach, du musst nicht mehr drüber nachdenken. Das Ergebnis landet genau dort, wo es hingehört.",
      },
      {
        icon: "🔒",
        title: "Nichts geht verloren",
        description:
          "Jede Idee, jede Aufgabe, jeder Gedanke, alles wird sofort erfasst und zentral abgelegt. Nie wieder etwas vergessen.",
      },
      {
        icon: "🎯",
        title: "Fokus fürs Wesentliche",
        description:
          "Wenn Routinearbeit automatisch läuft, bleibt dein Kopf frei für das, was wirklich zählt: Entscheidungen, Wachstum, Menschen.",
      },
      {
        icon: "⚡",
        title: "Sofortige Wirkung",
        description:
          "Kein monatelanges Onboarding. Starte mit einem Modul, spüre die Entlastung und baue schrittweise aus.",
      },
    ],
  },

  /* ── Social Proof / Stats ──────────────────────────────────── */
  socialProof: {
    label: "Warum Petra funktioniert",
    heading: "Erprobt. Durchdacht. Wirksam.",
    subheading:
      "Petra ist kein Experiment. Sie ist das Ergebnis von täglicher Praxis, kontinuierlicher Verbesserung und echtem Einsatz im Unternehmensalltag.",
    stats: [
      {
        value: "8+",
        label: "Module",
        description: "Spezialisierte Module für die häufigsten Admin-Aufgaben",
      },
      {
        value: "< 30s",
        label: "Reaktionszeit",
        description: "Von der Sprachnachricht bis zum Ergebnis im Tool",
      },
      {
        value: "100%",
        label: "Telegram",
        description: "Kein separater Login, keine neue App, nur dein Telegram",
      },
      {
        value: "täglich",
        label: "Im Einsatz",
        description: "Petra wird täglich aktiv genutzt, nicht nur getestet",
      },
    ],
  },

  /* ── Services ──────────────────────────────────────────────── */
  services: {
    label: "Was Petra erledigt",
    heading: "Aufgaben & Services",
    intro:
      "Das übernimmt Petra konkret für dich. Du sagst's einmal, sie erledigt es:",
    note: "🎤 Alle Services direkt via Sprachnachricht oder Text über Telegram steuerbar. Ohne App-Download. Ohne Einarbeitung.",
    pills: [
      { icon: "✉️", label: "E-Mails formulieren" },
      { icon: "✅", label: "Aufgaben eintragen" },
      { icon: "💡", label: "Ideen festhalten" },
      { icon: "🙏", label: "Dankbarkeitsprotokoll" },
      { icon: "🎙️", label: "Sprachbefehle" },
      { icon: "📅", label: "Termine verwalten" },
      { icon: "⏱️", label: "Zeit erfassen" },
      { icon: "📦", label: "Flexibel ausbaubar" },
    ],
    list: [
      "E-Mails im richtigen Ton und Stil formulieren lassen, du gibst nur den Kontext vor",
      "Neue Aufgaben direkt in Asana, Notion oder dein bevorzugtes Tool eintragen",
      "Spontane Ideen für Produkte, Content oder Projekte sofort sichern",
      "Tägliche Dankbarkeitsmomente festhalten, Petra erinnert dich zur richtigen Zeit",
      "Termine planen und Kalender auf dem neuesten Stand halten",
      "Arbeitszeiten per Sprache erfassen. Ohne Tippen, ohne Extra-App.",
      "Persönliche Reflexion und Tagebuch-Einträge begleiten",
      "Und vieles mehr, flexibel und individuell erweiterbar",
    ],
  },

  /* ── Module ────────────────────────────────────────────────── */
  modules: {
    label: "Verfügbare Module",
    heading: "Ein Assistent. Unendliche Möglichkeiten.",
    intro:
      "Petra ist modular aufgebaut: Du startest mit dem Modul, das dir heute am meisten bringt und erweiterst schrittweise. Jedes Modul ist nahtlos via Telegram steuerbar.",
    badge: "Modul",
    footer:
      "Weitere Module in Entwicklung. Die Roadmap orientiert sich an echten Nutzerbedürfnissen, dein Feedback fließt direkt ein.",
    items: [
      {
        icon: "📧",
        title: "E-Mail schreiben",
        description:
          "Formuliert E-Mails in deinem persönlichen Stil, professionell, präzise und passend zum Kontext. Du gibst den Inhalt, Petra den Ausdruck.",
        highlight: "Spart im Schnitt 20–30 Min. täglich",
      },
      {
        icon: "✅",
        title: "Aufgaben erstellen",
        description:
          "Trägt neue Aufgaben direkt in dein bevorzugtes Tool ein: Asana, Notion, Todoist oder andere. Strukturiert, mit den richtigen Tags und Fälligkeitsdaten.",
        highlight: "Nahtlose Tool-Integration",
      },
      {
        icon: "📅",
        title: "Kalendermanagement",
        description:
          "Plant und verwaltet Termine auf Basis deiner Anweisungen. Schlägt freie Slots vor, trägt Meetings ein und hält deinen Kalender aktuell.",
        highlight: "Nie wieder Terminwirrwarr",
      },
      {
        icon: "💡",
        title: "Content-Ideen erstellen",
        description:
          "Generiert frische, kontextrelevante Ideen für Social Media, Blog, Podcast oder Produkte, abgestimmt auf deine Themen und Zielgruppe.",
        highlight: "Kreativer Input auf Abruf",
      },
      {
        icon: "🗂️",
        title: "Ideen abspeichern",
        description:
          "Hält spontane Einfälle strukturiert und kategorisiert fest, für späteren Zugriff, wenn der richtige Moment da ist. Keine Idee geht mehr verloren.",
        highlight: "Dein persönliches Ideen-Archiv",
      },
      {
        icon: "🙏",
        title: "Dankbarkeitsprotokoll",
        description:
          "Erinnert dich täglich zur richtigen Zeit und hilft dir, dankbare Momente bewusst festzuhalten. Ein kleines Ritual mit großer Wirkung auf Mindset und Wohlbefinden.",
        highlight: "Täglich. Einfach. Wirksam.",
      },
      {
        icon: "📖",
        title: "Fadenbuch schreiben",
        description:
          "Begleitet dein persönliches Reflexions- und Tagebuch. Petra stellt die richtigen Fragen, du antwortest, der Rest wird strukturiert festgehalten.",
        highlight: "Persönliche Reflexion leicht gemacht",
      },
      {
        icon: "⏱️",
        title: "Zeiterfassung",
        description:
          "Erfasst Arbeitszeiten einfach und übersichtlich per Sprachbefehl. Kein Klicken, kein Tippen, einfach sagen, was du getan hast.",
        highlight: "Zeiterfassung in 3 Sekunden",
      },
    ],
  },

  /* ── Praxis-Beispiel (Workflow) ────────────────────────────── */
  workflow: {
    label: "Praxis-Beispiel",
    heading: "So einfach funktioniert es",
    subheading:
      "Vom ersten Gedanken bis zum erledigten Task, in unter 30 Sekunden. Ohne Tippen, ohne Umwege, ohne Aufwand.",
    steps: [
      {
        number: "01",
        icon: "🎙️",
        title: "Einfach sagen",
        description:
          "Du nimmst eine kurze Sprachnachricht auf, per Telegram, jederzeit und überall. Während der Autofahrt, zwischen Meetings, auf dem Weg zum nächsten Termin.",
      },
      {
        number: "02",
        icon: "⚡",
        title: "Petra versteht",
        description:
          "Petra transkribiert, analysiert und versteht deine Nachricht in Sekunden. Sie erkennt automatisch, welches Modul gefragt ist und was konkret zu tun ist.",
      },
      {
        number: "03",
        icon: "📋",
        title: "Direkt ins Tool",
        description:
          "Das Ergebnis landet sauber formuliert und korrekt strukturiert direkt in deinem Tool: Asana, Notion, Kalender oder wo es hingehört.",
      },
      {
        number: "04",
        icon: "✓",
        title: "Fertig. Weiter.",
        description:
          "Du bekommst eine kurze Bestätigung und kannst dich wieder auf das konzentrieren, was dir wirklich wichtig ist. Die Aufgabe ist erledigt, ohne dass du daran denken musstest.",
      },
    ],
    example: {
      label: "Echtes Beispiel",
      input: "\"Petra, schreib eine E-Mail an das Team: Morgen fällt das Meeting aus, wir verschieben auf Donnerstag 10 Uhr.\"",
      output: "Petra formuliert die E-Mail, schlägt Betreff und Text vor, du bestätigst mit einem Klick oder passt kurz an.",
    },
  },

  /* ── Testimonials ──────────────────────────────────────────── */
  testimonials: {
    label: "Stimmen aus der Praxis",
    heading: "Was andere sagen",
    subheading:
      "Petra wird täglich eingesetzt, hier sind echte Erfahrungen aus dem Alltag.",
    items: [
      {
        quote:
          "Meistens spreche ich mit Petra während einer Autofahrt, alle Ideen werden sofort zentral gespeichert. Das ist echte Entlastung, die ich nicht mehr missen möchte.",
        author: "Martin R.",
        role: "Unternehmer",
        avatar: "MR",
      },
      {
        quote:
          "Ich hatte immer Angst, Ideen zu vergessen. Jetzt halte ich sie einfach fest. Petra kümmert sich um den Rest. Das klingt simpel, verändert aber wirklich viel.",
        author: "Karin R.",
        role: "Unternehmerin",
        avatar: "KR",
      },
      {
        quote:
          "Der größte Gewinn ist nicht die Zeit. Es ist der mentale Freiraum. Ich muss nicht mehr jonglieren, Petra denkt mit.",
        author: "Andreas F.",
        role: "Unternehmer",
        avatar: "AF",
      },
    ],
  },

  /* ── Technische Umsetzung ──────────────────────────────────── */
  techStack: {
    label: "Unter der Haube",
    heading: "Technische Umsetzung",
    subheading:
      "Petra basiert auf bewährten, professionellen Tools. Keine Experimente, keine Lock-ins. Alles transparent und selbst administrierbar.",
    techHeading: "Tech-Stack",
    prerequisitesHeading: "Was du brauchst",
    tech: [
      {
        icon: "✈️",
        name: "Telegram",
        desc: "Kommunikation & Steuerung",
        detail: "Dein einziger Touchpoint zu Petra, per Text oder Sprachnachricht, jederzeit.",
      },
      {
        icon: "⚙️",
        name: "n8n",
        desc: "Automatisierung & Orchestrierung",
        detail: "Das Herzstück: n8n koordiniert alle Workflows und verbindet die Tools miteinander.",
      },
      {
        icon: "📓",
        name: "Notion",
        desc: "Datenbank & Dokumentation",
        detail: "Aufgaben, Ideen, Protokolle: alles landet sauber in Notion.",
      },
      {
        icon: "🤖",
        name: "ChatGPT / Claude",
        desc: "KI-Intelligenz & Textverarbeitung",
        detail: "Das KI-Modell im Hintergrund, versteht Kontext, generiert Texte und trifft Entscheidungen.",
      },
    ],
    prerequisites: [
      { icon: "🤖", text: "ChatGPT Plus mit Custom GPT (oder API-Zugang)" },
      { icon: "⚙️", text: "n8n-Instanz (Self-Hosted oder Cloud)" },
      { icon: "✈️", text: "Telegram-Account und Bot-Setup" },
      { icon: "📓", text: "Notion Account mit API-Zugang" },
      { icon: "📱", text: "iPhone mit Erinnerungen-Funktion (optional)" },
    ],
    note: "Kein Programmier-Wissen nötig. Die Einrichtung erfolgt Schritt für Schritt, bei Bedarf auch gemeinsam.",
  },

  /* ── Tipps ─────────────────────────────────────────────────── */
  tips: {
    label: "Praxis-Wissen",
    heading: "Tipps aus der Praxis",
    subheading:
      "Was du wissen solltest, bevor du anfängst, damit Petra von Beginn an wirklich für dich arbeitet.",
    items: [
      {
        title: "Klein anfangen, groß denken",
        content:
          "Starte mit 1–2 Modulen, die dir aktuell am meisten helfen. Überwältige dich nicht mit allen Möglichkeiten auf einmal. Fokus ist Stärke. Nach einer Woche merkst du bereits den Unterschied.",
      },
      {
        title: "Prompts sind dein Hebel",
        content:
          "Die Qualität von Petras Antworten hängt von deinen Prompts ab. Nimm dir einmal die Zeit, sie sorgfältig zu formulieren und passe sie regelmäßig an deine aktuellen Bedürfnisse an. Was heute passt, kann in einem Monat schon anders aussehen.",
      },
      {
        title: "Workflows schlank halten",
        content:
          "Halte die Workflows einfach und gut wartbar. Komplexität erzeugt Fehleranfälligkeit, Einfachheit erzeugt Verlässlichkeit. Weniger ist hier wirklich mehr.",
      },
      {
        title: "Wöchentliche Reflexion einbauen",
        content:
          "Nutze eine kurze wöchentliche Reflexion für kontinuierliche Verbesserung. Frage dich: Was hat Petra diese Woche gut gemacht? Was hat gefehlt? Kleines Tuning, große Wirkung.",
      },
      {
        title: "Petra als Gewohnheit etablieren",
        content:
          "Der größte Fehler ist, Petra nur gelegentlich zu nutzen. Je öfter du mit ihr arbeitest, desto natürlicher wird es und desto größer der Nutzen. Täglich nutzen, täglich entlastet sein.",
      },
    ],
  },

  /* ── FAQ ───────────────────────────────────────────────────── */
  faq: {
    label: "Häufige Fragen",
    heading: "Deine Fragen. Klare Antworten.",
    subheading:
      "Alles, was du wissen möchtest, bevor du anfängst.",
    items: [
      {
        question: "Brauche ich Programmierkenntnisse?",
        answer:
          "Nein. Petra ist so aufgebaut, dass du keine Programmierkenntnisse brauchst. Die Einrichtung erfolgt über benutzerfreundliche Tools wie n8n mit visueller Oberfläche. Bei Bedarf kann die Einrichtung auch gemeinsam durchgeführt werden.",
      },
      {
        question: "Welche Tools brauche ich zwingend?",
        answer:
          "Das Minimum: Telegram, ein ChatGPT Plus Account und eine n8n-Instanz. Notion ist für die meisten Module empfohlen, aber nicht für alle zwingend erforderlich. Du kannst mit einem Modul starten und die Tools schrittweise ergänzen.",
      },
      {
        question: "Funktioniert Petra auch mit anderen Tools als Notion/Asana?",
        answer:
          "Ja. Petra ist modular und offen gestaltet. Über n8n und Make lassen sich sehr viele Tools anbinden: Todoist, Google Calendar, Trello, Airtable und viele mehr. Wenn du ein spezifisches Tool nutzt, lässt sich das in der Regel integrieren.",
      },
      {
        question: "Wie lange dauert die Einrichtung?",
        answer:
          "Ein einzelnes Modul kann in 1–2 Stunden eingerichtet sein. Für die vollständige Petra-Konfiguration mit mehreren Modulen rechne mit einem halben Tag. Es gibt klare Anleitungen, du kannst jederzeit mit einem Modul starten.",
      },
      {
        question: "Ist Petra sicher? Wo werden meine Daten gespeichert?",
        answer:
          "Deine Daten werden in deinen eigenen Tools gespeichert: Notion, n8n (self-hosted möglich), etc. Du behältst die volle Kontrolle. Es gibt keinen zentralen Server von Petra, auf dem deine Daten landen.",
      },
      {
        question: "Kann ich Petra mit meinem Team teilen?",
        answer:
          "Grundsätzlich ja. Petra ist primär für den persönlichen Einsatz konzipiert, lässt sich aber auf Team-Szenarien ausweiten. Dafür sind angepasste Workflows und ggf. separate Bots je Teammitglied sinnvoll.",
      },
      {
        question: "Was kostet Petra?",
        answer:
          "Petra selbst ist kein Abo-Produkt. Die Kosten entstehen durch die genutzten Tools: ChatGPT Plus (~20$/Monat), n8n Cloud oder eigener Server, ggf. Notion. Das Wissen und die Konfigurationen werden im Rahmen des ZeckWelt-Angebots zugänglich gemacht.",
      },
    ],
  },

  /* ── CTA ───────────────────────────────────────────────────── */
  cta: {
    label: "Jetzt starten",
    heading: "Bereit, Petra kennenzulernen?",
    subheading: "Dein persönlicher KI-Assistent wartet.",
    description:
      "Wenn du spürst, dass administrative Aufgaben dich täglich Zeit und Energie kosten, dann lass uns reden. Gemeinsam finden wir heraus, welches Modul dir sofort am meisten bringt und wie du Petra in deinen Alltag integrierst.",
    points: [
      "Kostenloses Erstgespräch, kein Sales-Pitch",
      "Individuelle Einschätzung deiner Situation",
      "Klarer nächster Schritt statt unverbindlichem Blabla",
    ],
    button: "Lass uns reden",
    buttonSecondary: "Mehr über das KI-Team",
    href: "mailto:contact@martin-leadership.info",
  },
} as const;
