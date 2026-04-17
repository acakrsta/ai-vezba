import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export const metadata: Metadata = {
  title: "Blog — CoaCoa",
  description: "Svi blog postovi",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-6xl mx-auto px-6 pt-28 pb-16">
      <h1 className="text-2xl font-bold mb-12">Blog</h1>
      {posts.length === 0 ? (
        <p className="text-foreground/50">Nema objavljenih postova.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {posts.map((post, index) => (
            <PostCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      )}
    </div>
  );
}
