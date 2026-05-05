import type { Metadata } from 'next';
import { cookies } from 'next/headers';

import './globals.css';

import { ThemeProvider } from '@/components/ThemeProvider';
import TopNav from '@/components/TopNav';
import Footer from '@/components/sections/Footer';
import { Chivo, Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-michroma',
});

const chivo = Chivo({
  subsets: ['latin'],
  weight: ['300', '400'],
  display: 'swap',
  variable: '--font-chivo',
});

export const metadata: Metadata = {
  title: 'Polski PCS',
  description: ' | digitalizacja usług portowych',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const theme = (cookieStore.get('pcs-theme')?.value ?? 'light') as 'light' | 'dark';

  return (
    <html
      lang="pl"
      data-theme={theme}
      className={`${roboto.variable} ${chivo.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preload" href="/video/poster.jpg" as="image" fetchPriority="high" />
        <link
          rel="preload"
          href="/video/animacja.webm"
          as="video"
          type="video/webm"
          fetchPriority="high"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-200 focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-fg focus:font-semibold"
        >
          Przejdź do treści głównej
        </a>
        <ThemeProvider initialTheme={theme}>
          <header role="banner">
            <TopNav />
          </header>
          <main id="main-content" className="flex-1 mt-24">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
