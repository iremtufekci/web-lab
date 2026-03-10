// src/components/Alert.tsx

// 1. Adım: Alert'in alabileceği özellikleri (props) tanımlıyoruz
interface AlertProps {
  children: React.ReactNode;
  variant?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
}

export default function Alert({
  children,
  variant = "info",
  title,
  dismissible = false,
  onDismiss,
}: AlertProps) { // 2. Adım: :any yerine yukarıdaki tipi (AlertProps) kullanıyoruz

  // 3. Adım: Objeyi Record tipiyle tanımlıyoruz (Hata veren 'any' yerine bu gelecek)
  const variants: Record<string, string> = {
    info: "bg-blue-50 border-blue-500 text-blue-800 dark:bg-blue-950 dark:text-blue-200",
    success: "bg-green-50 border-green-500 text-green-800 dark:bg-green-950 dark:text-green-200",
    warning: "bg-amber-50 border-amber-500 text-amber-800 dark:bg-amber-950 dark:text-amber-200",
    error: "bg-red-50 border-red-500 text-red-800 dark:bg-red-950 dark:text-red-200",
  };

  return (
    <div 
      className={`p-4 border-l-4 rounded-r-lg flex justify-between items-start transition-all ${variants[variant]}`} 
      role="alert"
    >
      <div className="flex-1 text-left">
        {title && (
          <h4 className="font-bold mb-1 uppercase text-sm tracking-wide">
            {title}
          </h4>
        )}
        <div className="text-sm opacity-90 leading-relaxed">
          {children}
        </div>
      </div>

      {dismissible && (
        <button
          onClick={onDismiss}
          className="ml-4 text-lg font-bold leading-none hover:opacity-70 cursor-pointer transition-opacity"
          aria-label="Kapat"
        >
          ✕
        </button>
      )}
    </div>
  );
}