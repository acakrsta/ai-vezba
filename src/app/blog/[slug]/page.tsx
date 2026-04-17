import type { Metadata } from "next";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import TagBadge from "@/components/TagBadge";
import ShareButtons from "@/components/ShareButtons";

export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

function formatDate(dateStr: string): string {
  return new Intl.DateTimeFormat("sr-Latn", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateStr));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const filePath = path.join(
    process.cwd(),
    "src/content/posts",
    `${slug}.mdx`
  );
  const raw = fs.readFileSync(filePath, "utf8");
  const { content } = matter(raw);

  return (
    <div>
      {post.image && (
        <div
          className="relative w-full"
          style={{ height: "66.67vh" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${post.image})` }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center leading-tight drop-shadow-lg">
              {post.title}
            </h1>
          </div>
        </div>
      )}

      <div className="max-w-2xl mx-auto px-6 pt-12 pb-16">
        {!post.image && (
          <h1 className="text-3xl font-bold leading-tight mb-10">{post.title}</h1>
        )}
        <header className="mb-10">
          <div className="flex items-center gap-3 flex-wrap text-sm text-foreground/50">
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readingTime}</span>
            {post.tags.length > 0 && (
              <>
                <span>·</span>
                <div className="flex items-center gap-1.5 flex-wrap">
                  {post.tags.map((tag) => (
                    <TagBadge key={tag} tag={tag} />
                  ))}
                </div>
              </>
            )}
          </div>
        </header>
        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <MDXRemote
            source={content}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />
        </article>
        <ShareButtons title={post.title} />
      </div>
    </div>
  );
}
