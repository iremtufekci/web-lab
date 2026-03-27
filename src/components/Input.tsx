// src/components/Input.tsx
import React from 'react';

// 1. Adım: Input'un alabileceği tüm özellikleri tanımlıyoruz.
// React'in standart input özelliklerini de (placeholder, value, onChange vb.) dahil ediyoruz.
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helpText?: string;
  id: string; // Erişilebilirlik için id zorunlu kılındı
}

export default function Input({
  label,
  type = "text",
  error,
  helpText,
  id,
  ...props
}: InputProps) {
  return (
    <div className="space-y-1 text-left">
      {/* Label Bölümü */}
      {label && (
        <label 
          htmlFor={id} 
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {label}
        </label>
      )}

      {/* Input Alanı */}
      <input
        id={id}
        type={type}
        className={`w-full px-3 py-2 rounded-lg border transition-colors focus:outline-none focus:ring-2 
          dark:bg-gray-800 dark:text-gray-100 
          ${error 
            ? "border-red-500 focus:ring-red-500" 
            : "border-gray-300 focus:ring-blue-500"
          } 
          ${props.disabled ? "bg-gray-100 dark:bg-gray-900 cursor-not-allowed opacity-60" : "bg-white dark:bg-gray-800"}`}
        aria-describedby={error ? `${id}-error` : helpText ? `${id}-help` : undefined}
        {...props}
      />

      {/* Hata Mesajı (Error) */}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-sm text-red-600 dark:text-red-400 font-medium">
          {error}
        </p>
      )}

      {/* Yardımcı Metin (Help Text) */}
      {helpText && !error && (
        <p id={`${id}-help`} className="text-sm text-gray-500 dark:text-gray-400 italic">
          {helpText}
        </p>
      )}
    </div>
  );
}