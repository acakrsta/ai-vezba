import Link from "next/link";

interface TagBadgeProps {
  tag: string;
}

const tagColors: Record<string, string> = {
  git: "border-orange-400/50 text-orange-400 hover:border-orange-400 hover:text-orange-300",
  razvoj: "border-blue-400/50 text-blue-400 hover:border-blue-400 hover:text-blue-300",
  alati: "border-emerald-400/50 text-emerald-400 hover:border-emerald-400 hover:text-emerald-300",
  typescript: "border-sky-400/50 text-sky-400 hover:border-sky-400 hover:text-sky-300",
  javascript: "border-yellow-400/50 text-yellow-400 hover:border-yellow-400 hover:text-yellow-300",
  "opšte": "border-purple-400/50 text-purple-400 hover:border-purple-400 hover:text-purple-300",
};

const defaultColor = "border-foreground/20 text-foreground/60 hover:text-foreground hover:border-foreground/40";

export default function TagBadge({ tag }: TagBadgeProps) {
  const colorClass = tagColors[tag] ?? defaultColor;

  return (
    <Link
      href={`/blog/tags/${tag}`}
      className={`text-xs px-2 py-0.5 rounded-full border transition-colors ${colorClass}`}
    >
      {tag}
    </Link>
  );
}
