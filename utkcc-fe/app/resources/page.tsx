import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Resources',
};

export default function Page() {
  return (
    <>
      <div>This is Resources page.</div>
      <Link href="/">Go Back</Link>
    </>
  );
}
