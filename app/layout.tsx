import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { NextAuthProvider } from "@/app/components/auth-provider"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bodima Accommodations',
  description: 'Find your perfect boarding place',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen">
          <NextAuthProvider>
          {children}
          </NextAuthProvider>
        </main>
      </body>
    </html>
  );
}