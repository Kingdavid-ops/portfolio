"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Twitter } from "lucide-react";
import { BRAND_NAME, FULL_NAME, LOCATION, TAGLINE } from "@/config/brand";
import { siteConfig } from "@/config/site";
import { ProfileImage } from "@/components/shared/profile-image";
import { ContactForm } from "@/components/contact/contact-form";
import { Badge } from "@/components/ui/badge";
import { techStack } from "@/data/content";

const social = [
  { href: siteConfig.links.github, icon: Github, label: "GitHub" },
  { href: siteConfig.links.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: siteConfig.links.twitter, icon: Twitter, label: "Twitter" },
  { href: `mailto:${siteConfig.links.email}`, icon: Mail, label: "Email" },
];

export default function AboutPage() {
  return (
    <div className="pt-28">
      <section className="section-padding">
        <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Badge variant="gold" className="mb-4">
              About · Contact
            </Badge>
            <h1 className="font-display text-4xl font-bold text-gradient sm:text-5xl">
              {FULL_NAME}
            </h1>
            <p className="mt-2 text-lg text-primary font-medium">{BRAND_NAME}</p>
            <p className="mt-6 text-muted-foreground leading-relaxed">{TAGLINE}</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              I architect and ship premium web products — from cinematic portfolios to
              enterprise platforms. My work blends deep computer science fundamentals with
              obsessive UI craft.
            </p>

            <div className="mt-8 flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 text-gold" />
              <span>{LOCATION}</span>
            </div>

            <div className="mt-8 flex gap-3">
              {social.map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-lg glass hover:text-primary hover:shadow-(--shadow-glow)"
                  whileHover={{ y: -3 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {techStack.slice(0, 8).map((t) => (
                <Badge key={t} variant="outline">
                  {t}
                </Badge>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <ProfileImage className="aspect-4/5 w-full max-w-md mx-auto" size={500} priority />
          </motion.div>
        </div>
      </section>

      <section id="contact" className="section-padding bg-surface/40 scroll-mt-24">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold text-gradient">Let&apos;s Connect</h2>
            <p className="mt-4 text-muted-foreground max-w-md">
              Have a project in mind? Send a message — the form is wired to MongoDB via Mongoose
              when <code className="text-primary text-sm">MONGODB_URI</code> is configured.
            </p>
            <p className="mt-6">
              <a
                href={`mailto:${siteConfig.links.email}`}
                className="text-primary hover:underline"
              >
                {siteConfig.links.email}
              </a>
            </p>
          </motion.div>

          <div className="glass glow-border rounded-2xl p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
