import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Newsletter',
};

export default function Newsletter() {
  return (
    <>
      <div>This is Newsletter page.</div>
      <Link href="/">Go Back</Link>
    </>
  );
}
