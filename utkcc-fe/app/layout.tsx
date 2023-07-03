import './globals.css';
import { Inter } from 'next/font/google';
import NavBar from './navbar';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | UTKCC',
    default: 'UTKCC',
  },
  description: 'The Official Website of UTKCC, Created by its Members.',
  creator: 'ryubsmile and Jin Geon Kim',
  keywords: ['UTKCC', 'University of Toronto', 'Uoft', 'Clubs'],
  referrer: 'origin-when-cross-origin',
  generator: 'Next.js',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <NavBar>{{ children: '' }}</NavBar>
        </header>
        <main className="pt-14">{children}</main>
      </body>
    </html>
  );
}
