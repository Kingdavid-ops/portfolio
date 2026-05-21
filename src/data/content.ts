import type {
  BlogArticle,
  Experience,
  Project,
  Service,
  Testimonial,
} from "@/types";

export const skills = [
  { name: "TypeScript", level: 95 },
  { name: "React / Next.js", level: 98 },
  { name: "Node.js", level: 90 },
  { name: "System Design", level: 88 },
  { name: "Three.js / WebGL", level: 82 },
  { name: "MongoDB", level: 85 },
  { name: "Cloud / DevOps", level: 80 },
  { name: "UI Engineering", level: 96 },
];

export const techStack = [
  "Next.js",
  "TypeScript",
  "React",
  "Node.js",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "AWS",
  "GraphQL",
  "Tailwind CSS",
  "Framer Motion",
  "Three.js",
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Neural Commerce Platform",
    description:
      "AI-driven e-commerce engine with real-time personalization and sub-100ms edge rendering.",
    tags: ["Next.js", "TypeScript", "ML"],
    href: "#",
    featured: true,
  },
  {
    id: "2",
    title: "Quantum Dashboard",
    description:
      "Enterprise analytics suite with WebGL visualizations and collaborative workspaces.",
    tags: ["React", "Three.js", "WebSockets"],
    href: "#",
    featured: true,
  },
  {
    id: "3",
    title: "DevOps Control Center",
    description:
      "Unified CI/CD observability platform with predictive incident detection.",
    tags: ["Node.js", "MongoDB", "Docker"],
    href: "#",
    featured: true,
  },
  {
    id: "4",
    title: "Cipher Auth SDK",
    description:
      "Zero-trust authentication library adopted by fintech teams worldwide.",
    tags: ["TypeScript", "Security"],
    href: "#",
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Senior Software Engineer",
    company: "Elite Tech Ventures",
    period: "2023 — Present",
    description:
      "Leading frontend architecture for flagship products, mentoring engineers, and shipping cinematic user experiences.",
  },
  {
    id: "2",
    role: "Full-Stack Engineer",
    company: "Innovation Labs",
    period: "2021 — 2023",
    description:
      "Built scalable APIs and premium interfaces for SaaS platforms serving 500K+ users.",
  },
  {
    id: "3",
    role: "Software Engineer",
    company: "Digital Craft Studio",
    period: "2019 — 2021",
    description:
      "Delivered performant web applications and design systems for global clients.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "CTO",
    company: "Nexus Labs",
    quote:
      "Kingdavid transforms complex requirements into polished, production-ready experiences. Truly elite engineering.",
  },
  {
    id: "2",
    name: "Marcus Webb",
    role: "Product Director",
    company: "Aurora Systems",
    quote:
      "The attention to detail and animation craft sets this work apart. Recruiters notice immediately.",
  },
  {
    id: "3",
    name: "Elena Rodriguez",
    role: "Founder",
    company: "Vertex AI",
    quote:
      "Rare combination of systems thinking and world-class UI. Our conversion metrics jumped 40%.",
  },
];

export const services: Service[] = [
  {
    id: "1",
    title: "Frontend Architecture",
    description:
      "Design systems, performance budgets, and scalable React/Next.js foundations.",
    icon: "layers",
  },
  {
    id: "2",
    title: "Full-Stack Development",
    description:
      "End-to-end product delivery with MongoDB, APIs, and cloud-native deployment.",
    icon: "code",
  },
  {
    id: "3",
    title: "3D & Motion UI",
    description:
      "Immersive WebGL experiences and premium Framer Motion micro-interactions.",
    icon: "sparkles",
  },
  {
    id: "4",
    title: "Technical Consulting",
    description:
      "Code audits, architecture reviews, and engineering team mentorship.",
    icon: "lightbulb",
  },
];

export const blogArticles: BlogArticle[] = [
  {
    slug: "building-elite-portfolios-with-nextjs",
    title: "Building Elite Portfolios with Next.js 16",
    excerpt:
      "How to combine App Router, R3F, and motion design for recruiter-stopping experiences.",
    category: "Engineering",
    tags: ["Next.js", "Design"],
    featured: true,
    publishedAt: "2026-03-15",
    readTime: 8,
    content: `## Introduction\n\nModern portfolios are products. Treat them like flagship SaaS launches.\n\n## Stack\n\nNext.js 16, TypeScript, and intentional animation budgets create memorable first impressions.\n\n## Performance\n\nLazy-load 3D scenes and respect \`prefers-reduced-motion\` for inclusive excellence.`,
  },
  {
    slug: "threejs-for-developer-brands",
    title: "Three.js for Developer Brands",
    excerpt:
      "CS-themed 3D scenes that communicate engineering depth without sacrificing FPS.",
    category: "3D",
    tags: ["Three.js", "WebGL"],
    publishedAt: "2026-02-20",
    readTime: 6,
    content: `## Why 3D\n\nAbstract blobs are forgettable. Code editors, terminals, and networks tell your story.\n\n## Implementation\n\nUse React Three Fiber with instancing and controlled polygon counts.`,
  },
  {
    slug: "mongoose-at-scale",
    title: "Mongoose Patterns for Portfolio Backends",
    excerpt:
      "Connection caching, schemas, and API routes ready for production contact forms.",
    category: "Backend",
    tags: ["MongoDB", "Node.js"],
    publishedAt: "2026-01-10",
    readTime: 5,
    content: `## Connection Caching\n\nGlobal singleton pattern prevents connection storms in serverless.\n\n## Validation\n\nPair Zod at the edge with Mongoose schemas at persistence.`,
  },
  {
    slug: "animation-systems-that-convert",
    title: "Animation Systems That Convert",
    excerpt:
      "Staggered reveals, scroll triggers, and micro-interactions that feel Apple-polished.",
    category: "Design",
    tags: ["Framer Motion", "UX"],
    publishedAt: "2025-12-05",
    readTime: 7,
    content: `## Principles\n\nMotion guides attention. Never animate for noise.\n\n## Patterns\n\nSection reveals, hover lifts, and subtle parallax build premium perception.`,
  },
];

export const blogCategories = [
  "All",
  "Engineering",
  "3D",
  "Backend",
  "Design",
] as const;
