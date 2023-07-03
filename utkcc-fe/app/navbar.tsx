'use client';

import Image from 'next/image';
import Link from 'next/link';
import './navbar.css';
import { useState } from 'react';

function MenuButton() {
  const [navActive, setNavActive] = useState(false);

  if (navActive) {
  }

  return (
    <div
      id="menu-button"
      className={`w-full h-full flex flex-col justify-between cursor-pointer`}
      onClick={() => {
        setNavActive(!navActive);
        console.log(navActive);
      }}
    >
      <span
        className={`w-full h-1/6 rounded-md bg-slate-400 ${
          navActive ? 'menu-stick-1' : ''
        }`}
      ></span>
      <span
        className={`w-full h-1/6 rounded-md bg-slate-400 ${
          navActive ? 'menu-stick-2' : ''
        }`}
      ></span>
      <span
        className={`w-full h-1/6 rounded-md bg-slate-400 ${
          navActive ? 'menu-stick-3' : ''
        }`}
      ></span>
    </div>
  );
}

export default function NavBar({ children }: { children: any }) {
  return (
    <nav className="w-screen h-14 fixed bg-white border-b border-solid border-transparent select-none">
      <div className="px-4 py-2 h-full flex items-end">
        <Link className="w-fit h-full flex gap-2" href="/">
          <Image
            src="/logo-nav.png"
            alt="logo"
            width={35}
            height={35}
            className="object-cover"
          />
          <span className="self-end text-xl">UTKCC</span>
        </Link>
        <div className="w-8 h-8 ml-auto py-1">
          <MenuButton />
        </div>
      </div>
    </nav>
  );
}
