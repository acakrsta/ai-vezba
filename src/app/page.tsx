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
      <section className="max-w-6xl mx-auto px-6 py-24">
        {posts.length === 0 ? (
          <p className="text-foreground/50">Nema objavljenih postova.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {posts.map((post, index) => (
              <PostCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
