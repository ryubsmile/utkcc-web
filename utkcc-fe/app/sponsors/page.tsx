import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sponsors',
};

export default function Sponsors() {
  return (
    <>
      <div>This is Sponsors page.</div>
      <Link href="/">Go Back</Link>
    </>
  );
}
