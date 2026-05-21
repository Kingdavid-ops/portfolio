"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      <Badge variant="default" className="mb-4">
        {label}
      </Badge>
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl text-gradient">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
