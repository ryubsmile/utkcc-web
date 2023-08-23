'use client';
import { useState, useEffect, Dispatch, SetStateAction } from 'react';

interface EmailInfo {
  kccEmail: string;
  presEmail: string;
  vicePresEmail: string;
  erDirectorEmail: string;
}

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
    <div className="flex flex-col min-h-[20vh] mt-[10vh] p-8 lg:px-32 bg-kcc-theme text-white font-normal">
      <div className="text-center">Contact Information</div>
      <div className="flex flex-col my-3 text-xs">
        <div>General Inquiries: {mounted ? kccEmail : loadingText}</div>
        <div>President: {mounted ? presEmail : loadingText}</div>
        <div>Vice-president: {mounted ? vicePresEmail : loadingText}</div>
        <div>Sponsor Inquiries: {mounted ? erDirectorEmail : loadingText}</div>
        <div className="pt-8 pb-2 opacity-50">
          Designed by Hyunjun You, <br /> Created by Jaehyuk Ryu and Jingeon Kim
        </div>
      </div>
    </div>
  );
}
