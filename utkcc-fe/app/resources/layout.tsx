import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="pt-16 px-8">{children}</div>;
}
