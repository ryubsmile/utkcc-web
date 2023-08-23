'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { thresholdArray } from './reusedFunctions';

export default function Slides() {
  return (
    <div style={{ height: '600vh' }}>
      <Slide
        duration={500}
        additionalStyle=""
        transitions={[
          {
            top: '470vh',
            height: '10vh',
            opacityTo: '1',
          },
        ]}
      >
        <div className="fixed w-full bottom-[8dvh] opacity-60">
          아래로 스크롤하세요.
        </div>
      </Slide>
      <LogoSlide duration={500} />
      <Slide
        duration={500}
        transitions={[
          {
            top: '150vh',
            height: '330vh',
            opacityTo: '0.2',
          },
        ]}
      >
        <div className="relative w-screen h-[100dvmin] scale-[0.4] lg:scale-[0.25]">
          <Image
            src="/icon4.png"
            alt=""
            fill={true}
            className="object-contain"
          />
        </div>
      </Slide>
      <Slide
        duration={500}
        transitions={[
          {
            top: '170vh',
            height: '50vh',
            opacityTo: '1',
          },
        ]}
      >
        <div className="font-normal text-xl">
          학업 성취와 커리어의 첫 시작점 <br />
          모두 이 곳에서 시작하세요. <br />
          <span className="text-transparent">
            이제껏 경험 못 했던 한인경영동아리, <br /> <span>UTKCC</span>와
            함께라면 당신의 <br />
            유티는 분명 더 즐거울거에요.
          </span>
        </div>
      </Slide>
      <Slide
        duration={500}
        transitions={[
          {
            top: '210vh',
            height: '10vh',
            opacityTo: '1',
          },
        ]}
      >
        <div className="font-normal text-xl">
          <span className="text-transparent">
            학업성취와 커리어의 첫 시작점 <br />
            모두 이 곳에서 시작하세요.{' '}
          </span>
          <br />
          이제껏 경험 못 했던 한인경영동아리, <br />{' '}
          <span className="text-kcc-theme">UTKCC</span>와 함께라면 당신의 <br />
          유티는 분명 더 즐거울거에요.
        </div>
      </Slide>
      <Slide
        duration={500}
        transitions={[
          {
            top: '340vh',
            height: '10vh',
            opacityTo: '1',
          },
        ]}
      >
        <div className="font-normal text-xl text-gray-600">
          Be part of a
          <br /> <span className="text-kcc-theme">professional</span> community.
        </div>
      </Slide>
      <Slide
        duration={500}
        transitions={[
          {
            top: '470vh',
            height: '10vh',
            opacityTo: '1',
          },
        ]}
      >
        <div className="flex flex-col">
          <div className="font-bold text-4xl text-kcc-theme">UTKCC</div>
          <div className="mt-4 font-normal text-gray-600">
            University of Toronto <br /> Korean Commerce Community
          </div>
        </div>
      </Slide>
    </div>
  );
}

/**
 * 하나의 애니메이션/효과를 설명하는 인터페이스.
 */
interface transitionInfo {
  top: number | string;
  height: number | string;
  opacityTo: string;
}

/**
 * 로고 슬라이드 컴포넌트.
 * 위로 스크롤하면 보이고, 아래로 스크롤하면 사라진다.
 */
function LogoSlide({ duration }: { duration: number }) {
  const appliedTarget = useRef<HTMLDivElement>(null);
  const observedTarget = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    let previousY = 0;
    let previousRatio = 0;

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        const currentY = entry.boundingClientRect.y;
        const currentRatio = entry.intersectionRatio;
        const isIntersecting = entry.isIntersecting;

        // Scrolling down/up
        if (appliedTarget.current) {
          if (currentY < previousY) {
            if (!(currentRatio > previousRatio && isIntersecting)) {
              // none
              appliedTarget.current.style.opacity = '0';
            } else {
              appliedTarget.current.style.opacity = '0';
            }
          } else if (currentY > previousY && isIntersecting) {
            if (currentRatio < previousRatio) {
              // none
              appliedTarget.current.style.opacity = '1.0';
            } else {
              appliedTarget.current.style.opacity = '1.0';
            }
          }
        }

        previousY = currentY;
        previousRatio = currentRatio;
      });
    };

    observer = new IntersectionObserver(handleIntersect, {
      threshold: thresholdArray(20),
    });
    observer.observe(observedTarget.current as Element);
  }, [appliedTarget, observedTarget]);

  return (
    <>
      <div className="-z-50 w-full fixed h-full flex text-center items-center">
        <div
          className={`absolute w-full ease-in transition flex items-center duration-${duration}`}
          ref={appliedTarget}
        >
          <div className="relative w-full h-[100dvmin] scale-[0.4] lg:scale-[0.25]">
            <Image
              src="/icon4.png"
              alt=""
              fill={true}
              className="object-contain"
            />
          </div>
          <div className="fixed w-full opacity-60 bottom-[8dvh]">
            아래로 스크롤하세요.
          </div>
        </div>
      </div>
      <div
        className="absolute -z-50 w-1 top-[0px] h-[60vh] bg-transparent"
        ref={observedTarget}
      ></div>
    </>
  );
}

/**
 * 스크롤해서 등장하는 컴포넌트 한개.
 */
function Slide({
  children,
  transitions,
  duration,
  additionalStyle = '',
}: {
  children: React.ReactNode;
  transitions: transitionInfo[];
  duration: number;
  additionalStyle?: string;
}) {
  // array that tracks each and every animation div element
  const observedTargets = useRef<Array<HTMLDivElement | null>>([]);
  const appliedTarget = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver;

    // 요소가 화면에 등장할시 실행되는 함수
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((aniDiv, index) => {
        if (appliedTarget.current) {
          // style 적용
          if (aniDiv.isIntersecting) {
            appliedTarget.current.style.opacity = transitions[index]?.opacityTo;
          } else {
            appliedTarget.current.style.opacity = '0';
          }
        }
      });
    };

    if (observedTargets) {
      observer = new IntersectionObserver(handleIntersect, {
        threshold: thresholdArray(20),
      });
      observedTargets.current.forEach(aniDiv =>
        observer.observe(aniDiv as Element),
      );
    }
  }, [observedTargets, appliedTarget, transitions]);

  return (
    <>
      <div className="-z-10 w-full fixed h-full flex text-center items-center">
        <div
          className={`absolute w-full opacity-0 ease-in transition duration-${duration} ${additionalStyle}`}
          ref={appliedTarget}
        >
          {children}
        </div>
      </div>
      {transitions.map((trans, i) => (
        <div
          key={i}
          className="-z-50 absolute w-1 bg-transparent"
          style={{
            top: trans.top,
            height: trans.height,
          }}
          ref={el => (observedTargets.current[i] = el)}
        />
      ))}
    </>
  );
}
