import Link from 'next/link';

export default function Home() {
  return (
    <main>
      Main page
      <hr></hr>
      <Link href="/pages">pages to</Link>
    </main>
  );
}
