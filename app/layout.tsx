import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { NextAuthProvider } from "@/app/components/auth-provider"
import NavBar from './components/NavBar';
import Footer from './components/Footer';

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
            <NavBar />
            {children}
            <Footer/>
          </NextAuthProvider>
        </main>
      </body>
    </html>
  );
}