import { getCollection, type CollectionEntry } from "astro:content";
import type { Lang } from "../i18n/ui";

export type BlogEntry = CollectionEntry<"blog">;

/**
 * Get blog entries for a locale, newest first.
 * Enforces directory locale matches frontmatter `lang`.
 * In production, filters out `needsReview === true` entries and fails the build if empty.
 */
export async function getPosts(lang: Lang): Promise<BlogEntry[]> {
  const entries = await getCollection("blog");

  // Verify that directory locale (e.g. es/, en/) matches frontmatter `lang`
  for (const entry of entries) {
    const dirLocale = entry.filePath
      ? entry.filePath.replace(/^.*src\/content\/blog\//, "").split("/")[0]
      : entry.id.split("/")[0];

    if (dirLocale !== entry.data.lang) {
      throw new Error(
        `[blog] Entry '${entry.id}' is in directory '${dirLocale}' but has lang '${entry.data.lang}'. Build failed due to locale mismatch.`
      );
    }
  }

  let posts = entries.filter((entry) => entry.data.lang === lang);

  // In production, filter out posts flagged as needing review (needsReview === true)
  // so unreviewed translations don't reach production. In development, show all posts.
  if (import.meta.env.PROD) {
    posts = posts.filter((entry) => !entry.data.needsReview);
  }

  // If in production and the collection for this locale is empty, fail the build.
  if (import.meta.env.PROD && posts.length === 0) {
    throw new Error(
      `[blog] No published blog posts found for locale '${lang}' in production build.`
    );
  }

  return posts.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
}

/**
 * `getStaticPaths` factory for per-locale blog post routes
 * (`pages/blog/[slug].astro`, `pages/es/blog/[slug].astro`): one path per
 * post of the locale's category, passing the post entry as a prop.
 */
export function makeBlogPaths(lang: Lang) {
  return async () => {
    const posts = await getPosts(lang);
    return posts.map((post) => ({
      params: { slug: post.data.slug },
      props: { post },
    }));
  };
}

/**
 * Card image: first <img> tag (HTML or Markdown) in the post body, or null.
 */
export function postImage(entry: BlogEntry): { src: string; alt: string } | null {
  if (!entry.body) return null;

  // HTML <img ...> tag
  const htmlMatch = entry.body.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/i);
  if (htmlMatch) {
    const altMatch = htmlMatch[0].match(/alt=["']([^"']*)["']/i);
    return {
      src: htmlMatch[1],
      alt: altMatch ? altMatch[1] : "",
    };
  }

  // Markdown ![alt](src) tag
  const mdMatch = entry.body.match(/!\[([^\]]*)\]\(([^)]+)\)/);
  if (mdMatch) {
    return {
      src: mdMatch[2],
      alt: mdMatch[1],
    };
  }

  return null;
}
