export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Shogun's Reign Wiki",
  shortName: "Shogun's Reign",
  logoText: "SR",
  tagline: "Edo Japan Roleplay Guides, Ranks, Professions & Codes",
  description: "Shogun's Reign Wiki covers Roblox Edo roleplay guides, ranks, professions, Ryō farming, combat, housing, progression, codes, updates, and tips for rising to Shogun.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://shoguns-reign.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://shoguns-reign.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.roblox.com/games/106568491289620/Shoguns-Reign",
  heroVideoId: "4mNs6qjB4Wo", // Shogun's Reign Roblox guide: things you need to know
  social: {
    discord: "https://www.roblox.com/communities/860520432/Shoguns-Reign",
    youtube: "https://www.youtube.com/watch?v=4mNs6qjB4Wo",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
