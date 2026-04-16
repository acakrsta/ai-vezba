import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/posts";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  const title = post?.title ?? "CoaCoa";
  const description = post?.description ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          backgroundColor: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 18,
            color: "#9ca3af",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          CoaCoa
        </div>
        <div>
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: "#111827",
              lineHeight: 1.2,
              marginBottom: 20,
            }}
          >
            {title}
          </div>
          {description && (
            <div
              style={{
                fontSize: 24,
                color: "#6b7280",
                lineHeight: 1.5,
              }}
            >
              {description}
            </div>
          )}
        </div>
      </div>
    ),
    size
  );
}
