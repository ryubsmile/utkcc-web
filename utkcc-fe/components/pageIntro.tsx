'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function PageIntro({
  children,
  pageName,
  pageSlogan,
  pageExp,
  pageFooter,
}: {
  children: React.ReactNode;
  pageName: string;
  pageSlogan: string | React.ReactNode;
  pageExp: string | React.ReactNode;
  pageFooter?: string | React.ReactNode;
}) {
  const [name, setName] = useState('');
  const [slogan, setSlogan] = useState<React.ReactNode | string | null>(null);
  const [exp, setExp] = useState<React.ReactNode | string | null>(null);
  const [footer, setFooter] = useState<React.ReactNode | string | null>(null);

  useEffect(() => {
    setName(pageName);
    setSlogan(pageSlogan);
    setExp(pageExp);
    setFooter(pageFooter);
  }, [pageName, pageSlogan, pageExp, pageFooter]);

  return (
    <article className="h-auto">
      {/* section intro title */}
      <div className="text-kcc-theme font-bold first-letter:uppercase">
        {name}
      </div>
      {/* section intro slogans */}
      <div className="text-black font-normal text-2xl my-6">{slogan}</div>
      <div className="max-w-full flex justify-center mx-auto">{children}</div>
      <p className="break-keep hyphens-auto font-normal my-6 text-kcc-gray">
        {exp}
      </p>
    </article>
  );
}
