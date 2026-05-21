import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ServicesSection } from "@/components/sections/services-section";
import { BlogPreviewSection } from "@/components/sections/blog-preview-section";
import { ContactCtaSection } from "@/components/sections/contact-cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <TechStackSection />
      <TestimonialsSection />
      <ServicesSection />
      <BlogPreviewSection />
      <ContactCtaSection />
    </>
  );
}
