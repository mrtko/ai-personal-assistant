import { petra } from "@/content/petra";
import Navbar from "@/components/petra/Navbar";
import Hero from "@/components/petra/Hero";
import Challenge from "@/components/petra/Challenge";
import SolutionBenefits from "@/components/petra/SolutionBenefits";
import WorkflowExample from "@/components/petra/WorkflowExample";
import Modules from "@/components/petra/Modules";
import SocialProof from "@/components/petra/SocialProof";
import Testimonials from "@/components/petra/Testimonials";
import TechStack from "@/components/petra/TechStack";
import TipsAccordion from "@/components/petra/TipsAccordion";
import Faq from "@/components/petra/Faq";
import Cta from "@/components/petra/Cta";
import Footer from "@/components/petra/Footer";

export const metadata = {
  title: petra.meta.title,
  description: petra.meta.description,
};

export default function PetraPage() {
  return (
    <div className="page-bg min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Challenge />
        <SolutionBenefits />
        <WorkflowExample />
        <Modules />
        <SocialProof />
        <Testimonials />
        <TechStack />
        <TipsAccordion />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
