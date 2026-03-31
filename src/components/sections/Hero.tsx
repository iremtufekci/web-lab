// src/components/sections/Hero.tsx
export default function Hero() {
  return (
    <section 
      id="hero" 
      className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 pt-20"
    >
      <div className="space-y-6 max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
        
        {/* Giriş Metni */}
        <p className="text-blue-600 dark:text-blue-400 font-mono font-medium tracking-widest uppercase text-sm">
          Merhaba, ben
        </p>

        {/* İsim Bölümü */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          İrem <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Tüfekçi</span>
        </h1>

        {/* Unvan / Açıklama */}
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium">
          Yazılım Mühendisliği Öğrencisi | Gömülü Sistemler & Web Geliştirme
        </p>

        {/* Butonlar */}
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a 
            href="#projects" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25"
          >
            Projelerimi Gör
          </a>
          <a 
            href="#contact" 
            className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 dark:hover:bg-gray-900 transition-all"
          >
            İletişime Geç
          </a>
        </div>

      </div>
    </section>
  );
}