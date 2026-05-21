"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FULL_NAME } from "@/config/brand";
import { SectionReveal } from "@/components/motion/section-reveal";
import { Button } from "@/components/ui/button";

export function ContactCtaSection() {
  return (
    <SectionReveal className="section-padding">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="relative overflow-hidden rounded-2xl glass glow-border px-8 py-16 text-center sm:px-16"
          whileInView={{ scale: [0.98, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-gold/10" />
          <div className="relative z-10">
            <h2 className="font-display text-3xl font-bold sm:text-4xl text-gradient">
              Ready to build something elite?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Let&apos;s discuss your next product. {FULL_NAME} is available for select
              engagements.
            </p>
            <Button asChild size="lg" variant="gold" className="mt-8 group">
              <Link href="/about#contact">
                Get in Touch
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </SectionReveal>
  );
}
