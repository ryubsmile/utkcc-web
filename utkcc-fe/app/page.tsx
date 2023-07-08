'use client';

import Image from 'next/image';
import './page.css';
import { useEffect, CSSProperties, useRef } from 'react';

export default function Home() {
  return (
    <div style={{ height: '7000px' }}>
      <div className="w-full h-full">
        {/* <div
          className="absolute w-full"
          style={{ top: '60vh', height: '60vh' }}
        ></div> */}
        <Slide
          animations={[
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
        </Slide>
        {/* slide container */}
        {/* <Slide
            currentPos={currentPos}
            animations={[
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
            animations={[
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
            animations={[
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
            animations={[
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
            animations={[
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
            animations={[
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
interface animationProperties {
  keyframes: string;
  top: number | string;
  bottom: number | string;
}

/**
 * 스크롤해서 등장하는 컴포넌트 한개.
 * 여러개의 `animation` 을 배열로 받으며,
 * `style` 객체의
 */
function Slide({
  children,
  animations,
}: {
  children: React.ReactNode;
  animations: animationProperties[];
}) {
  // array that tracks each and every animation div element
  const observedTargets = useRef<Array<HTMLDivElement | null>>([]);
  const appliedTarget = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // observer는 하나만 있어도 됨.
    // 초기화 하는 시점에
    let observer: IntersectionObserver;
    if (observedTargets) {
      observer = new IntersectionObserver(e => {
        e.forEach((aniDiv, index) => {
          if (aniDiv.isIntersecting) {
            // style 적용
            console.log(aniDiv.intersectionRatio);
            const { keyframes } = animations[index];
            if (appliedTarget.current) {
              const styleObj = appliedTarget.current.style;
              styleObj.display = 'block';
              styleObj.animation = `${keyframes} 1s linear infinite`;
              styleObj.animationIterationCount = '1';
              styleObj.animationPlayState = 'paused';
              styleObj.animationDelay = `calc(var(${aniDiv.intersectionRatio})) * -1s`;
            }
          }
        });
      });
      observedTargets.current.forEach(aniDiv =>
        observer.observe(aniDiv as Element),
      );
    }
  }, [observedTargets, animations]);

  return (
    <div>
      <div className="fixed z-0 hidden" ref={appliedTarget}>
        {children}
      </div>
      {animations.map((ani, i) => (
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
    </div>
  );
}
