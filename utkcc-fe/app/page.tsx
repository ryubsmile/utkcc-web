'use client';

import Image from 'next/image';
import { useState, useEffect, CSSProperties, useRef } from 'react';

export default function Home() {
  return (
    <div style={{ height: 'max-content' }}>
      <div>
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
          <Image
            src="/icon4.png"
            width={300}
            height={300}
            alt=""
            className="w-screen h-screen object-contain scale-50"
          />
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
          <div className="font-semibold text-xl">
            학업성취와 커리어의 첫 시작점 <br />
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
          <div className="font-semibold text-xl">
            <span className="text-transparent">
              학업성취와 커리어의 첫 시작점 <br />
              모두 이 곳에서 시작하세요.{' '}
            </span>
            <br />
            이제껏 경험 못 했던 한인경영동아리, <br />{' '}
            <span className="text-kcc-theme">UTKCC</span>와 함께라면 당신의{' '}
            <br />
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
          <div className="font-semibold text-xl text-gray-600">
            Be part of a
            <br /> <span className="text-kcc-theme">professional</span>{' '}
            community.
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
            <div className="mt-4 font-semibold text-gray-600">
              University of Toronto <br /> Korean Commerce Community
            </div>
          </div>
        </Slide>
      </div>
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
  const observedTarget = useRef<HTMLDivElement | null>(null);

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

    observer = new IntersectionObserver(handleIntersect);
    observer.observe(observedTarget.current as Element);
  });

  return (
    <>
      <div className="w-full fixed h-full flex text-center items-center">
        <div
          className={`absolute z-0 w-full ease-in transition duration-${duration} z-50`}
          ref={appliedTarget}
        >
          <Image
            src="/icon4.png"
            width={300}
            height={300}
            alt=""
            className="w-screen h-screen object-contain scale-50"
          />
        </div>
      </div>
      <div
        className="absolute w-full top-[0px] h-[50vh] bg-transparent"
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
          console.log(
            aniDiv.isIntersecting,
            transitions[index].opacityTo,
            observedTargets.current,
          );
          if (aniDiv.isIntersecting) {
            appliedTarget.current.style.opacity = transitions[index].opacityTo;
          } else {
            appliedTarget.current.style.opacity = '0';
          }
        }
      });
    };

    // threshold 배열 생성함수
    const thresholdArray = (steps: number) =>
      Array(steps + 1)
        .fill(0)
        .map((_, index) => index / steps || 0);

    if (observedTargets) {
      observer = new IntersectionObserver(handleIntersect, {
        threshold: thresholdArray(20),
      });
      observedTargets.current.forEach(aniDiv =>
        observer.observe(aniDiv as Element),
      );
    }
  }, [observedTargets, transitions]);

  return (
    <>
      <div className="w-full fixed h-full flex text-center items-center">
        <div
          className={`absolute z-0 w-full opacity-0 ease-in transition duration-${duration} ${additionalStyle}`}
          ref={appliedTarget}
        >
          {children}
        </div>
      </div>
      {transitions.map((trans, i) => (
        <div
          key={i}
          className="absolute w-full bg-gray-200 opacity-40"
          style={{
            top: trans.top,
            height: trans.height,
          }}
          ref={el => (observedTargets.current[i] = el)}
        />
      ))}
    </>
  );
