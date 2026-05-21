"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FULL_NAME } from "@/config/brand";
import { blogArticles, blogCategories } from "@/data/content";
import { BlogCard } from "@/components/blog/blog-card";
import { BlogSearch } from "@/components/blog/blog-search";
import { ProfileImage } from "@/components/shared/profile-image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getFeaturedArticle } from "@/lib/blog";

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("All");
  const featured = getFeaturedArticle();

  const filtered = useMemo(() => {
    return blogArticles.filter((article) => {
      const matchesCategory =
        category === "All" || article.category === category;
      const q = search.toLowerCase();
      const matchesSearch =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q) ||
        article.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <div className="pt-28 section-padding">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid gap-12 lg:grid-cols-[1fr_280px] items-start"
        >
          <div>
            <Badge variant="gold" className="mb-4">
              Insights
            </Badge>
            <h1 className="font-display text-4xl font-bold text-gradient sm:text-5xl">
              Engineering Blog
            </h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Thoughts on architecture, 3D interfaces, and building memorable products — by{" "}
              {FULL_NAME}.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="hidden lg:block"
          >
            <ProfileImage className="aspect-square w-full" size={280} />
          </motion.div>
        </motion.div>

        {featured && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-16"
          >
            <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-gold">
              Featured Article
            </h2>
            <div className="glass glow-border rounded-2xl p-8 md:p-10 transition-all duration-300 hover:shadow-[var(--shadow-glow)]">
              <Badge variant="gold" className="mb-4">
                Featured
              </Badge>
              <h3 className="font-display text-2xl font-bold md:text-3xl">{featured.title}</h3>
              <p className="mt-4 max-w-2xl text-muted-foreground">{featured.excerpt}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {featured.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Button asChild className="mt-6">
                <Link href={`/blog/${featured.slug}`}>Read Article</Link>
              </Button>
            </div>
          </motion.section>
        )}

        <div className="mt-14 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <BlogSearch value={search} onChange={setSearch} />
          <div className="flex flex-wrap gap-2">
            {blogCategories.map((cat) => (
              <Button
                key={cat}
                variant={category === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article, i) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <BlogCard article={article} />
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-muted-foreground">
            No articles match your search.
          </p>
        )}
      </div>
    </div>
  );
}
