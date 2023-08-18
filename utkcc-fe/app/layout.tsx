import './globals.css';
import NavBar from './navbar';
import { Metadata } from 'next';
import localFont from 'next/font/local';

const gMarket = localFont({
  src: [
    {
      path: './GmarketSansTTF/GmarketSansTTFMedium.ttf',
      weight: '600',
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
        className="w-screen min-h-screen"
        // suppressHydrationWarning={true}
      >
        <header>
          <NavBar />
        </header>
        {/* pt-16 */}
        <main>{children}</main>
        <footer>
          <div className="flex flex-col min-h-[20vh] mt-[10vh] p-8 bg-kcc-theme text-white font-semibold">
            <div className="text-center">Contact Information</div>
            <div className="flex flex-col my-3 text-xs">
              <div>General Inquiries: koreancommerce@gmail.com</div>
              <div>President: seohyun.kang@mail.utoronto.ca</div>
              <div>Vice-president: suye.han@mail.utoronto.ca</div>
              <div>Sponsor Inquiries: yujin.shim@mail.utoronto.ca</div>
              <div className="py-2 opacity-50">
                Designed by Hyunjun You, <br /> Created by Jaehyuk Ryu and
                Jingeon Kim
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
