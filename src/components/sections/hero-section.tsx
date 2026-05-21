"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { BRAND_NAME, FULL_NAME, TAGLINE } from "@/config/brand";
import { siteConfig } from "@/config/site";
import { techStack } from "@/data/content";
import { HeroSceneWrapper } from "@/components/three/hero-scene-wrapper";
import { ProfileImage } from "@/components/shared/profile-image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FloatingParticles } from "@/components/effects/animated-grid";

const social = [
  { href: siteConfig.links.github, icon: Github },
  { href: siteConfig.links.linkedin, icon: Linkedin },
  { href: `mailto:${siteConfig.links.email}`, icon: Mail },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24">
      <FloatingParticles />
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute left-0 bottom-1/4 h-64 w-64 rounded-full bg-gold/10 blur-[100px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:pb-28">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="order-2 lg:order-1"
        >
          <motion.div variants={item}>
            <Badge variant="gold" className="mb-6">
              {BRAND_NAME} · Software Engineer
            </Badge>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            <span className="block text-muted-foreground text-lg sm:text-xl font-normal mb-2">
              Hello, I&apos;m
            </span>
            <span className="text-gradient">{FULL_NAME}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            {TAGLINE}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="group">
              <Link href="/about#contact">
                Start a Project
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#projects">View Work</Link>
            </Button>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex gap-3">
            {social.map(({ href, icon: Icon }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-lg glass text-muted-foreground hover:text-primary hover:shadow-[var(--shadow-glow)]"
                whileHover={{ y: -3, scale: 1.05 }}
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-2">
            {techStack.slice(0, 6).map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </motion.div>
        </motion.div>

        <div className="order-1 relative lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-primary/5 blur-2xl" />
            <HeroSceneWrapper />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute -bottom-4 -left-4 z-20 w-32 sm:w-40 lg:-left-8"
            style={{ animation: "var(--animate-float)" }}
          >
            <ProfileImage size={160} priority className="rounded-2xl shadow-[var(--shadow-glow)]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="absolute top-4 right-0 glass rounded-xl px-4 py-3 hidden sm:block"
          >
            <p className="text-xs text-muted-foreground">Status</p>
            <p className="text-sm font-medium text-primary">Available for hire</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="absolute bottom-20 right-4 glass rounded-xl px-4 py-3 hidden md:block"
          >
            <p className="font-mono text-xs text-gold">10+ years craft</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
