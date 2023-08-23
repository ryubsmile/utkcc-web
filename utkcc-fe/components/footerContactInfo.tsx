'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function FooterContactInfo() {
  const [mounted, setMounted] = useState(false);

  const kccEmail = 'koreancommerce@gmail.com';
  const presEmail = 'seohyun.kang@mail.utoronto.ca';
  const vicePresEmail = 'suye.han@mail.utoronto.ca';
  const erDirectorEmail = 'yujin.shim@mail.utoronto.ca';

  const loadingText = 'loading...';

  useEffect(() => {
    setMounted(true);
  }, [setMounted]);

  return (
    <div className="flex flex-col min-h-[20vh] p-8 lg:px-32 bg-kcc-theme text-white font-normal">
      <div className="text-center">Contact Information</div>
      <div className="flex flex-col my-3 text-xs">
        <div>General Inquiries: {mounted ? kccEmail : loadingText}</div>
        <div>President: {mounted ? presEmail : loadingText}</div>
        <div>Vice-president: {mounted ? vicePresEmail : loadingText}</div>
        <div>Sponsor Inquiries: {mounted ? erDirectorEmail : loadingText}</div>
        <div className="pt-8 pb-2 opacity-30">
          Designed by{' '}
          <Link href="https://www.instagram.com/hyunjun2003/" target="_blank">
            Hyunjun You
          </Link>
          . <br />
          Created by{' '}
          <Link href="https://www.instagram.com/ryubsmile" target="_blank">
            Jaehyuk Ryu
          </Link>
          , and{' '}
          <Link
            href="https://www.instagram.com/justin.geon.kim/"
            target="_blank"
          >
            Jingeon Kim
          </Link>{' '}
          of UTKCC the 17th.
        </div>
        <div className="pb-2">
          COPYRIGHTⓒ 2023. University of Toronto Korean Commerce Community. All
          Rights Reserved.
        </div>
      </div>
    </div>
  );
}
