import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Executives',
};

export default function Executives() {
  return (
    <>
      <div>This is Executives page.</div>
      <Link href="/">Go Back</Link>
    </>
  );
}
