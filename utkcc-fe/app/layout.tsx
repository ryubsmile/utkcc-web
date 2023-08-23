import './globals.css';
import NavBar from '@/components/navbar';
import FooterContactInfo from '@/components/footerContactInfo';
import { Metadata } from 'next';
import localFont from 'next/font/local';

const gMarket = localFont({
  src: [
    {
      path: './GmarketSansTTF/GmarketSansTTFMedium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './GmarketSansTTF/GmarketSansTTFLight.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './GmarketSansTTF/GmarketSansTTFBold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-main',
});

export const metadata: Metadata = {
  title: {
    template: '%s | UTKCC',
    default: 'UTKCC',
  },
  description: 'The Official Website of UTKCC',
  creator: 'ryubsmile, Hyunjun You and Jin Geon Kim',
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
    <html lang="en" className={gMarket.className}>
      <body
        className="w-screen min-h-[100dvh]"
        // suppressHydrationWarning={true}
      >
        <header>
          <NavBar />
        </header>
        <main>{children}</main>
        <footer>
          <FooterContactInfo />
        </footer>
      </body>
    </html>
  );
}
