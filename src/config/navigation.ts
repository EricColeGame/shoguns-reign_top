import type { LucideIcon } from "lucide-react";
import { BookOpen, Code2, Cog, Gamepad2, Package, Swords, TrendingUp } from "lucide-react";

export type NavItem = {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
};

// 导航分类与 content/<locale>/ 下的文章子目录一一对应（关键词聚类产物）。
export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "progression", path: "/progression", icon: TrendingUp, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Cog, isContentType: true },
  { key: "combat", path: "/combat", icon: Swords, isContentType: true },
  { key: "items", path: "/items", icon: Package, isContentType: true },
  { key: "codes", path: "/codes", icon: Code2, isContentType: true },
  { key: "controls", path: "/controls", icon: Gamepad2, isContentType: true },
] satisfies readonly NavItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
