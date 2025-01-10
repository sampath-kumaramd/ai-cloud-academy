import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/layout/nav-bar';
import Footer from '@/layout/footer';

export const metadata: Metadata = {
  title: 'AI Clould Academy',
  description: 'Created by AI Cluoud Academy',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
