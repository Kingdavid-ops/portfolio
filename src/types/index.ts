export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  featured?: boolean;
};

export type Experience = {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
};

export type BlogArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  featured?: boolean;
  publishedAt: string;
  readTime: number;
  content: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
};
