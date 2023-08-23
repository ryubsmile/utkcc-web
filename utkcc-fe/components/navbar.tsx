'use client';

import Image from 'next/image';
import Link from 'next/link';
import { SetStateAction, useState, useEffect, useRef } from 'react';

export default function NavBar({
  visibleThreshold,
}: {
  visibleThreshold?: string;
}) {
  const [navActive, setNavActive] = useState(false);

  const appliedTarget = useRef<HTMLDivElement>(null);
  const observedTarget = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver;

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        const isIntersecting = entry.isIntersecting;

        // Scrolling down/up
        console.log(isIntersecting);

        if (appliedTarget.current) {
          appliedTarget.current.style.opacity = isIntersecting ? '0' : '1';
        }
      });
    };

    observer = new IntersectionObserver(handleIntersect);
    observer.observe(observedTarget.current as Element);
  });

  return (
    <>
      <nav
        ref={appliedTarget}
        className={`w-screen ${
          navActive ? 'h-[100dvh] lg:h-auto' : 'h-auto'
        } top-0 fixed bg-[#FCFCFC] hover:!opacity-100 border-b border-solid border-transparent font-normal duration-300 select-none z-10`}
      >
        <div className={`px-4 py-4 flex ${navActive ? 'flex-col' : ''}`}>
          <Link
            className={`${
              navActive ? 'hidden' : 'flex'
            } w-fit h-full gap-2 items-center`}
            href="/"
          >
            <div className="w-8 h-8 relative">
              <Image
                src="/logo-nav.png"
                alt="logo"
                fill={true}
                sizes={'100%'}
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
            } flex-col lg:flex-row basis-full mt-10 lg:my-auto pl-16 lg:pl-5 gap-8 lg:place-content-around lg:place-items-center text-xl lg:text-sm text-gray-600 lg:font-bold lg:text-kcc-theme`}
          >
            <Link href="/" onClick={() => setNavActive(false)}>
              Home
            </Link>
            <Link href="/about" onClick={() => setNavActive(false)}>
              About
            </Link>
            <Link href="/events" onClick={() => setNavActive(false)}>
              Events
            </Link>
            <Link href="/executives" onClick={() => setNavActive(false)}>
              Executives
            </Link>
            <Link href="/sponsors" onClick={() => setNavActive(false)}>
              Sponsors
            </Link>
            <Link href="/resources" onClick={() => setNavActive(false)}>
              Resources
            </Link>
            <Link href="/newsletter" onClick={() => setNavActive(false)}>
              Newsletter
            </Link>
            <Link href="/contact" onClick={() => setNavActive(false)}>
              Contact
            </Link>
            <Link
              href="/"
              className="hidden lg:block py-2 px-5 rounded-lg text-white bg-kcc-theme "
            >
              Join
            </Link>
          </div>
        </div>
      </nav>
      <div
        ref={observedTarget}
        className={`absolute w-1 bg-transparent -z-10`}
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
  setter: React.Dispatch<SetStateAction<boolean>>;
}

function NavBarMenuButton({ getter, setter }: navBarProps) {
  const [navActive, setNavActive] = [getter, setter];

  return (
    <div
      id="menu-button"
      className={`w-full h-full flex flex-col justify-between cursor-pointer`}
      onClick={() => {
        setNavActive(!navActive);
      }}
    >
      <Image
        width={40}
        height={40}
        src={`${
          navActive ? '/assets/menu-opened.png' : '/assets/menu-closed.png'
        }`}
        alt="menu"
        className={`${navActive ? 'scale-100' : 'scale-150'}`}
      />
    </div>
  );
}
