// src/components/ContactForm.tsx
import { useState, type FormEvent } from "react";

// --- Form veri modeli ---
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// --- Form hata modeli ---
interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

// --- Başlangıç değerleri ---
const initialFormData: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  // Form durumları (State)
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // --- Doğrulama (Validation) ---
  function validate(data: ContactFormData): FormErrors {
    const newErrors: FormErrors = {};

    // İsim kontrolü
    if (!data.name.trim()) {
      newErrors.name = "Ad soyad zorunludur.";
    } else if (data.name.trim().length < 2) {
      newErrors.name = "Ad soyad en az 2 karakter olmalıdır.";
    }

    // E-posta kontrolü (Regex ile)
    if (!data.email.trim()) {
      newErrors.email = "E-posta zorunludur.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Geçerli bir e-posta adresi giriniz.";
    }

    // Konu kontrolü
    if (!data.subject.trim()) {
      newErrors.subject = "Konu zorunludur.";
    }

    // Mesaj kontrolü
    if (!data.message.trim()) {
      newErrors.message = "Mesaj zorunludur.";
    } else if (data.message.trim().length < 10) {
      newErrors.message = "Mesaj en az 10 karakter olmalıdır.";
    }

    return newErrors;
  }

  // --- Tek alan güncelleme (Input değiştikçe) ---
  function handleChange(field: keyof ContactFormData, value: string) {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Yazmaya başlayınca o alanın hatasını temizle
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }));
    }
  }

  // --- Form gönderme (Submit) ---
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // Önce doğrula
    const newErrors = validate(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      // API çağrısı simülasyonu (1 saniye bekletir)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      console.log("Form başarıyla gönderildi:", formData);
      setSubmitSuccess(true);
      setFormData(initialFormData); // Formu temizle
    } catch {
      alert("Gönderim başarısız. Lütfen tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  }

  // --- Başarı Mesajı Görünümü ---
  if (submitSuccess) {
    return (
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
        <p className="text-green-800 dark:text-green-400 font-medium text-lg">
          ✅ Mesajınız başarıyla gönderildi!
        </p>
        <p className="text-sm text-green-600 dark:text-green-500 mt-2">
          En kısa sürede size geri dönüş yapacağım.
        </p>
        <button
          onClick={() => setSubmitSuccess(false)}
          className="mt-6 text-sm bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          Yeni mesaj gönder
        </button>
      </div>
    );
  }

  // --- Form Görünümü ---
  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-lg mx-auto text-left" noValidate>
      
      {/* Ad Soyad */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold mb-1 opacity-80">
          Ad Soyad
        </label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className={`w-full border rounded-lg px-3 py-2 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all ${
            errors.name ? "border-red-500 ring-1 ring-red-500" : "border-gray-300 dark:border-gray-700"
          }`}
          placeholder="Adınız Soyadınız"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name}</p>}
      </div>

      {/* E-posta */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold mb-1 opacity-80">
          E-posta
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className={`w-full border rounded-lg px-3 py-2 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all ${
            errors.email ? "border-red-500 ring-1 ring-red-500" : "border-gray-300 dark:border-gray-700"
          }`}
          placeholder="ornek@mail.com"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>}
      </div>

      {/* Konu Seçimi */}
      <div>
        <label htmlFor="subject" className="block text-sm font-semibold mb-1 opacity-80">
          Konu
        </label>
        <select
          id="subject"
          value={formData.subject}
          onChange={(e) => handleChange("subject", e.target.value)}
          className={`w-full border rounded-lg px-3 py-2 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all ${
            errors.subject ? "border-red-500 ring-1 ring-red-500" : "border-gray-300 dark:border-gray-700"
          }`}
        >
          <option value="">Konu seçiniz...</option>
          <option value="genel">Genel</option>
          <option value="destek">Teknik Destek</option>
          <option value="oneri">Öneri</option>
          <option value="isbirligi">İş Birliği</option>
        </select>
        {errors.subject && <p className="text-red-500 text-xs mt-1 font-medium">{errors.subject}</p>}
      </div>

      {/* Mesaj Alanı */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold mb-1 opacity-80">
          Mesaj
        </label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className={`w-full border rounded-lg px-3 py-2 resize-y bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all ${
            errors.message ? "border-red-500 ring-1 ring-red-500" : "border-gray-300 dark:border-gray-700"
          }`}
          placeholder="Mesajınızı buraya yazınız..."
        />
        {errors.message && <p className="text-red-500 text-xs mt-1 font-medium">{errors.message}</p>}
      </div>

      {/* Gönder Butonu */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            Gönderiliyor...
          </span>
        ) : (
          "Mesajı Gönder"
        )}
      </button>
    </form>
  );
}