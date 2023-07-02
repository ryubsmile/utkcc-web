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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar>{{ children: '' }}</NavBar>
        {children}
      </body>
    </html>
  );
}
