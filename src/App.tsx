// src/App.tsx
import { useState, useEffect } from "react";
// Sadece tipleri alırken 'import type' kullanıyoruz
import type { Project, Category, SortField, SortOrder } from "./types/project";
import { fetchProjects } from "./services/projectService";
import { applyFilters } from "./utils/projectHelpers";

// Bileşenlerin
import Card from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button";

export default function App() {
  // --- STATE (DURUM) ---
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
        setProjects(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Veriler yüklenemedi.");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  // --- FİLTRELEME MANTIĞI ---
  const filtered = applyFilters(
    projects,
    search,
    category,
    sortField,
    sortOrder
  );

  const categories: (Category | "all")[] = ["all", "frontend", "fullstack", "backend"];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Başlık Bölümü */}
        <header className="flex justify-between items-center border-b pb-6 dark:border-gray-800">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent italic">
            İrem Tüfekçi - Projeler
          </h1>
          <button 
            onClick={() => document.documentElement.classList.toggle('dark')}
            className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-100 transition-colors"
          >
            🌓 Tema Değiştir
          </button>
        </header>

        {/* Hata Mesajı */}
        {error && (
          <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm font-medium">
            ⚠️ {error}
          </div>
        )}

        {/* Filtreleme ve Arama Paneli */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
          
          {/* Arama */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Arama</label>
            <Input 
              id="project-search-input" // HATAYI ÇÖZEN SATIR BU!
    placeholder="İsim veya teknoloji yazın..." 
    value={search} 
    onChange={(e) => setSearch(e.target.value)}
    // İstersen label'ı direkt bileşen içinden de verebilirsin:
    // label="Arama" 
  />
</div>

          {/* Kategori Seçimi */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Kategori</label>
            <div className="flex flex-wrap gap-1">
              {categories.map(cat => (
                <Button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  // Variant hatası vermemesi için sadece className ile kontrol ediyoruz
                  className={`text-[10px] py-1 px-3 ${category === cat ? "bg-blue-600 text-white" : "bg-gray-100 dark:bg-gray-800"}`}
                >
                  {cat === "all" ? "Tümü" : cat}
                </Button>
              ))}
            </div>
          </div>

          {/* Sıralama Seçeneği */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Sıralama</label>
            <select 
              className="w-full p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={sortField}
              onChange={(e) => setSortField(e.target.value as SortField)}
            >
              <option value="year">Yıla Göre</option>
              <option value="title">İsme Göre</option>
            </select>
          </div>

          {/* Sıralama Yönü */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Yön</label>
            <Button 
              className="w-full text-xs font-semibold py-2.5 border border-gray-200 dark:border-gray-700"
              onClick={() => setSortOrder(prev => prev === "asc" ? "desc" : "asc")}
            >
              {sortOrder === "asc" ? "⬆ Artan (A-Z)" : "⬇ Azalan (Z-A)"}
            </Button>
          </div>
        </div>

        {/* Yükleniyor / Boş Durum */}
        {loading && <div className="text-center py-20 animate-pulse text-blue-600 font-medium">Veriler yükleniyor...</div>}
        
        {!loading && filtered.length === 0 && (
          <div className="text-center py-20 bg-gray-100 dark:bg-gray-900/50 rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-800">
            <p className="text-gray-400 italic">Aradığınız kriterlere uygun bir proje bulamadık.</p>
          </div>
        )}

        {/* Proje Kartları Listesi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(project => (
            <Card 
              key={project.id}
              title={project.title}
              image={`https://picsum.photos/seed/${project.id}/400/250`}
              // Eğer Card bileşeninde variant="elevated" hata veriyorsa aşağıdaki satırı silebilirsin:
              // variant="elevated" 
              footer={
                <div className="flex justify-between items-center w-full">
                  <span className="text-[10px] font-bold text-blue-600">{project.category.toUpperCase()}</span>
                  <span className="text-[10px] text-gray-400 font-mono">{project.year}</span>
                </div>
              }
            >
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tech.map(t => (
                  <span key={t} className="text-[9px] font-bold bg-blue-50 dark:bg-blue-900/20 text-blue-600 px-2 py-0.5 rounded border border-blue-100 dark:border-blue-800">
                    {t}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Alt Bilgi */}
        <footer className="text-center text-[10px] text-gray-400 uppercase tracking-widest pt-12 border-t border-gray-100 dark:border-gray-800">
          Toplam <strong>{projects.length}</strong> projeden <strong>{filtered.length}</strong> tanesi listeleniyor.
        </footer>
      </div>
    </div>
  );
}