// src/components/sections/ProjectList.tsx
import { useState, useEffect, useMemo } from "react";
import type { Project, Category, SortField, SortOrder } from "../../types/project";
import { fetchProjects } from "../../services/projectService";
import { applyFilters } from "../../utils/projectHelpers";
import ProjectFilter from "../forms/ProjectFilter";
import Card from "../ui/Card";

export default function ProjectList() {
  // --- STATE ---
  const [projects, setProjects] = useState<Project[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category | "all">("all");
  const [sortField, setSortField] = useState<SortField>("year");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // --- VERİ ÇEKME ---
  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProjects();
        setProjects(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Bilinmeyen hata oluştu");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  // --- FİLTRELENMİŞ VERİ (useMemo ile performans kazancı) ---
  const filtered = useMemo(
    () => applyFilters(projects, search, category, sortField, sortOrder),
    [projects, search, category, sortField, sortOrder]
  );

  return (
    <section id="projects" className="py-20 scroll-mt-20">
      <div className="space-y-12">
        {/* Başlık Bölümü */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold tracking-tight">Projelerim</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto italic">
            Üzerinde çalıştığım projeler ve kullandığım teknolojiler.
          </p>
        </div>

        {/* Hata Durumu */}
        {error && (
          <div className="p-6 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-2xl text-center">
            <p className="text-red-600 dark:text-red-400 font-medium">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="text-sm text-red-700 underline mt-2 font-bold"
            >
              Tekrar Dene
            </button>
          </div>
        )}

        {/* Filtreler */}
        {!loading && !error && (
          <ProjectFilter
            search={search}
            onSearchChange={setSearch}
            category={category}
            onCategoryChange={setCategory}
            sortField={sortField}
            onSortFieldChange={setSortField}
            sortOrder={sortOrder}
            onSortOrderChange={setSortOrder}
            resultCount={filtered.length}
            totalCount={projects.length}
          />
        )}

        {/* Yükleniyor Durumu */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-pulse">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-80 bg-gray-200 dark:bg-gray-800 rounded-3xl"></div>
            ))}
          </div>
        )}

        {/* Boş Durum */}
        {!loading && !error && filtered.length === 0 && (
          <div className="text-center py-20 bg-gray-100 dark:bg-gray-900/50 rounded-3xl border-2 border-dashed border-gray-200 dark:border-gray-800">
            <p className="text-gray-500 italic">Eşleşen proje bulunamadı.</p>
          </div>
        )}

        {/* Proje Listesi (Grid) */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project) => (
              <Card
                key={project.id}
                title={project.title}
                image={`https://picsum.photos/seed/${project.id}/400/250`}
                footer={
                  <div className="flex justify-between items-center w-full text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    <span>{project.year} · {project.category}</span>
                    {project.featured && (
                      <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-500 px-2 py-0.5 rounded italic">Öne Çıkan</span>
                    )}
                  </div>
                }
              >
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 line-clamp-3 text-left">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span 
                      key={t} 
                      className="text-[9px] font-bold bg-blue-50 dark:bg-blue-900/20 text-blue-600 px-2 py-1 rounded-md border border-blue-100 dark:border-blue-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}