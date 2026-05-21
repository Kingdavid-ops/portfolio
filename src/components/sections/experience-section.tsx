"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/content";
import { SectionReveal } from "@/components/motion/section-reveal";
import { SectionHeading } from "@/components/sections/section-heading";

export function ExperienceSection() {
  return (
    <SectionReveal id="experience" className="section-padding bg-surface/30">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Experience"
          title="Career Timeline"
          description="A trajectory of increasing impact and technical leadership."
        />

        <div className="relative mt-14">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-gold to-transparent md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex flex-col md:w-1/2 ${
                  i % 2 === 0 ? "md:ml-0 md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
                } pl-12 md:pl-0`}
              >
                <span
                  className={`absolute left-2.5 top-2 h-3 w-3 rounded-full bg-gold shadow-[var(--shadow-gold)] md:left-auto md:right-auto md:top-2 ${
                    i % 2 === 0 ? "md:-right-1.5" : "md:-left-1.5"
                  }`}
                />
                <div className="glass glow-border rounded-xl p-6 transition-all duration-300 hover:shadow-[var(--shadow-glow)]">
                  <p className="text-sm font-mono text-gold">{exp.period}</p>
                  <h3 className="mt-2 font-display text-xl font-semibold">{exp.role}</h3>
                  <p className="text-primary">{exp.company}</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
