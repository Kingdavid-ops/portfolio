import { BRAND_NAME, FULL_NAME } from "@/config/brand";

export const siteConfig = {
  name: BRAND_NAME,
  fullName: FULL_NAME,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://shadrod.vercel.app",
  description:
    `${BRAND_NAME} — Premium portfolio of ${FULL_NAME}. Software engineering, architecture, and elite frontend craft.`,
  links: {
    github: "https://github.com/Kingdavid-ops",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    email: "kingdavidifediorah245@gmail.com",
  },
  nav: [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
  ],
} as const;
