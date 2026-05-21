"use client";

import { motion } from "framer-motion";
import { Code, Layers, Lightbulb, Sparkles } from "lucide-react";
import { services } from "@/data/content";
import { SectionReveal } from "@/components/motion/section-reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const icons = {
  layers: Layers,
  code: Code,
  sparkles: Sparkles,
  lightbulb: Lightbulb,
} as const;

export function ServicesSection() {
  return (
    <SectionReveal id="services" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Services"
          title="How I Can Help"
          description="Engagement models tailored for startups, enterprises, and ambitious brands."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = icons[service.icon as keyof typeof icons] ?? Code;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <Card className="h-full border-border/60 transition-all duration-300 hover:border-gold/30 hover:shadow-[var(--shadow-gold)]">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent />
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionReveal>
  );
}
