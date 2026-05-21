"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock } from "lucide-react";
import type { BlogArticle } from "@/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function BlogCard({ article }: { article: BlogArticle }) {
  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }}>
      <Link href={`/blog/${article.slug}`}>
        <Card className="h-full overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-[var(--shadow-glow)]">
          <div className="h-1.5 bg-gradient-to-r from-primary to-gold" />
          <CardHeader>
            <div className="mb-2 flex flex-wrap gap-2">
              <Badge variant="default">{article.category}</Badge>
              {article.featured && <Badge variant="gold">Featured</Badge>}
            </div>
            <CardTitle className="line-clamp-2">{article.title}</CardTitle>
            <CardDescription className="line-clamp-3">{article.excerpt}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              <span>{article.readTime} min read</span>
              <span>·</span>
              <time dateTime={article.publishedAt}>
                {new Date(article.publishedAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
