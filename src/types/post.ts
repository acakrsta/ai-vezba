export interface PostFrontmatter {
  title: string;
  date: string; // ISO 8601, npr. "2025-01-15"
  description: string;
  tags: string[];
  image?: string; // npr. "/post1.jpg"
  draft?: boolean;
}

export interface Post extends PostFrontmatter {
  slug: string;
  readingTime: string; // npr. "4 min read"
}
