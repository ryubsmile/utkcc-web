import FooterContactInfo from '@/components/footerContactInfo';
import './globals.css';
import { Metadata } from 'next';
import localFont from 'next/font/local';

// Frequently-used Metadata Saves.
export const METADATA_SAVES = {
  locationOrigin: `${process.env.BASE_URL}`,
  siteName: 'UTKCC',
  siteFullName: 'University of Toronto Korean Commerce Community',
  siteDescription:
    'UTKCC는 토론토 대학교 한인 학생들이 만든 경영 동아리입니다.',
  siteAuthors: [
    { name: 'Jaehyuk Ryu', url: 'https://www.linkedin.com/in/jaehyuk-ryu/' },
    { name: 'Hyunjun You', url: 'https://www.linkedin.com/in/hyunjunyou/' },
    { name: 'JinGeon Kim', url: 'https://www.linkedin.com/in/justingeonkim/' },
  ],
  colorHexCode: '#053C8C',
};

export const metadata: Metadata = {
  title: {
    template: `%s | ${METADATA_SAVES.siteName}`,
    default: `${METADATA_SAVES.siteName} - ${METADATA_SAVES.siteFullName}`,
  },
  description: METADATA_SAVES.siteDescription,
  authors: METADATA_SAVES.siteAuthors,
  keywords: ['UTKCC', 'University of Toronto', 'Uoft', 'Clubs'],
  referrer: 'origin-when-cross-origin',
  generator: 'Next.js',
  themeColor: '#FFF',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    minimumScale: 1,
    viewportFit: 'cover',
  },
  metadataBase: new URL(METADATA_SAVES.locationOrigin),
  alternates: {
    canonical: '/',
    languages: {
      'ko-KR': '/',
    },
  },
  colorScheme: 'only light',
  openGraph: {
    title: {
      template: `%s | ${METADATA_SAVES.siteName}`,
      default: METADATA_SAVES.siteName,
    },
    url: '/',
    siteName: METADATA_SAVES.siteName,
    description: METADATA_SAVES.siteDescription,
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
  appleWebApp: {
    title: 'UTKCC',
    statusBarStyle: 'black-translucent',
    startupImage: [
      // 'public/assets/fonts/startup/apple-touch-startup-image-768x1004.png',
      // {
      //   url: 'public/assets/fonts/startup/apple-touch-startup-image-1536x2008.png',
      //   media: '(device-width: 768px) and (device-height: 1024px)',
      // },
    ],
    capable: true,
  },
  category: 'academic',
};

const gMarket = localFont({
  src: [
    {
      path: './fonts/GmarketSansTTF/GmarketSansTTFMedium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/GmarketSansTTF/GmarketSansTTFLight.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/GmarketSansTTF/GmarketSansTTFBold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-main',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={gMarket.className}>
      <body
        className="w-[100dvw] min-h-[100lvh]"
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
