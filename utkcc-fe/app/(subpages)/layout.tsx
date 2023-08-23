import NavBar from '@/components/navbar';
import FooterContactInfo from '@/components/footerContactInfo';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <div className="pt-24 px-8">{children}</div>;
      </main>
      <footer>
        <FooterContactInfo />
      </footer>
    </>
  );
}
