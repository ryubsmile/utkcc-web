'use client';

import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {
  let currentPos = 0;
  let style1 = {};
  console.log(currentPos);
  const updatePos = () => {
    currentPos = window.scrollY + window.innerHeight / 2;
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
          <div className="absolute z-0 hidden" id="slide-1" style={{}}>
            {/* slide */}
            <Image
              src="/icon4.png"
              width={300}
              height={300}
              alt=""
              className="w-screen h-screen object-contain scale-50"
            />
          </div>
          <div id="scroll-down">
            <div className="scroll-down-text">아래로 스크롤하세요.</div>
          </div>
          <div className="absolute z-0 hidden" id="slide-2">
            slide 2
          </div>
          <div className="absolute z-0 hidden" id="slide-3">
            slide 3
          </div>
          <div className="absolute z-0 hidden" id="slide-4">
            slide 4
          </div>
        </div>
      </div>
    </div>
  );
}

const ease = 'cubicBezier(.25, .1, .25, 1)';
const easeIn = 'cubicBezier(.38, .01, .78, .13)';
const midSlow = 'cubicBezier(0, .7, 1, .3)';

const def = new Map([
  [
    'slide-1', // element 이름
    {
      id: 'slide-1',
      top: 500, // element의 시작점
      bottom: 1900, // element의 끝점
      topStyle: {
        // element의 시작 스타일
        opacity: 100,
      },
      bottomStyle: {
        // element의 끝 스타일
        opacity: 0,
      },
      animations: [
        {
          enabled: false, // 애니메이션 활성화 여부
          top: 500, // 애니메이션 시작점
          bottom: 1900, // 애니메이션 끝점
          easing: midSlow, // Easing Function
          styles: [
            // 애니메이션 시 변경될 스타일
            {
              name: 'translateY', // 스타일 이름
              topValue: 60, // 진행률 0% 일 때의 스타일
              bottomValue: -60, // 진행률 100% 일 때의 스타일
            },
          ],
        },
        {
          enabled: false,
          top: 500,
          bottom: 800,
          easing: ease,
          styles: [
            {
              name: 'opacity',
              topValue: 0,
              bottomValue: 1,
            },
          ],
        },
        {
          enabled: false,
          top: 1400,
          bottom: 1900,
          easing: easeIn,
          styles: [
            {
              name: 'opacity',
              topValue: 1,
              bottomValue: 0,
            },
          ],
        },
      ],
    },
  ],
  // 중략
]);

const enabled = new Map();
const disabled = new Map();

/**
 * 해당 숫자가 `top`과 `bottom` 사이에 있는지 확인하는 함수
 */
function isAmong(num: number, top: number, bottom: number) {
  return num >= top && num <= bottom;
}

/**
 * top과 bottom 사이에서 비율을 통해 특정 값을 뽑아내는 함수
 */
function getPoint(top: number, bottom: number, rate: number) {
  return top + (bottom - top) * rate;
}
