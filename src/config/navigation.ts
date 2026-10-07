import type { LucideIcon } from "lucide-react";

export type NavItem = {
  key: string;
  path: string;
  icon: LucideIcon;
  isContentType: boolean;
};

// 导航配置在 Part 3 中清空，内容将在后续阶段重建。
export const NAVIGATION_CONFIG: readonly NavItem[] = [];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
