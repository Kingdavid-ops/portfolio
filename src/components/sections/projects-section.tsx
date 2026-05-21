"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/content";
import { SectionReveal } from "@/components/motion/section-reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ProjectsSection() {
  const featured = projects.filter((p) => p.featured);

  return (
    <SectionReveal id="projects" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Work"
          title="Featured Projects"
          description="Flagship builds that demonstrate architecture, performance, and design excellence."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              <Card className="group h-full overflow-hidden border-border/80 bg-card/80 backdrop-blur transition-all duration-300 hover:border-primary/40 hover:shadow-[var(--shadow-glow)]">
                <div className="h-2 bg-gradient-to-r from-primary via-accent to-gold opacity-80 transition-opacity group-hover:opacity-100" />
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild variant="ghost" className="mt-6 px-0 group/btn">
                    <Link href={project.href}>
                      Explore
                      <ExternalLink className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
