import FooterContactInfo from '@/components/footerContactInfo';
import './globals.css';
import { Metadata } from 'next';
import localFont from 'next/font/local';

// Metadata Saves.
const LOCATION_ORIGIN = 'https://utkcc-web.vercel.app';
const SITE_NAME = 'UTKCC';
const SITE_DESCRIPTION =
  'UTKCC는 토론토 대학교 학생들이 만든 경영 동아리입니다.';
const SITE_AUTHORS = [
  { name: 'Jaehyuk Ryu', url: 'https://www.linkedin.com/in/jaehyuk-ryu/' },
  { name: 'Hyunjun You', url: 'https://www.linkedin.com/in/hyunjunyou/' },
  { name: 'JinGeon Kim', url: 'https://www.linkedin.com/in/justingeonkim/' },
];

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
    template: `%s | ${SITE_NAME}`,
    default: SITE_NAME,
  },
  description: SITE_DESCRIPTION,
  authors: SITE_AUTHORS,
  keywords: ['UTKCC', 'University of Toronto', 'Uoft', 'Clubs'],
  referrer: 'origin-when-cross-origin',
  generator: 'Next.js',
  themeColor: '#053C8C',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(LOCATION_ORIGIN),
  alternates: {
    canonical: '/',
    languages: {
      'ko-KR': '/',
    },
  },
  colorScheme: 'only light',
  openGraph: {
    title: {
      template: `%s | ${SITE_NAME}`,
      default: SITE_NAME,
    },
    url: '/',
    siteName: SITE_NAME,
    description: SITE_DESCRIPTION,
    type: 'website',
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
        className="w-screen min-h-[100vh] flex flex-col"
        // suppressHydrationWarning={true}
      >
        {children}
        <footer id="footer" className="mt-auto">
          <FooterContactInfo />
        </footer>
      </body>
    </html>
  );
}
