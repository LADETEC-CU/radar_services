// Headless-blog configuration. The WordPress backend is queried at BUILD time
// only (static output) — publishing in WP requires a site rebuild to show up.

export const WP_CONFIG = {
  baseUrl: "https://meteoradares.ladetec.com",
  perPage: 12,
  // Category slug per locale.
  categories: {
    es: "huracanes-y-radares",
    en: "weather_radars",
  },
} as const;
