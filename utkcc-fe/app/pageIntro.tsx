'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

/**
 * the subpage needs to be the primary child url of the main page '/'
 */
export default function PageIntro({
  children,
  pageName,
  pageSlogan,
  pageExp,
}: {
  children: React.ReactNode;
  pageName: string;
  pageSlogan: string | React.ReactNode;
  pageExp: string | React.ReactNode;
}) {
  const [name, setName] = useState('');
  const [slogan, setSlogan] = useState<React.ReactNode | string | null>('');
  const [exp, setExp] = useState<React.ReactNode | string | null>('');

  useEffect(() => {
    setName(pageName);
    setSlogan(pageSlogan);
    setExp(pageExp);
  });

  return (
    <article className="mt-[20vh] h-auto">
      {/* section intro title */}
      <div className="text-kcc-theme font-semibold text-xl first-letter:uppercase">
        {name}
      </div>
      {/* section intro slogans */}
      <div className="text-black font-semibold text-2xl my-6">{slogan}</div>
      <div className="max-h-[50vh] max-w-full">{children}</div>
      <p className="text-xl break-keep hyphens-auto text-gray-600 my-6">
        {exp}
      </p>
      <Link href={`/${exp}`} className="underline underline-offset-[6px]">
        Learn more
      </Link>
    </article>
  );
}
