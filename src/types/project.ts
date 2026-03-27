// src/types/project.ts

export type Category = "frontend" | "fullstack" | "backend";
export type SortField = "year" | "title";
export type SortOrder = "asc" | "desc";

// BURASI ÇOK ÖNEMLİ: 'export' yazdığından emin ol
export interface Project {
  readonly id: number;
  title: string;
  description: string;
  tech: string[];
  year: number;
  category: Category;
  featured: boolean;
  image: string;
  demoUrl?: string;
  sourceUrl?: string;
}

export interface FilterState {
  search: string;
  category: Category | "all";
  sortField: SortField;
  sortOrder: SortOrder;
}