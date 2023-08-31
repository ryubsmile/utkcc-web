import NavBar from '@/components/navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <NavBar visibleThreshold="100vh" />
      </header>
      <main>{children}</main>
    </>
  );
}
