import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function Contact() {
  return (
    <>
      <div>This is Contact page.</div>
      <Link href="/">Go Back</Link>
    </>
  );
}
