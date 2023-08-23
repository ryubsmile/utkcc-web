import NavBar from '@/components/navbar';
import FooterContactInfo from '@/components/footerContactInfo';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <NavBar visibleThreshold="550dvh" />
      </header>
      <main>{children}</main>
    </>
  );
}
