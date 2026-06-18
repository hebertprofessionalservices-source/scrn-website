export interface Article {
  id: string;
  title: string;
  author: string;
  date: string;
  category: string;
  excerpt: string;
  source?: "scrn" | "varsity-voices";
  featured?: boolean;
}

export const articles: Article[] = [
  {
    id: "2025-mhsaa-championships-radio",
    title: "2025 MHSAA Championships on State-Wide Radio",
    author: "Caleb Hamill",
    date: "December 2, 2025",
    category: "Championships",
    excerpt:
      "The full broadcast schedule for all seven MHSAA football state championship games airing across 40+ stations statewide.",
    source: "scrn",
    featured: true,
  },
  {
    id: "first-mhsaa-rpi-rankings",
    title: "First MHSAA RPI Rankings",
    author: "Caleb Hamill",
    date: "September 24, 2025",
    category: "Rankings",
    excerpt:
      "Using a calculation that factors winning percentage, opponents' winning percentage, and opponents' opponents' winning percentage — every MHSAA football team ranked 1 through 227.",
    source: "scrn",
  },
  {
    id: "varsity-voices-preseason-all-state-2025",
    title: "Varsity Voices Preseason All-State Team 2025",
    author: "Caleb Hamill",
    date: "August 21, 2025",
    category: "All-State",
    excerpt:
      "Our preseason selections for the best players in Mississippi high school football heading into the 2025 season. Sponsored by Farm Families of MS.",
    source: "varsity-voices",
  },
  {
    id: "2025-preseason-mhsaa-power-rankings",
    title: "2025 Preseason MHSAA Power Rankings",
    author: "Caleb Hamill",
    date: "August 21, 2025",
    category: "Rankings",
    excerpt:
      "Where every classification stands heading into the 2025 season — and who we think has what it takes to be standing at the end of December.",
    source: "scrn",
  },
  {
    id: "mhsaa-all-time-football-programs",
    title: "The MHSAA's All-Time Football Programs",
    author: "Caleb Hamill",
    date: "August 8, 2025",
    category: "History",
    excerpt:
      "Breck Riley, Jake Wimberly, Brandon Davis, and Jared Shotts break down the ten greatest football programs in MHSAA history.",
    source: "varsity-voices",
  },
  {
    id: "all-7-games-2024",
    title: "All 7 MHSAA Football Championship Games to Air on State Championships Radio Network",
    author: "Breck Riley",
    date: "December 2, 2024",
    category: "Championships",
    excerpt:
      "For the first time, every single MHSAA football state championship game will air on the State Championships Radio Network.",
    source: "scrn",
  },
];

export const featuredArticle = articles.find((a) => a.featured) ?? articles[0];
export const recentArticles = articles.filter((a) => !a.featured).slice(0, 5);
