'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import './navbar.css';
import { handleScroll } from '../misc/utils';
import SmallLogoImage from '/public/assets/images/logo-nav.png';

export default function NavBar({
  visibleThreshold,
}: {
  visibleThreshold?: string;
}) {
  const [navActive, setNavActive] = useState(false);

  const subpagesList = [
    'about',
    'events',
    'executives',
    'sponsors',
    'resources',
    'newsletter',
  ];

  // HANDLE NAVBAR VISIBILITY
  const navbarElementTarget = useRef<HTMLDivElement>(null); // navbar element
  const navbarHiderTarget = useRef<HTMLDivElement>(null); // if this target is visible, hide navbar
  useEffect(() => {
    let observer: IntersectionObserver;

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        const isIntersecting = entry.isIntersecting;

        // Scrolling down/up
        if (navbarElementTarget.current) {
          navbarElementTarget.current.style.opacity = isIntersecting
            ? '0'
            : '1';
        }
      });
    };

    observer = new IntersectionObserver(handleIntersect);
    observer.observe(navbarHiderTarget.current as Element);
  });

  return (
    <>
      <nav
        ref={navbarElementTarget}
        className={`w-screen ${
          navActive ? 'h-[100dvh] lg:h-auto' : 'h-auto'
        } pt-safe-top top-0 fixed bg-[#FCFCFC] hover:!opacity-100 border-b border-solid border-gray-200 font-normal duration-300 select-none z-10 touch-none`}
      >
        {/* NAVBAR FOR DEFAULT (sm - md) VIEWPORT */}
        <div
          className={`flex h-full lg:hidden px-4 py-4 ${
            navActive ? 'flex-col' : ''
          }`}
        >
          <Link
            className={`${
              navActive ? 'hidden' : 'flex'
            } w-fit h-full gap-2 items-center`}
            href="/"
          >
            <div className="w-8 h-8 relative">
              <Image
                src={SmallLogoImage}
                alt="logo"
                priority={true}
                className="object-scale-down"
              />
            </div>
          </Link>
          <div className="lg:hidden w-8 h-8 ml-auto self-center">
            <NavBarMenuButton getter={navActive} setter={setNavActive} />
          </div>
          <div
            className={`${
              navActive ? 'flex' : 'hidden lg:flex'
            } flex-col lg:flex-row w-fit overflow-y-clip h-min flex-wrap py-10 lg:my-auto px-16 lg:pl-5 gap-8 lg:place-content-around lg:place-items-center text-xl lg:text-sm text-gray-600 lg:font-bold lg:text-kcc-theme`}
          >
            <Link
              href="/"
              className="capitalize w-fit"
              onClick={() => {
                setNavActive(false);
              }}
            >
              home
            </Link>
            {subpagesList.map((subpageName, i) => (
              <Link
                key={i}
                href={`#${subpageName}`}
                className="capitalize w-fit"
                onClick={e => {
                  setNavActive(false);
                  handleScroll(e);
                }}
              >
                {subpageName}
              </Link>
            ))}
            <Link
              href="#footer"
              className="capitalize w-fit"
              onClick={e => {
                setNavActive(false);
                handleScroll(e);
              }}
            >
              contact
            </Link>
            <Link
              // TODO: Link update
              href="/"
              className="hidden lg:block py-2 px-5 rounded-lg text-white bg-kcc-theme "
            >
              Join
            </Link>
          </div>
        </div>
        {/* NAVBAR FOR LARGE (lg - xl) VIEWPORT, no menu button. join button added. */}
        <div className={`hidden lg:flex px-4 py-4`}>
          <Link className={`flex w-fit h-full gap-2 items-center`} href="/">
            <div className="w-8 h-8 relative">
              <Image
                src={SmallLogoImage}
                alt="logo"
                priority={true}
                className="object-scale-down"
              />
            </div>
          </Link>
          <div
            className={`flex flex-row basis-full my-auto pl-5 gap-8 place-content-around place-items-center text-sm font-bold text-kcc-theme`}
          >
            <Link href="/" className="capitalize">
              home
            </Link>
            {subpagesList.map((subpageName, i) => (
              <Link key={i} href={`/${subpageName}`} className="capitalize">
                {subpageName}
              </Link>
            ))}
            <Link href="#footer" onClick={handleScroll}>
              Contact
            </Link>
            <Link
              // TODO: Link update
              href="/"
              className="py-2 px-5 rounded-lg text-white bg-kcc-theme "
            >
              Join
            </Link>
          </div>
        </div>
      </nav>
      <div
        ref={navbarHiderTarget}
        className={`absolute w-1 bg-transparent opacity-0 -z-10`}
        style={
          visibleThreshold
            ? {
                height: visibleThreshold,
              }
            : { display: 'none' }
        }
      ></div>
    </>
  );
}

interface navBarProps {
  getter: boolean;
  setter: React.Dispatch<React.SetStateAction<boolean>>;
}

function NavBarMenuButton({ getter, setter }: navBarProps) {
  const [navActive, setNavActive] = [getter, setter];

  return (
    <div
      id="menu-button"
      className={`w-8 h-8 flex flex-col justify-center items-center cursor-pointer navbar-button ${
        navActive ? 'active' : ''
      }`}
      onClick={() => {
        setNavActive(!navActive);
      }}
    />
  );
}
