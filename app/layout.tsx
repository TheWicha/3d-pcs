import type { Metadata } from 'next';

import './globals.css';

import { Aldrich } from 'next/font/google';

const chivo = Aldrich({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-michroma',
});

export const metadata: Metadata = {
  title: 'Polski PCS',
  description: ' | digitalizacja usług portowych',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${chivo.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#06080c] text-white">{children}</body>
    </html>
  );
}
