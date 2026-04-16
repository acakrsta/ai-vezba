import Link from "next/link";
import type { Post } from "@/types/post";
import TagBadge from "@/components/TagBadge";

function formatDate(dateStr: string): string {
  return new Intl.DateTimeFormat("sr-Latn", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateStr));
}

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="py-6 border-b border-foreground/10 last:border-0">
      <Link href={`/blog/${post.slug}`} className="group block">
        <h2 className="text-lg font-semibold group-hover:opacity-70 transition-opacity">
          {post.title}
        </h2>
        {post.description && (
          <p className="mt-1 text-sm text-foreground/60 line-clamp-2">
            {post.description}
          </p>
        )}
      </Link>
      <div className="mt-2 flex items-center gap-3 flex-wrap">
        <span className="text-xs text-foreground/40">
          {formatDate(post.date)}
        </span>
        <span className="text-xs text-foreground/30">·</span>
        <span className="text-xs text-foreground/40">{post.readingTime}</span>
        {post.tags.length > 0 && (
          <>
            <span className="text-xs text-foreground/30">·</span>
            <div className="flex items-center gap-1.5 flex-wrap">
              {post.tags.map((tag) => (
                <TagBadge key={tag} tag={tag} />
              ))}
            </div>
          </>
        )}
      </div>
    </article>
  );
}
