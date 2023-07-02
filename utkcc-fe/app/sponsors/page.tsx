import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sponsors',
};

export default function Page() {
  return (
    <>
      <div>This is Sponsors page.</div>
      <Link href="/">Go Back</Link>
    </>
  );
}
