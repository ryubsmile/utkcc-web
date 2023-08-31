import NavBar from '@/components/navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <NavBar visibleThreshold="75vh" />
      </header>
      <main>{children}</main>
    </>
  );
}
