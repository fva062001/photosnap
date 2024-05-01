import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import '@fontsource-variable/dm-sans';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Photosnap',
  description:
    'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories, and connect with others. made by fva062001',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
