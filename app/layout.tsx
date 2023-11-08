import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

// Вы можете использовать корневой макет для изменения своих <html> и <body> тегов и добавления метаданных

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
      {/* шрифт будет применен ко всему вашему приложению. Здесь вы также добавляете класс сглаживания попутного ветра */}
    </html>
  );
}
