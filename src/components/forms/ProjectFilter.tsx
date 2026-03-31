// src/components/forms/ProjectFilter.tsx
import type { Category, SortField, SortOrder } from "../../types/project";

interface ProjectFilterProps {
  search: string;
  onSearchChange: (value: string) => void;
  category: Category | "all";
  onCategoryChange: (value: Category | "all") => void;
  sortField: SortField;
  onSortFieldChange: (value: SortField) => void;
  sortOrder: SortOrder;
  onSortOrderChange: (value: SortOrder) => void;
  resultCount: number;
  totalCount: number;
}

const categories: { value: Category | "all"; label: string }[] = [
  { value: "all", label: "Tümü" },
  { value: "frontend", label: "Frontend" },
  { value: "fullstack", label: "Full Stack" },
  { value: "backend", label: "Backend" },
];

export default function ProjectFilter({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  sortField,
  onSortFieldChange,
  sortOrder,
  onSortOrderChange,
  resultCount,
  totalCount,
}: ProjectFilterProps) {
  return (
    <div className="space-y-6 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
      
      {/* Üst Satır: Arama Kutusu */}
      <div className="relative group">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors">
          🔍
        </span>
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Proje ara (başlık, açıklama, teknoloji)..."
          className="w-full border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 pl-10 bg-gray-50 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
          aria-label="Proje ara"
        />
      </div>

      {/* Alt Satır: Filtreler ve Sıralama */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Kategori Butonları */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => onCategoryChange(cat.value)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm ${
                category === cat.value
                  ? "bg-blue-600 text-white shadow-blue-500/25"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
              aria-pressed={category === cat.value}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Sıralama Kontrolleri */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <select
            value={sortField}
            onChange={(e) => onSortFieldChange(e.target.value as SortField)}
            className="flex-1 md:flex-none border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 text-sm bg-gray-50 dark:bg-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Sıralama ölçütü"
          >
            <option value="year">Yıla Göre</option>
            <option value="title">Başlığa Göre</option>
          </select>

          <button
            onClick={() => onSortOrderChange(sortOrder === "asc" ? "desc" : "asc")}
            className="border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white transition-colors whitespace-nowrap"
            aria-label={`Sıralama yönü: ${sortOrder === "asc" ? "artan" : "azalan"}`}
          >
            {sortOrder === "asc" ? "↑ Artan" : "↓ Azalan"}
          </button>
        </div>
      </div>

      {/* Sonuç Sayısı Alt Bilgi */}
      <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">
        <span>Arama Sonuçları</span>
        <span>
          {resultCount} / {totalCount} Proje Listeleniyor
        </span>
      </div>
    </div>
  );
}