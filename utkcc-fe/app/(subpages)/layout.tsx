import NavBar from '@/components/navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <div className="flex box-border pt-24 pb-10 lg:py-32 mx-8 lg:mx-32 lg:min-h-screen">
          {children}
        </div>
      </main>
    </>
  );
}
