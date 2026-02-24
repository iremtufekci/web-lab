function App() {
  return (
    <div className="App">
      <a href="#main-content" className="skip-link">Ana içeriğe atla</a>
      {/* 1. Header: Navigasyon kısmı */}
      <header>
  <h1>İrem Tüfekçi</h1> {/* Eksik olan ana başlık */}
  <nav aria-label="Ana Menü"> {/* aria-label eklendi */}
    <ul>
      <li><a href="#hakkimda">Hakkımda</a></li>
      <li><a href="#projeler">Projeler</a></li>
      <li><a href="#iletisim">İletişim</a></li>
    </ul>
  </nav>
</header>

      {/* 2. Main: Ana içerik alanı */}
      <main id="main-content">
        {/* Hakkımda Bölümü */}
        <section id="hakkimda">
          <h2>Hakkımda</h2>
          <p>"Fırat Üniversitesi Yazılım Mühendisliği öğrencisiyim. Gömülü sistemler, mikrodenetleyiciler (ESP32, STM32) ve elektronik devre tasarımı üzerine yoğunlaşarak teknik becerilerimi geliştiriyorum. Özellikle havacılık ve roket teknolojilerine duyduğum ilgiyle, uçuş kontrol bilgisayarları ve aviyonik sistemler üzerinde projeler üretiyor, Teknofest gibi yarışmalar için heyecanla çalışıyorum. Yazılım dünyasında hem donanım seviyesinde hem de modern web teknolojilerinde (React, Node.js) çözüm üretmeyi hedefleyen, öğrenmeye tutkulu bir mühendis adayıyım."</p>
          <img 
    src="/File.jpg" 
    alt="İrem Tüfekçi'nin profesyonel vesikalık fotoğrafı" 
  />
  <h3>İrem Tüfekçi</h3>
  <p>Fırat Üniversitesi Yazılım Mühendisliği öğrencisiyim.</p>
         <h4>Kullandığım Teknolojiler</h4>
  <ul>
    <li>C / C++ (Gömülü Sistemler)</li>
    <li>React & TypeScript</li>
    
    <li>C# & .NET</li>
  </ul>
        </section>

        {/* Projeler Bölümü */}
        <section id="projeler">
          <h2>Projelerim</h2>
                {/* Umay Projesi */}
  <article>
    <h3>Umay Duygu Analizi Sistemi</h3>
    
  <p><strong>Teknolojiler:</strong> Python, FastAPI, React, MongoDB</p>
    <img 
      src="/umay-main.png" 
      alt="Umay projesinin kullanıcı arayüzünde analiz sonuçlarını ve önerileri gösteren ekran" 
    />
    <p>Ruh haline göre içerik öneren yapay zeka sistemi.</p>
  </article>

  <br />

  {/* MediaTrack Projesi */}
  <article>
    <h3>MediaTrack Hasta Takip Platformu</h3>
    <p>IoT tabanlı sağlık verisi izleme sistemi.</p>
    <p><strong>Teknolojiler:</strong> ESP32, C++, Node.js, Socket.io, MongoDB</p>
    
    {/* MediaTrack için 3 ayrı resim */}
    <img 
      src="/mediatrackanasayfa.png" 
      alt="MediaTrack kişiye özel anasayfa" 
    />
    <img 
      src="/mediatrackistatikselanaliz.png" 
      alt="MediaTrack sisteminde sensörden gelen veriler" 
    />
    <img 
      src="/mediatrackgiriş.png" 
      alt="MediaTrack uygulamasının giriş sayfası" 
    />
  </article>
        </section>

        {/* İletişim Bölümü */}
        <section id="iletisim">
          <h2>İletişim</h2>
             <form action="#" method="POST" noValidate={true}>
    <fieldset>
      <legend>İletişim Formu</legend>

      {/* Ad Soyad Alanı */}
      <div className="form-group">
        <label htmlFor="name">Ad Soyad:</label>
        <input 
          type="text" 
          id="name" 
          name="name"
          required 
          minLength={2}
          aria-describedby="name-error" 
        />
        <small id="name-error" className="error-msg" role="alert"></small>
      </div>

      {/* E-posta Alanı */}
      <div className="form-group">
        <label htmlFor="email">E-posta:</label>
        <input 
          type="email" 
          id="email" 
          name="email"
          required
          aria-describedby="email-error" 
        />
        <small id="email-error" className="error-msg" role="alert"></small>
      </div>

      {/* Konu Seçimi */}
      <div className="form-group">
        <label htmlFor="subject">Konu:</label>
        <select id="subject" name="subject" required aria-describedby="subject-error">
          <option value="">-- Seçiniz --</option>
          <option value="is">İş Teklifi</option>
          <option value="soru">Soru</option>
          <option value="oneri">Öneri</option>
        </select>
        <small id="subject-error" className="error-msg" role="alert"></small>
      </div>

      {/* Mesaj Alanı */}
      <div className="form-group">
        <label htmlFor="message">Mesajınız:</label>
        <textarea 
          id="message" 
          name="message"
          rows={5} 
          required 
          minLength={10}
          aria-describedby="message-error">
        </textarea>
        <small id="message-error" className="error-msg" role="alert"></small>
      </div>

      <button type="submit">Gönder</button>
    </fieldset>
  </form>
        </section>
      </main>

      {/* 3. Footer: Alt bilgi kısmı */}
      <footer>
        <p>&copy; 2026 İrem Tüfekçi. Tüm hakları saklıdır.</p>
        {/* Sosyal medya bağlantıları eklendi */}
  <div>
    <a href="https://github.com/iremtufekci" target="_blank" rel="noopener noreferrer">GitHub</a> | 
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
  </div>
      </footer>
    </div>
  );
}

export default App;