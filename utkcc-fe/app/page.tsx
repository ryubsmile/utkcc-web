'use client';

import Image from 'next/image';
import './page.css';
import { useState, useRef, useEffect, CSSProperties } from 'react';

export default function Home() {
  const [currentPos, setPos] = useState(0);
  const mounted = useRef<HTMLDivElement>(null);

  const updatePos = () => {
    setPos(window.scrollY + window.innerHeight / 2);
    console.log(currentPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', updatePos, { passive: true });
    return () => {
      window.removeEventListener('scroll', updatePos);
    };
  });

  return (
    <div style={{ height: '7000px' }}>
      {/* sticky container */}
      <div className="sticky h-screen top-0">
        {/* sticky */}
        <div
          className="relative flex items-center justify-center w-full h-full"
          ref={mounted}
        >
          {/* slide container */}
          <Slide
            currentPos={currentPos}
            animations={[
              {
                top: 0,
                bottom: 1500,
                keyframes: 'disappear',
              },
            ]}
            additionalStyle="bottom-20"
          >
            <div className="text-center">아래로 스크롤하세요.</div>
          </Slide>{' '}
          <Slide
            currentPos={currentPos}
            animations={[
              {
                top: 0,
                bottom: 500,
                keyframes: 'show',
              },
              {
                top: 500,
                bottom: 1000,
                keyframes: 'dimmer',
              },
              {
                top: 1000,
                bottom: 3400,
                keyframes: 'dimshow',
              },
              {
                top: 3400,
                bottom: 4500,
                keyframes: 'dimdisappear',
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
                bottom: 2500,
                keyframes: 'display-while',
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
                bottom: 4000,
                keyframes: 'display-while',
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
                bottom: 6000,
                keyframes: 'appear',
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
            currentPos={currentPos}
            animations={[
              {
                top: 5000,
                bottom: 6000,
                keyframes: 'appear',
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
        </div>
      </div>
    </div>
  );
}

interface animationProperties {
  top: number;
  bottom: number;
  keyframes: string;
}

/**
 * 스크롤해서 등장하는 컴포넌트 한개.
 * 여러개의 `animation` 을 배열로 받으며, 현재 스크롤 값에 따라 하나의 합쳐진 스타일 객체가 적용된다.
 */
function Slide({
  children,
  animations,
  currentPos,
  additionalStyle,
}: {
  children: React.ReactNode;
  animations: animationProperties[];
  currentPos: number;
  additionalStyle?: string;
}) {
  return (
    <div
      className={`absolute z-0 w-full text-center ${
        additionalStyle ? additionalStyle : ''
      }`}
      style={mergeAnimationObjects(animations, currentPos)}
    >
      {children}
    </div>
  );
}

/**
 * 현재 스크롤값에 따라 활성화되어있는 모든 CSSProperties를 하나의 객체에 옮겨담는 함수
 */
function mergeAnimationObjects(
  animations: animationProperties[],
  currentPos: number,
): CSSProperties {
  const mergedCSSObject = animations.reduce(
    (prevObj: CSSProperties, currentStyleObj) =>
      isInRange(currentPos, currentStyleObj.top, currentStyleObj.bottom)
        ? { ...prevObj, ...createAnimationObject(currentStyleObj, currentPos) }
        : prevObj,
    {},
  );

  return Object.keys(mergedCSSObject).length !== 0
    ? mergedCSSObject
    : { display: 'none' };
}

const ease = 'cubic-bezier(.25, .1, .25, 1)';
const easeIn = 'cubic-bezier(.38, .01, .78, .13)';
const midSlow = 'cubic-bezier(0, .7, 1, .3)';

/**
 * 인자들에 따른 현재 애니메이션의 진행률을 계산해서 `CSSProperties` 타입 오브젝트를 리턴하는 함수.
 */
function createAnimationObject(
  animation: animationProperties,
  currentPos: number,
): CSSProperties {
  const { top, bottom, keyframes } = animation;
  const ratio = (currentPos - top) / (bottom - top);
  return {
    animation: `1s ${easeIn} ${
      ratio * -1
    }s 1 normal forwards paused ${keyframes}`,
  };
}

/**
 * 해당 숫자가 `top`과 `bottom` 사이에 있는지 확인하는 함수
 */
function isInRange(num: number, top: number, bottom: number) {
  return num > top && num <= bottom;
}
