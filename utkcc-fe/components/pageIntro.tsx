'use client';
import { useState, useEffect } from 'react';

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
  const [slogan, setSlogan] = useState<React.ReactNode | string | null>(null);
  const [exp, setExp] = useState<React.ReactNode | string | null>(null);

  useEffect(() => {
    setName(pageName);
    setSlogan(pageSlogan);
    setExp(pageExp);
  }, [pageName, pageSlogan, pageExp]);

  return (
    <article className="h-auto lg:grid grid-cols-right-tilt-twin-columns gap-x-[5vw] grid-rows-3-auto-rows grid-flow-col-dense items-end overflow-y-visible">
      {/* section intro title */}
      <div className="text-kcc-theme font-bold first-letter:uppercase self-end">
        {name}
      </div>
      {/* section intro slogans */}
      <div className="text-black font-normal text-2xl my-6">{slogan}</div>
      <div className="max-w-full w-full flex items-center justify-center mx-auto row-span-2 row-start-2">
        {children}
      </div>
      <p className="break-keep hyphens-auto font-normal my-6 text-kcc-gray self-start">
        {exp}
      </p>
    </article>
  );
}
