import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sponsors',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="pt-24 px-8">{children}</div>;
}
