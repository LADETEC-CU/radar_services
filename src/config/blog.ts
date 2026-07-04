// Headless-blog configuration. The WordPress backend is queried at BUILD time
// only (static output) — publishing in WP requires a site rebuild to show up.

export const WP_CONFIG = {
  baseUrl: "https://meteoradares.ladetec.com",
  perPage: 12,
  // Category slug per locale. Both point at the Spanish category for now;
  // swap the `en` slug once an English category exists in WordPress.
  categories: {
    es: "huracanes-y-radares",
    en: "huracanes-y-radares",
  },
} as const;
