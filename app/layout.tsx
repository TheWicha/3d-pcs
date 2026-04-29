import type { Metadata } from 'next';

import './globals.css';

import { ThemeProvider } from '@/components/ThemeProvider';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-michroma',
});

export const metadata: Metadata = {
  title: 'Polski PCS',
  description: ' | digitalizacja usług portowych',
};

const themeScript = `
(function(){
  try {
    var stored = localStorage.getItem('pcs-theme');
    var preferred = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', stored || preferred);
  } catch(e){}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${roboto.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
