'use client';

import Image from 'next/image';
import './page.css';
import { useEffect, CSSProperties, useRef } from 'react';

export default function Home() {
  return (
    <div style={{ height: '7000px' }}>
      <div>
        <Slide
          duration={500}
          transitions={[
            {
              top: '150vh',
              bottom: '300vh',
              startOpacityVal: '0',
              endOpacityVal: '0.2',
            },
            {
              top: '300vh',
              bottom: '410vh',
              startOpacityVal: '0.2',
              endOpacityVal: '0',
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
        {/* <div
          className="absolute w-full"
          style={{ top: '60vh', height: '60vh' }}
        ></div> */}
        {/* <Slide
          transitions={[
            {
              top: '90vh',
              bottom: '400vh',
              keyframes: 'disappear',
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
        </Slide> */}
        {/* slide container */}
        {/* <Slide
            currentPos={currentPos}
            transitions={[
              {
                top: 0,
                bottom: 1500,
                styleAttr: 'opacity',
                topVal: 1,
                bottomVal: 0,
              },
            ]}
            additionalStyle="bottom-20"
          >
            <div className="text-center">아래로 스크롤하세요.</div>
          </Slide>
          <Slide
            currentPos={currentPos}
            transitions={[
              {
                top: 0,
                bottom: 500,
                styleAttr: 'opacity',
                topVal: 1,
                bottomVal: 1,
              },
              {
                top: 500,
                bottom: 1000,
                styleAttr: 'opacity',
                topVal: 1,
                bottomVal: 0.2,
              },
              {
                top: 1000,
                bottom: 4000,
                styleAttr: 'opacity',
                topVal: 0.2,
                bottomVal: 0.2,
              },
              {
                top: 4000,
                bottom: 4500,
                styleAttr: 'opacity',
                topVal: 0.2,
                bottomVal: 0,
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
            currentPos={currentPos}
            transitions={[
              {
                top: 1000,
                bottom: 1500,
                styleAttr: 'opacity',
                topVal: 0,
                bottomVal: 1,
              },
              {
                top: 1500,
                bottom: 2200,
                styleAttr: 'opacity',
                topVal: 1,
                bottomVal: 1,
              },
              {
                top: 2200,
                bottom: 2500,
                styleAttr: 'opacity',
                topVal: 1,
                bottomVal: 0,
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
          <Slide
            currentPos={currentPos}
            transitions={[
              {
                top: 2500,
                bottom: 3000,
                styleAttr: 'opacity',
                topVal: 0,
                bottomVal: 1,
              },
              {
                top: 3000,
                bottom: 3700,
                styleAttr: 'opacity',
                topVal: 1,
                bottomVal: 1,
              },
              {
                top: 3700,
                bottom: 4000,
                styleAttr: 'opacity',
                topVal: 1,
                bottomVal: 0,
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
            currentPos={currentPos}
            transitions={[
              {
                top: 4000,
                bottom: 4300,
                styleAttr: 'opacity',
                topVal: 0,
                bottomVal: 1,
              },
              {
                top: 4300,
                bottom: 6000,
                styleAttr: 'opacity',
                topVal: 1,
                bottomVal: 1,
              },
              // {
              //   top: 5500,
              //   bottom: 5800,
              //   styleAttr: 'opacity',
              //   topVal: 1,
              //   bottomVal: 0,
              // },
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
            currentPos={currentPos}
            transitions={[
              {
                top: 5000,
                bottom: 5300,
                styleAttr: 'opacity',
                topVal: 0,
                bottomVal: 1,
              },
              {
                top: 5300,
                bottom: 6000,
                styleAttr: 'opacity',
                topVal: 1,
                bottomVal: 1,
              },
              // {
              //   top: 5500,
              //   bottom: 5800,
              //   styleAttr: 'opacity',
              //   topVal: 1,
              //   bottomVal: 0,
              // },
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
          </Slide> */}
      </div>
    </div>
  );
}

/**
 * 하나의 애니메이션/효과를 설명하는 인터페이스.
 */
interface transitionInfo {
  top: number | string;
  bottom: number | string;
  startOpacityVal: string;
  endOpacityVal: string;
}

/**
 * 스크롤해서 등장하는 컴포넌트 한개.
 */
function Slide({
  children,
  transitions,
  duration,
  additionalStyle,
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
    if (observedTargets) {
      observer = new IntersectionObserver(e => {
        e.forEach((aniDiv, index) => {
          if (appliedTarget.current) {
            // style 적용
            appliedTarget.current.style.opacity = aniDiv.isIntersecting
              ? transitions[index].endOpacityVal
              : '';
          }
        });
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
          className={`absolute z-0 w-full ease-in duration-${duration} ${additionalStyle}`}
          ref={appliedTarget}
        >
          {children}
        </div>
      </div>
      {transitions.map((trans, i) => (
        <div
          key={i}
          className="absolute w-full"
          style={{
            top: trans.top,
            height: trans.bottom,
            backgroundColor: 'transparent',
          }}
          ref={el => (observedTargets.current[i] = el)}
        />
      ))}
      {/* <div
        className="absolute w-screen top-[200vh] h-[400vh] bg-black opacity-50 z-10"
        ref={}
      ></div> */}

      {/* <div>
      <div className="fixed z-0 hidden" ref={appliedTarget}>
        {children}
      </div>
      {transitions.map((ani, i) => (
    <>
      <div className="w-full fixed h-full flex text-center items-center">
        <div
          key={i}
          className="absolute w-full"
          style={{
            top: ani.top,
            height: ani.bottom,
            backgroundColor: 'transparent',
          }}
          ref={el => (observedTargets.current[i] = el)}
        />
      ))}
    </div> */}
    </>
  );
}
