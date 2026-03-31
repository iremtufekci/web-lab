// src/components/Card.tsx
import React from 'react';

// 1. Adım: Card Props'larını tanımlıyoruz
interface CardProps {
  title?: string;
  children: React.ReactNode;
  image?: string;
  imageAlt?: string;
  footer?: React.ReactNode;
  variant?: 'elevated' | 'outlined' | 'filled';
}

export default function Card({
  title,
  children,
  image,
  imageAlt,
  footer,
  variant = "elevated",
}: CardProps) {
  
  // 2. Adım: 'any' yerine Record kullanarak TypeScript'i mutlu ediyoruz
  const variants: Record<string, string> = {
    elevated: "bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow",
    outlined: "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700",
    filled: "bg-gray-100 dark:bg-gray-800",
  };

  return (
    <div className={`rounded-xl overflow-hidden ${variants[variant]}`}>
      {/* Kart Görseli */}
      {image && (
        <img src={image} alt={imageAlt} className="w-full h-48 object-cover" />
      )}
      
      <div className="p-5">
        {/* Kart Başlığı */}
        {title && (
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white text-left">
            {title}
          </h3>
        )}
        
        {/* Kart İçeriği */}
        <div className="text-gray-600 dark:text-gray-400 text-left">
          {children}
        </div>
      </div>

      {/* Kart Alt Bilgisi (Footer) */}
      {footer && (
        <div className="px-5 py-4 bg-gray-50/50 dark:bg-gray-900/50 border-t border-gray-100 dark:border-gray-700">
          {footer}
        </div>
      )}
    </div>
  );
}