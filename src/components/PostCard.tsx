import Link from "next/link";
import Image from "next/image";
import type { Post } from "@/types/post";

function formatDate(dateStr: string): string {
  return new Intl.DateTimeFormat("sr-Latn", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateStr));
}

interface PostCardProps {
  post: Post;
  index: number;
}

const rotations = ["rotate-[-2deg]", "rotate-0", "rotate-[2deg]"];

export default function PostCard({ post, index }: PostCardProps) {
  const rotation = rotations[index % rotations.length];

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group block relative overflow-hidden rounded-2xl aspect-[3/4] ${rotation} transition-transform duration-500 hover:rotate-0 hover:scale-105`}
    >
      {/* Slika */}
      {post.image ? (
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      ) : (
        <div className="absolute inset-0 bg-stone-800" />
      )}

      {/* Tamni overlay sa copper tonom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />
      <div className="absolute inset-0 bg-amber-900/25 mix-blend-multiply" />

      {/* Sadržaj */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
        {/* Broj */}
        <span className="text-xs tracking-[0.2em] text-white/50 font-mono">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Naslov i meta */}
        <div>
          <h2 className="text-2xl font-bold leading-tight mb-3 group-hover:opacity-90 transition-opacity">
            {post.title}
          </h2>
          <div className="flex items-center gap-2 text-xs text-white/50">
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
