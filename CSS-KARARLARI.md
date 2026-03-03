1. Breakpoint Seçimi
Neden 640px ve 1024px?: Modern cihaz standartlarını (mobil, tablet, masaüstü) tam olarak kapsamak için bu değerleri seçtim. Bu sayede sayfam hem küçük telefonlarda hem de geniş ekranlı monitörlerde düzenini koruyor.

İçerik Değişimi: 640px altında içerikler tek sütun halinde alt alta dizilirken, bu sınırın üzerine çıkıldığında navigasyon menüsü ve proje kartları yatay düzene geçerek ekran alanını verimli kullanıyor.

2. Layout Tercihleri
Header (Flexbox): Navigasyon çubuğundaki logo ve menü elemanlarını tek bir eksende (yatayda) kolayca iki uca yaslamak ve dikeyde ortalamak için Flexbox'ı tercih ettim.

Proje Kartları (Grid): Umay ve MediaTrack projelerimi sergilerken, hem sütunları hem de satırları (iki boyutlu düzen) mükemmel bir şekilde hizalamak için CSS Grid yapısını kullandım.

auto-fit Kullanımı: Kartların ekran genişliğine göre boşlukları otomatik doldurması ve ek bir medya sorgusu yazmadan responsive davranması için auto-fit özelliğini kullandım.

3. Design Tokens
Renk Paleti: Modern ve erişilebilir bir görünüm için ana renk olarak profesyonel bir mavi tonu, metinlerde ise göz yormayan yüksek kontrastlı gri tonları tercih ettim.

Spacing Skalası: Tasarımda tutarlılık sağlamak için 8px, 16px ve 24px gibi katlanarak giden bir boşluk sistemi kurdum.

Fluid Typography: clamp() fonksiyonu ile yazı boyutlarını dinamik hale getirdim; böylece yazılar ekran genişliğine göre manuel müdahale gerektirmeden akıcı bir şekilde büyüyüp küçülüyor.

4. Responsive Stratejiler
Mobile-First Yaklaşımı: Önce mobil görünüm için temel stilleri yazdım, ardından büyük ekranlar için @media sorguları ekledim; bu strateji kodun daha temiz ve performanslı olmasını sağladı.

Breakpoint Değişimleri: Navigasyon listesi (nav ul), proje grid yapısı ve genel padding değerleri belirlediğim kırılma noktalarında cihaz tipine göre şekil değiştiriyor.

Görsel Yönetimi: Tüm görsellerde max-width: 100% kullanarak taşmaları engelledim, proje kartlarında ise object-fit: cover kullanarak resimlerin kutu içine düzgünce yerleşmesini sağladım.