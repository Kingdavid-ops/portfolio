"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/content";
import { SectionReveal } from "@/components/motion/section-reveal";
import { SectionHeading } from "@/components/sections/section-heading";

export function SkillsSection() {
  return (
    <SectionReveal id="skills" className="section-padding bg-surface/30">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Skills"
          title="Technical Mastery"
          description="Precision-tuned expertise across the modern engineering stack."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="glass rounded-xl p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-[var(--shadow-glow)]"
            >
              <div className="mb-3 flex justify-between text-sm">
                <span className="font-medium">{skill.name}</span>
                <span className="text-gold">{skill.level}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-muted">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-gold"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
