import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
};

export default function About() {
  return (
    <>
      <div>This is About page.</div>
      <Link href="/">Go Back</Link>
    </>
  );
}
