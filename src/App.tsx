// src/App.tsx içindeki doğru yollar:
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills"; // Yeni oluşturduğun
import ProjectList from "./components/sections/ProjectList";
import ContactSection from "./components/sections/ContactSection"; // Yeni oluşturduğun
export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 font-sans">
      
      {/* 1. Üst Menü */}
      <Header />

      {/* Ana İçerik Alanı */}
      <main>
        {/* 2. Giriş Bölümü */}
        <Hero />

        {/* 3. Hakkımda Bölümü */}
        <About />

        {/* 4. Yetenekler Bölümü */}
        <Skills />

        {/* 5. Projeler Bölümü (Filtreleme ve Liste burada paketli) */}
        <ProjectList />

        {/* 6. İletişim Bölümü */}
        <ContactSection />
      </main>

      {/* 7. Alt Bilgi */}
      <Footer />

    </div>
  );
}