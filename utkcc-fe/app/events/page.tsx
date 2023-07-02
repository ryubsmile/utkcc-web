import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Events',
};

export default function Page() {
  return (
    <>
      <div>This is Events page.</div>
      <Link href="/">Go Back</Link>
    </>
  );
}
