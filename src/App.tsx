// src/App.tsx
import Button from './components/Button.tsx'; // .jsx uzantısını sildik ve yolu düzelttik
import Input from './components/Input.tsx';
import Card from './components/Card.tsx';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 font-sans">
      
      {/* --- HEADER & NAV --- */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <nav className="max-w-6xl mx-auto px-4 h-16 flex justify-between items-center">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            İrem Tüfekçi
          </span>
          <div className="hidden md:flex gap-6 font-medium">
            <a href="#hakkimda" className="hover:text-blue-600 transition-colors">Hakkımda</a>
            <a href="#projeler" className="hover:text-blue-600 transition-colors">Projeler</a>
            <a href="#iletisim" className="hover:text-blue-600 transition-colors">İletişim</a>
          </div>
          <button 
            onClick={() => document.documentElement.classList.toggle('dark')}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Temayı Değiştir"
          >
            🌓
          </button>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12 space-y-24">
        
        {/* --- HAKKIMDA BÖLÜMÜ --- */}
        <section id="hakkimda" className="flex flex-col md:flex-row items-center gap-12 pt-10 scroll-mt-20">
          <div className="md:w-1/3 flex justify-center">
            <img 
              src="https://picsum.photos/seed/irem/300/300" 
              alt="İrem Tüfekçi" 
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-800"
            />
          </div>
          <div className="md:w-2/3 space-y-6">
            <h2 className="text-4xl font-extrabold text-blue-600 dark:text-blue-400 italic">Hakkımda</h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Fırat Üniversitesi Yazılım Mühendisliği öğrencisiyim. Gömülü sistemler ve 
              aviyonik teknolojilere odaklanıyorum. Kullanıcı dostu arayüzler ve 
              yüksek performanslı sistemler geliştirmek en büyük tutkum.
            </p>
            <div className="flex flex-wrap gap-3">
              {['React', 'TypeScript', 'Tailwind', 'STM32', 'Embedded'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold border border-blue-200 dark:border-blue-800">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* --- PROJELERİM --- */}
        <section id="projeler" className="space-y-10 scroll-mt-20">
          <h2 className="text-3xl font-bold text-center">Projelerim</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card 
              title="Umay Duygu Analizi" 
              image="https://picsum.photos/seed/umay/400/250"
              variant="elevated"
            >
              Yapay zeka ve React kullanarak geliştirdiğim sentiment analiz platformu.
            </Card>
            <Card 
              title="MediaTrack IoT" 
              image="https://picsum.photos/seed/iot/400/250"
              variant="elevated"
            >
              ESP32 tabanlı gerçek zamanlı hasta takip ve sağlık izleme sistemi.
            </Card>
            <Card 
              title="SkyLogic V2" 
              image="https://picsum.photos/seed/rocket/400/250"
              variant="elevated"
            >
              Yüksek irtifa roketleri için uçuş kontrol bilgisayarı yazılım mimarisi.
            </Card>
          </div>
        </section>

        {/* --- İLETİŞİM --- */}
        <section id="iletisim" className="max-w-2xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">İletişim</h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <Input id="contact-name" label="Ad Soyad" placeholder="Adınızı giriniz..." />
            <Input id="contact-email" label="E-posta" type="email" placeholder="iletisim@mail.com" />
            <Input id="contact-msg" label="Mesajınız" placeholder="Nasıl yardımcı olabilirim?" />
            <Button variant="primary" className="w-full py-3 shadow-lg shadow-blue-500/30">Gönder</Button>
          </form>
        </section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-gray-200 dark:border-gray-800 text-center text-gray-500">
        <p>© 2026 İrem Tüfekçi. Tüm hakları saklıdır.</p>
        <p className="text-xs mt-2 italic text-gray-400">Software Engineer | Embedded Enthusiast</p>
      </footer>
    </div>
  );
}

export default App;