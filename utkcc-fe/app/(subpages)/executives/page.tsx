import { Metadata } from 'next';
import Image from 'next/image';
import { getPlaiceholder } from 'plaiceholder';
import PageIntro from '@/components/pageIntro';
import MenuBar from '@/components/menubar';
import { getURL } from '@/lib/utils';
import PresidentModalButton from './presidentModal';
import { deptList, execData } from '@/data/executives-data';
import { KCC_TH_NOW } from '@/data/change-annually-data';

export const metadata: Metadata = {
  title: 'Executives',
};

export default function Executives() {
  const deptContent = Object.fromEntries(
    deptList.map((deptName: string) => [
      deptName,
      getDeptExecCells(getExecutives()[deptName]),
    ]),
  );

  return (
    <PageIntro
      pageName="executives"
      pageSlogan={<>UTKCC {KCC_TH_NOW}기 임원진</>}
      pageExp={
        <>
          UTKCC는 현재 회장단과 {deptList.length - 1}개의 부서로 이루어져
          있습니다.
          <span className="my-3 w-full block" />각 부서를 클릭하여 {KCC_TH_NOW}
          기 임원진들을 확인해보세요.
        </>
      }
    >
      <MenuBar defaultLabel={deptList[0]} columnNumber={2} data={deptContent} />
    </PageIntro>
  );
}

interface ExecInfo {
  imageSrc: string;
  position: string;
  name: string;
  program: string;
  intro: string[];
  id: number;
}

// TODO: optimize, rewrite using Object.groupBy when released
function getExecutives() {
  const deptContent: { [dept: string]: any[] } = Object.fromEntries(
    deptList.map((deptName: string) => [deptName, []]),
  );

  execData.forEach((execInfo, i) => {
    deptContent[execInfo.dept].push({
      name: execInfo.name,
      program: execInfo.program,
      position: execInfo.position,
      imageSrc: execInfo.imageSrc,
      intro: execInfo.intro,
      id: i,
    } as ExecInfo);
  });

  return deptContent;
}

async function ExecutiveCell({
  imageSrc,
  position,
  name,
  program,
  intro,
  id,
}: ExecInfo) {
  const blurImageUrl = await getBase64(getURL(imageSrc));

  return (
    <div>
      <div className="relative aspect-square rounded-xl">
        <Image
          alt=""
          src={imageSrc}
          fill={true}
          sizes={'100%'}
          placeholder="blur"
          blurDataURL={blurImageUrl}
          className="bg-gray-200 border-0 rounded-lg aspect-square object-cover"
          key={id}
        />
      </div>
      <div className="text-2xs my-2 underline underline-offset-2 capitalize">
        {position}
      </div>
      <div className="mb-1">{name}</div>
      <div className="text-3xs opacity-50 capitalize">{program}</div>
      {intro !== undefined && intro.length !== 0 && (
        <PresidentModalButton position={position} name={name} intro={intro} />
      )}
    </div>
  );
}

function getDeptExecCells(deptExecList: ExecInfo[]) {
  return deptExecList.map(
    ({ imageSrc, name, position, program, intro, id }) => (
      <ExecutiveCell
        key={id}
        imageSrc={imageSrc}
        name={name}
        position={position}
        program={program}
        intro={intro}
        id={id}
      />
    ),
  );
}

/**
 * Get the base64 blurred image url from the href source url
 */
async function getBase64(imageUrl: string) {
  try {
    const res = await fetch(imageUrl);
    if (!res.ok) {
      throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`);
    }

    const buffer = await res.arrayBuffer();
    const { base64 } = await getPlaiceholder(Buffer.from(buffer));
    return base64;
  } catch (e) {
    if (e instanceof Error) console.log(e.stack);
  }
}
