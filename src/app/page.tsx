import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "CoaCoa",
  description: "Blog o dizajnu, vizuelnoj komunikaciji i procesu kreativnog rada.",
};

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <>
      <Hero />
      <div className="max-w-2xl mx-auto px-6 py-16">
        {posts.length === 0 ? (
          <p className="text-foreground/50">Nema objavljenih postova.</p>
        ) : (
          <div>
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
