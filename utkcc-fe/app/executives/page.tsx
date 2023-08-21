'use client';
import { useState } from 'react';
import Image from 'next/image';
import PageIntro from '../pageIntro';
import execData from './exec-info.json';
import { exec } from 'child_process';
import execData from './executives-info.json';

export default function Executives() {
  return (
    <div className="pt-10">
      <PageIntro
        pageName="executives"
        pageSlogan={<>자랑스러운 17기 임원</>}
        pageExp={
          <>
            UTKCC는 현재 회장단과 일곱 개의 부서로 이루어져 있습니다.
            <span className="my-3 w-full block" />각 부서를 클릭하여 자랑스러운
            17기 임원들을 확인해보세요!
          </>
        }
        pageFooter={<div></div>}
      >
        <MenuBar />
      </PageIntro>
    </div>
  );
}

function MenuBar() {
  const [selectedDept, setSelectedDept] = useState('presidents');

  const deptList = [
    'presidents',
    'academic',
    'external relations',
    'finance',
    'marketing',
    'media',
    'programming',
    'social',
  ];

  const formattedData: { [dept: string]: ExecInfo[] } = getExecutives();

  const deptContent = Object.fromEntries(
    deptList.map((deptName: string) => [
      deptName,
      getExecCellList(formattedData[deptName]),
    ]),
  );

  const handleMenuChange = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    setSelectedDept(e.currentTarget.outerText);
  };

  return (
    <div className="w-full">
      <div className="max-w-full w-fit flex border-b border-b-kcc-gray text-kcc-gray overflow-x-auto gap-4 pb-2 text-xs whitespace-nowrap justify-items-center">
        {deptList.map((d, i) => (
          <div
            key={i}
            className={`cursor-pointer ${
              d === selectedDept ? 'font-bold text-kcc-theme' : ''
            }`}
            onClick={handleMenuChange}
          >
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 p-5 gap-x-10 gap-y-5">
        {/* an exec cell */}
        {deptContent[selectedDept]}
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

// TODO: optimize, rewrite using Object.groupBy when released
function getExecutives() {
  const deptContent: { [dept: string]: ExecInfo[] } = {
    presidents: [],
    academic: [],
    'external relations': [],
    finance: [],
    marketing: [],
    media: [],
    programming: [],
    social: [],
  };

  execData.forEach(execInfo => {
    console.log(execInfo.dept);
    deptContent[execInfo.dept].push({
      name: execInfo.name,
      program: execInfo.program,
      position: execInfo.position,
      imageSrc: `/assets/exec-headshots/${execInfo.name}.png`,
    });
  });

  return deptContent;
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
          sizes={'100%'}
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

function getExecCellList(execList: ExecInfo[]) {
  return execList.map((execInfo, i) => (
    <ExecutiveCell
      key={i}
      imageSrc={execInfo.imageSrc}
      name={execInfo.name}
      position={execInfo.position}
      program={execInfo.program}
    />
  ));
}
