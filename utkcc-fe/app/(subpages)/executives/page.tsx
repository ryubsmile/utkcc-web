import { Metadata } from 'next';
import Image from 'next/image';
import PageIntro from '@/components/pageIntro';
import MenuBar from '@/components/menubar';
import execData from './executives-info.json';

export const metadata: Metadata = {
  title: 'Executives',
};

export default function Executives() {
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

  const deptContent = Object.fromEntries(
    deptList.map((deptName: string) => [
      deptName,
      getDeptExecCells(getExecutives()[deptName]),
    ]),
  );

  return (
    <PageIntro
      pageName="executives"
      pageSlogan={<>UTKCC 17기 임원진</>}
      pageExp={
        <>
          UTKCC는 현재 회장단과 일곱개의 부서로 이루어져 있습니다.
          <span className="my-3 w-full block" />각 부서를 클릭하여 17기
          임원진들을 확인해보세요.
        </>
      }
    >
      <MenuBar defaultLabel="presidents" columnNumber={2} data={deptContent} />
    </PageIntro>
  );
}

interface ExecInfo {
  imageSrc: string;
  position: string;
  name: string;
  program: string;
  intro: string;
}

// TODO: optimize, rewrite using Object.groupBy when released
function getExecutives() {
  const deptContent: { [dept: string]: any[] } = {
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
    deptContent[execInfo.dept].push({
      name: execInfo.name,
      program: execInfo.program,
      position: execInfo.position,
      imageSrc: `/assets/exec-headshots/${execInfo.name}.png`,
      intro: execInfo.intro,
    });
  });

  return deptContent;
}

function ExecutiveCell({ imageSrc, position, name, program, intro }: ExecInfo) {
  return (
    <div>
      <div className="relative aspect-square rounded-xl">
        <Image
          alt=""
          src={imageSrc}
          // width={500}
          // height={500}
          fill={true}
          sizes={'100%'}
          className="bg-gray-200 border-0 rounded-lg aspect-square object-cover"
        />
      </div>
      <div className="text-2xs my-2 underline underline-offset-2 first-letter:capitalize">
        {position}
      </div>
      <div className="mb-1">{name}</div>
      <div className="text-3xs opacity-50 first-letter: capitalize">
        {program}
      </div>
      {!intro ? (
        ''
      ) : (
        // TODO: onclick
        <div className="rounded-lg bg-gray-300 px-3 py-1 w-fit text-2xs mt-2">
          소개글
        </div>
      )}
    </div>
  );
}

function getDeptExecCells(deptExecList: ExecInfo[]) {
  return deptExecList.map((info, i) => (
    <ExecutiveCell
      key={i}
      imageSrc={info.imageSrc}
      name={info.name}
      position={info.position}
      program={info.program}
      intro={info.intro}
    />
  ));
}
