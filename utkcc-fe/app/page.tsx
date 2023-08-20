'use client';
import Slides from './slides';
import PageIntro from './pageIntro';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import aboutImage from '/public/assets/about-image.png';
import eventsImage from '/public/assets/events-image.png';
import newsletterImage from '/public/assets/newsletter-image.png';

export default function Home() {
  return (
    <div className="flex-col">
      <Slides />
      <div className="px-8 z-50">
        {/* about intro */}
        <PageIntro
          pageName="about"
          pageSlogan={
            <>
              토론토 대학교 <br /> 한인 경영동아리
            </>
          }
          pageExp={
            <>
              UTKCC는 상경계열 전공생들로부터 출범하여 현재는 다양한 전공계열의
              학생들로 이루어진 한인 동아리입니다.
              <span className="my-3 w-full block" />
              매년 학업, 진로, 그리고 친목도모와 같이 학생들의 대학생활을
              지원하는 다양한 행사들을 진행합니다.
            </>
          }
        >
          <Image alt="about image" className="h-fit" src={aboutImage} />
        </PageIntro>
        {/* events intro */}
        <PageIntro
          pageName="events"
          pageSlogan={
            <>
              때론 아카데믹하게, <br /> 때론 프로페셔널하게, <br /> 때론 즐겁게
            </>
          }
          pageExp={
            <>
              학업성취를 위한 튜토리얼, 관심 있는 산업에 종사하시는 alumni분들을
              만나볼 수 있는 네트워킹 세션, 스트레스를 시원하게 날릴 소셜
              이벤트.
              <span className="my-3 w-full block" />
              모두 UTKCC에서 만나보세요.
            </>
          }
        >
          <Image alt="events image" className="h-fit" src={eventsImage} />
        </PageIntro>
        {/* exec intro */}
        <PageIntro
          pageName="executives"
          pageSlogan={<>자랑스러운 17기 임원</>}
          pageExp={
            <>
              UTKCC는 현재 회장단과 일곱 개의 부서로 이루어져 있습니다.
              <span className="my-3 w-full block" />각 부서를 클릭하여
              자랑스러운 17기 임원들을 확인해보세요!
            </>
          }
          pageFooter={<div></div>}
        >
          <MenuBar />
        </PageIntro>
        {/* sponsors intro */}
        {/* resources intro */}
        {/* newsletter intro */}
        <PageIntro
          pageName="newsletter"
          pageSlogan={
            <>
              매달 우리의 새로운 소식을
              <br /> 당신의 메일함으로
            </>
          }
          pageExp={
            <>
              바쁜 학업생활 속 놓치고 있던 정보들과 소식들이 있나요?
              <span className="my-3 w-full block" />
              어디서 들어본 것 같은데, 잘 모르겠다 싶은 주제들, 혹은 궁금했는데
              찾기 어려웠던 정보들을 뉴스레터에 담아 쉽고 재밌게 전합니다.
              <span className="my-3 w-full block" />
              이메일 구독으로 KCC 월간 뉴스레터를 간편하게 받아보세요!
            </>
          }
          pageFooter={
            <div className="text-center flex justify-center">
              <Link
                className="text-center p-2 bg-kcc-theme text-white text-sm w-fit rounded-md"
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.google.com/forms/d/1h8FoNhv85dFnX4ICnw9BmvtRr_MBFhHS5Z6WrRlUP6Y/viewform?edit_requested=true"
              >
                Subscribe
              </Link>
            </div>
          }
        >
          <Image alt="events image" className="h-fit" src={newsletterImage} />
        </PageIntro>
      </div>
    </div>
  );
}

function MenuBar() {
  const [dept, setDept] = useState('Presidents');
  const [exec, setExec] = useState(null);
  const deptList = [
    'Presidents',
    'Academic',
    'External Relations',
    'Finance',
    'Marketing',
    'Media',
    'Programming',
    'Social',
  ];

  const deptContent: { [dept: string]: any } = {
    Presidents: 'loading...',
    Academic: [{}, {}, {}],
    'External Relations': 'loading...',
    Finance: 'loading...',
    Marketing: 'loading...',
    Media: 'loading...',
    Programming: 'loading...',
    Social: 'loading...',
  };

  const handleMenuChange = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    setDept(e.currentTarget.outerText);
  };

  return (
    <div className="w-full">
      <div className="max-w-full w-fit flex border-b border-b-kcc-gray text-kcc-gray overflow-x-auto gap-4 pb-2 text-xs whitespace-nowrap justify-items-center">
        {deptList.map((d, i) => (
          <div
            key={i}
            className={`cursor-pointer ${
              d === dept ? 'font-bold text-kcc-theme' : ''
            }`}
            onClick={handleMenuChange}
          >
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 p-5 gap-x-10 gap-y-5">
        {/* an exec cell */}
        <ExecutiveCell
          imageSrc="/assets/exec-dummy-image.png"
          position="position"
          name="홍길동"
          program="computer science"
        />
      </div>
    </div>
  );
}

interface ExecInfo {
  imageSrc: string;
  position: string;
  name: string;
  program: string;
}

function createExecObject(
  imgsrc: string,
  pos: string,
  nm: string,
  pg: string,
): ExecInfo {
  return {
    imageSrc: imgsrc,
    position: pos,
    name: nm,
    program: pg,
  };
}

function ExecutiveCell({
  imageSrc,
  position,
  name,
  program,
}: {
  imageSrc: string;
  position: string;
  name: string;
  program: string;
}) {
  return (
    <div className="">
      <div className="relative aspect-square rounded-xl">
        <Image
          alt=""
          src={imageSrc}
          fill={true}
          className="bg-gray-200 border-0 rounded-lg object-cover"
        />
      </div>
      <div className="text-2xs my-2 underline underline-offset-2 first-letter:capitalize">
        {position}
      </div>
      <div className="mb-1">{name}</div>
      <div className="text-3xs opacity-50 first-letter: capitalize">
        {program}
      </div>
    </div>
  );
}
