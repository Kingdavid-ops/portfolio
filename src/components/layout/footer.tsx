"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { BRAND_NAME, FULL_NAME } from "@/config/brand";
import { siteConfig } from "@/config/site";

const social = [
  { href: siteConfig.links.github, icon: Github, label: "GitHub" },
  { href: siteConfig.links.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: siteConfig.links.twitter, icon: Twitter, label: "Twitter" },
  { href: `mailto:${siteConfig.links.email}`, icon: Mail, label: "Email" },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/about#contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-surface/50 section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-display text-2xl font-bold text-gradient">{BRAND_NAME}</p>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Elite software engineering by {FULL_NAME}. Crafted with precision and cinematic motion.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
              Connect
            </h4>
            <div className="flex gap-3">
              {social.map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg glass text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary hover:shadow-(--shadow-glow)"
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-xs text-muted-foreground">
            © {year} {BRAND_NAME}. All rights reserved.
          </p>
          <motion.p
            className="text-xs text-muted-foreground"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Engineered with Next.js 16 · TypeScript · Three.js
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
