import type { LucideIcon } from "lucide-react";

export type Product = {
  name: string;
  slug: string;
  tone: string;
  summary: string;
  ingredients: string;
  benefits: string[];
  uses: string[];
  nutrition: string[];
  sizes: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  keywords: string[];
  readTime: string;
  body: { heading: string; copy: string }[];
};

export type Feature = {
  title: string;
  copy: string;
  Icon: LucideIcon;
};
