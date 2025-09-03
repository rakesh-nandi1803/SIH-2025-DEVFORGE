import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { AIFeaturesSection } from "@/components/sections/AIFeaturesSection";
import { EligibilitySection } from "@/components/sections/EligibilitySection";
import { GuidelinesSection } from "@/components/sections/GuidelinesSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { FooterSection } from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <AIFeaturesSection />
      <EligibilitySection />
      <GuidelinesSection />
      <GallerySection />
      <FooterSection />
    </div>
  );
};

export default Index;
