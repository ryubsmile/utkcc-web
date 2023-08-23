import NavBar from '@/components/navbar';
import FooterContactInfo from '@/components/footerContactInfo';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <div className="box-border pt-24 pb-16 lg:py-32 mx-8 lg:mx-32 lg:min-h-screen">
          {children}
        </div>
      </main>
    </>
  );
}
