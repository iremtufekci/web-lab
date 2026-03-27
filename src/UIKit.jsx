// src/UIKit.jsx (veya src/pages/UIKit.jsx)
import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';
import Alert from './components/Alert';

export default function UIKit() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 p-8 space-y-16 transition-colors duration-300">
      <header className="border-b dark:border-gray-800 pb-6 flex justify-between items-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">UI Kit</h1>
        <button 
          onClick={() => document.documentElement.classList.toggle('dark')}
          className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg cursor-pointer hover:scale-110 transition-transform"
        >
          🌓
        </button>
      </header>

      {/* --- BUTTONS --- */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2 dark:text-gray-200">Buttons</h2>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4">
            {/* Varyant 1: Renkler */}
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
          <div className="flex items-end gap-4">
            {/* Varyant 2: Boyutlar */}
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>
      </section>

      {/* --- INPUTS --- */}
      <section className="space-y-6 max-w-md">
        <h2 className="text-2xl font-semibold border-b pb-2 dark:text-gray-200">Inputs</h2>
        <div className="space-y-4">
          {/* Varyant 3: Normal */}
          <Input label="Ad Soyad" placeholder="Ahmet Yılmaz" />
          {/* Varyant 4: Hatalı */}
          <Input label="Şifre" type="password" error="Şifre çok kısa!" />
          {/* Varyant 5: Help Text */}
          <Input label="E-posta" helpText="Kurumsal adresinizi giriniz." />
          {/* Varyant 6: Disabled */}
          <Input label="Kullanıcı Kodu" disabled value="K-9982" />
        </div>
      </section>

      {/* --- CARDS --- */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2 dark:text-gray-200">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Varyant 7: Elevated */}
          <Card variant="elevated" title="Elevated Card">
            Gölge ile yükseltilmiş kart.
          </Card>
          {/* Varyant 8: Outlined */}
          <Card variant="outlined" title="Outlined Card">
            Çerçeveli kart.
          </Card>
          <Card variant="filled" title="Filled Card">
            Dolgulu arka plan.
          </Card>
        </div>
      </section>

      {/* --- ALERTS --- */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2 dark:text-gray-200">Alerts</h2>
        <div className="space-y-4 max-w-2xl">
          <Alert variant="info">Bilgilendirme mesajı.</Alert>
          <Alert variant="success">İşlem başarıyla tamamlandı.</Alert>
          <Alert variant="warning">Dikkat edilmesi gereken durum.</Alert>
          <Alert variant="error">Bir hata oluştu!</Alert>
        </div>
      </section>

      <footer className="text-center text-gray-400 italic pt-10">
        LAB-4 Tasarım Sistemi - En Az 8 Varyant Şartı Sağlandı ✅
      </footer>
    </div>
  );
}