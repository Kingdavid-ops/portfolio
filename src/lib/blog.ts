import { blogArticles } from "@/data/content";
import type { BlogArticle } from "@/types";

export function getAllArticles(): BlogArticle[] {
  return [...blogArticles].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find((a) => a.slug === slug);
}

export function getFeaturedArticle(): BlogArticle | undefined {
  return blogArticles.find((a) => a.featured) ?? blogArticles[0];
}

/** Simple markdown-to-HTML for static content (production: use MDX/remark) */
export function parseMarkdownContent(content: string): string {
  return content
    .split("\n\n")
    .map((block) => {
      if (block.startsWith("## ")) {
        return `<h2 class="font-display text-2xl font-semibold mt-10 mb-4 text-foreground">${block.slice(3)}</h2>`;
      }
      return `<p class="text-muted-foreground leading-relaxed mb-4">${block}</p>`;
    })
    .join("");
}
