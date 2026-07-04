// WordPress REST helpers for the headless blog. Pure module (no `astro:*`
// imports); every function runs at build time. A network/API failure logs a
// warning and yields an empty post list so the build still completes — the
// blog then ships with its "no articles" state.

import { WP_CONFIG } from "../config/blog";
import type { Lang } from "../i18n/ui";

export interface WpPost {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: { source_url?: string; alt_text?: string }[];
  };
}

async function wpJson<T>(path: string): Promise<T | null> {
  const url = `${WP_CONFIG.baseUrl}/wp-json/wp/v2/${path}`;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return (await res.json()) as T;
  } catch (err) {
    console.warn(`[wp] fetch failed (${url}): ${err} — blog will build empty.`);
    return null;
  }
}

/** Category slug for a locale, falling back to Spanish. */
export function categorySlug(lang: Lang): string {
  return WP_CONFIG.categories[lang] ?? WP_CONFIG.categories.es;
}

/** Resolve the WP category ID from the locale's category slug. */
export async function getCategoryId(lang: Lang): Promise<number | null> {
  const cats = await wpJson<{ id: number }[]>(`categories?slug=${categorySlug(lang)}`);
  return cats?.[0]?.id ?? null;
}

/**
 * Posts of the locale's category, newest first, with embedded featured media.
 * `perPage` is capped at 100 by the WP REST API.
 */
export async function getPosts(lang: Lang, perPage: number = WP_CONFIG.perPage): Promise<WpPost[]> {
  const categoryId = await getCategoryId(lang);
  if (categoryId === null) return [];
  const posts = await wpJson<WpPost[]>(`posts?categories=${categoryId}&_embed&per_page=${perPage}`);
  return posts ?? [];
}

/** Featured image of a post (via `_embed`), or null when it has none. */
export function featuredImage(post: WpPost): { src: string; alt: string } | null {
  const media = post._embedded?.["wp:featuredmedia"]?.[0];
  if (!media?.source_url) return null;
  return { src: media.source_url, alt: media.alt_text ?? "" };
}

/**
 * Card image: featured image when set, otherwise the first inline <img> of
 * the post body — none of the current posts have a featured image in WP,
 * but all carry inline images.
 */
export function postImage(post: WpPost): { src: string; alt: string } | null {
  const featured = featuredImage(post);
  if (featured) return featured;
  const match = post.content.rendered.match(/<img[^>]+src=["']([^"']+)["']/);
  return match ? { src: match[1], alt: "" } : null;
}

/**
 * Decode the HTML entities WP leaves in `title.rendered` (&#8217;, &amp;, …)
 * for plain-text sinks (`<title>`, `alt`) where `set:html` is not used.
 */
export function decodeEntities(text: string): string {
  return text
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}
