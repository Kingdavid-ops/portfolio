import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogArticles } from "@/data/content";
import { SectionReveal } from "@/components/motion/section-reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { BlogCard } from "@/components/blog/blog-card";
import { Button } from "@/components/ui/button";

export function BlogPreviewSection() {
  const preview = blogArticles.slice(0, 3);

  return (
    <SectionReveal id="blog-preview" className="section-padding bg-surface/30">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            label="Blog"
            title="Latest Insights"
            description="Engineering notes on Next.js, 3D, and elite product craft."
          />
          <Button asChild variant="outline" className="shrink-0 self-start sm:self-auto">
            <Link href="/blog">
              All Articles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {preview.map((article) => (
            <BlogCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
