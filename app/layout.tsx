import type { Metadata } from 'next';

import './globals.css';

import { Chivo } from 'next/font/google';

const chivo = Chivo({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
  variable: '--font-chivo',
});

export const metadata: Metadata = {
  title: 'PCS — Port Community System',
  description:
    'Asystent AI dla całego portu. Sprawdź status kontenera, zapytaj o operacje portowe, dokumenty maklerskie.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${chivo.variable}  h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0a0d12] text-white">{children}</body>
    </html>
  );
}
