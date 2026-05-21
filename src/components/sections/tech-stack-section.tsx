"use client";

import { motion } from "framer-motion";
import { techStack } from "@/data/content";
import { SectionReveal } from "@/components/motion/section-reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { Badge } from "@/components/ui/badge";

export function TechStackSection() {
  return (
    <SectionReveal id="stack" className="section-padding overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Stack"
          title="Technologies I Ship With"
          align="center"
        />

        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ scale: 1.08, y: -4 }}
            >
              <Badge variant="glass" className="px-4 py-2 text-sm">
                {tech}
              </Badge>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 flex gap-4 overflow-hidden"
          aria-hidden
        >
          {[0, 1].map((row) => (
            <motion.div
              key={row}
              className="flex shrink-0 gap-4"
              animate={{ x: row === 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              {[...techStack, ...techStack].map((tech, i) => (
                <span
                  key={`${row}-${i}`}
                  className="whitespace-nowrap rounded-lg border border-border/50 px-6 py-3 text-sm text-muted-foreground/60"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionReveal>
  );
}
