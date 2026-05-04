import type { Metadata } from 'next';
import { cookies } from 'next/headers';

import './globals.css';

import { ThemeProvider } from '@/components/ThemeProvider';
import TopNav from '@/components/TopNav';
import Footer from '@/components/sections/Footer';
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
      className={`${roboto.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head />
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider initialTheme={theme}>
          <TopNav />
          <main className="flex-1 mt-21">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
