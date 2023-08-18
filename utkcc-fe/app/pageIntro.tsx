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
  pageFooter?: string | React.ReactNode;
}) {
  const [name, setName] = useState('');
  const [slogan, setSlogan] = useState<React.ReactNode | string | null>('');
  const [exp, setExp] = useState<React.ReactNode | string | null>('');

  useEffect(() => {
    setName(pageName);
    setSlogan(pageSlogan);
    setExp(pageExp);
  }, [pageName, pageSlogan, pageExp]);

  return (
    <article className="mt-[20vh] h-auto">
      {/* section intro title */}
      <div className="text-kcc-theme font-bold text-md first-letter:uppercase">
        {name}
      </div>
      {/* section intro slogans */}
      <div className="text-black font-normal text-2xl my-6">{slogan}</div>
      <div className="max-h-[50vh] max-w-full flex justify-center">
        {children}
      </div>
      <p className="text-md break-keep hyphens-auto font-normal my-6 text-kcc-gray">
        {exp}
      </p>
      <Link
        href={`/${name}`}
        className="text-md underline underline-offset-[6px] text-kcc-gray"
      >
        Learn more
      </Link>
    </article>
  );
}
