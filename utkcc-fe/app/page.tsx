'use client';

import Image from 'next/image';
import { useState, useEffect, CSSProperties } from 'react';

// @ts-ignore
// const bezierEasing: = (await import('https://cdn.skypack.dev/pin/bezier-easing@v2.1.0-ELIKFSyR7ljg13TI3nit/mode=imports/optimized/bezier-easing.js')).default

interface animationProperties {
  top: number;
  bottom: number;
  styleAttr: string;
  topVal: number;
  bottomVal: number;
}

export default function Home() {
  const [currentPos, setPos] = useState(0);

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
        <div className="relative flex items-center justify-center w-full h-full">
          {/* slide container */}
          <Slide
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
            {/* 스크롤 표시 컴포넌트 */}
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
            {/* 1. 로고 */}
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
            {/* 2. KCC 첫 텍스트 */}
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
            {/* 3. KCC 두번째 텍스트 */}
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
          </Slide>
        </div>
      </div>
    </div>
  );
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

  return Object.keys(mergedCSSObject).length == 0 // == {} ?
    ? { display: 'none' }
    : mergedCSSObject;
}

/**
 * 인자들에 따른 현재 애니메이션의 진행률을 계산해서 `CSSProperties` 타입 오브젝트를 리턴하는 함수.
 */
function createAnimationObject(
  animation: animationProperties,
  currentPos: number,
): CSSProperties {
  const { top, bottom, styleAttr, topVal, bottomVal } = animation;
  const ratio = (currentPos - top) / (bottom - top);
  const currentVal = topVal + (bottomVal - topVal) * ratio;
  return {
    [styleAttr]: currentVal,
  };
}

const ease = 'cubicBezier(.25, .1, .25, 1)';
const easeIn = 'cubicBezier(.38, .01, .78, .13)';
const midSlow = 'cubicBezier(0, .7, 1, .3)';

/**
 * 해당 숫자가 `top`과 `bottom` 사이에 있는지 확인하는 함수
 */
function isInRange(num: number, top: number, bottom: number) {
  return num >= top && num <= bottom;
}
