import { FULL_NAME, SHORT_NAME } from "@/config/brand";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/motion/section-reveal";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { ProfileImage } from "@/components/shared/profile-image";
import { SectionHeading } from "@/components/sections/section-heading";

export function AboutSection() {
  return (
    <SectionReveal id="about" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="About"
          title={`The Engineer Behind ${SHORT_NAME}`}
          description={`${FULL_NAME} builds software that feels inevitable — fast, beautiful, and engineered for scale.`}
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <StaggerContainer className="grid grid-cols-2 gap-4 sm:max-w-md">
            {[
              { label: "Projects Delivered", value: 48, suffix: "+" },
              { label: "Happy Clients", value: 32, suffix: "+" },
              { label: "Years Experience", value: 10, suffix: "+" },
              { label: "Code Commits", value: 5, suffix: "K+" },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="glass glow-border rounded-xl p-6 transition-all duration-300 hover:shadow-[var(--shadow-glow)]">
                  <p className="font-display text-3xl font-bold text-primary">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <StaggerContainer className="space-y-6">
            <StaggerItem>
              <ProfileImage className="aspect-[4/5] max-w-md mx-auto lg:mx-0" size={480} />
            </StaggerItem>
            <StaggerItem>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in premium frontend architecture, immersive 3D interfaces, and
                full-stack systems that recruiters and clients remember. Every pixel and API
                endpoint is intentional.
              </p>
            </StaggerItem>
            <StaggerItem>
              <p className="text-muted-foreground leading-relaxed">
                From Fortune-scale dashboards to cinematic portfolios, I bring Apple-level polish
                and deep engineering rigor to every launch.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </SectionReveal>
  );
}
