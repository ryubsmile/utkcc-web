import Link from 'next/link';

export default function Home() {
  return (
    <div>
      Main page
      <hr />
      <Link href="/events">to events</Link>
      <hr />
      <Link href="/executives">to executives</Link>
      <hr />
      <Link href="/newsletter">to newsletter</Link>
      <hr />
      <Link href="/resources">to resources</Link>
      <hr />
      <Link href="/sponsors">to sponsors</Link>
    </div>
  );
}
