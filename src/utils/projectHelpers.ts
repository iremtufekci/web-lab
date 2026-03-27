// src/utils/projectHelpers.ts
import type { Project, Category, SortField, SortOrder } from "../types/project";

// 1. Arama Filtresi: Başlık, açıklama veya teknolojiler içinde arama yapar
export function filterBySearch(projects: Project[], query: string): Project[] {
  if (!query.trim()) return projects;

  const lower = query.toLowerCase();
  return projects.filter(
    (p) =>
      p.title.toLowerCase().includes(lower) ||
      p.description.toLowerCase().includes(lower) ||
      p.tech.some((t) => t.toLowerCase().includes(lower))
  );
}

// 2. Kategori Filtresi: Seçilen kategoriye göre (frontend, backend vb.) ayırır
export function filterByCategory(
  projects: Project[],
  category: Category | "all"
): Project[] {
  if (category === "all") return projects;
  return projects.filter((p) => p.category === category);
}

// 3. Sıralama: Yıla veya Başlığa göre dizer
export function sortProjects(
  projects: Project[],
  field: SortField,
  order: SortOrder
): Project[] {
  // Orijinal diziyi bozmamak için kopyasını alıyoruz [...projects]
  const sorted = [...projects].sort((a, b) => {
    if (field === "year") {
      return a.year - b.year;
    }
    // Türkçe karakterlere duyarlı alfabetik sıralama
    return a.title.localeCompare(b.title, "tr");
  });

  return order === "desc" ? sorted.reverse() : sorted;
}

// 4. Hepsini Birleştir: Tüm filtreleri sırayla uygular
export function applyFilters(
  projects: Project[],
  search: string,
  category: Category | "all",
  sortField: SortField,
  sortOrder: SortOrder
): Project[] {
  let result = filterBySearch(projects, search);
  result = filterByCategory(result, category);
  result = sortProjects(result, sortField, sortOrder);
  return result;
}