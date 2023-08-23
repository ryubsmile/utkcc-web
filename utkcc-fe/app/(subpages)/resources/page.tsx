import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageIntro from '@/components/pageIntro';
import MenuBar from '@/components/menubar';

export const metadata: Metadata = {
  title: 'Resources',
};

export default function Resources() {
  const resourcesData: { [k: string]: JSX.Element[] } = {
    'anti-calendar': [
      <div key={0} className="text-center">
        <div className="max-w-[50%] mt-5 mx-auto relative aspect-square rounded-xl">
          <Image
            alt=""
            // TODO: update image
            src={'/assets/exec-dummy-image.png'}
            fill={true}
            sizes={'100%'}
            className="aspect-square bg-gray-200 border-0 rounded-lg object-cover"
          />
        </div>
        <div className="my-2 underline underline-offset-2 first-letter:capitalize">
          Anti-calendar
        </div>
        <div className="mb-1 text-xs">과목별 꿀팁들은 여기서</div>
        {/* TODO: links update */}
        <div className="flex flex-col w-max mx-auto">
          <Link
            href="/assets/pdf/anti-calendar-freshmen.pdf"
            target="_blank"
            className="text-xs rounded-lg bg-gray-200 w-full py-2 px-auto mx-auto my-2"
          >
            Sample for freshmen
          </Link>
          <Link
            href="/assets/pdf/anti-calendar-upperyears.pdf"
            target="_blank"
            className="text-xs rounded-lg bg-gray-200 w-fit py-2 px-5 mx-auto my-2"
          >
            Sample for upper years
          </Link>
        </div>
      </div>,
    ],
    'study package': [
      <div key={1} className="text-center">
        <div className="max-w-[50%] mt-5 mx-auto relative aspect-square rounded-xl">
          <Image
            alt=""
            // TODO: update image
            src={'/assets/exec-dummy-image.png'}
            fill={true}
            sizes={'100%'}
            className="aspect-square bg-gray-200 border-0 rounded-lg object-cover"
          />
        </div>
        <div className="my-2 underline underline-offset-2 first-letter:capitalize">
          Study Package
        </div>
        <div className="mb-1 text-xs">
          선배들의 팁, 연습문제, 렉처 정리를 한 번에
        </div>
        {/* TODO: links update */}
        <div className="flex flex-col w-max mx-auto">
          <Link
            href="/assets/pdf/eco101-sample.pdf"
            target="_blank"
            className="text-xs rounded-lg bg-gray-200 w-full py-2 px-auto mx-auto my-2"
          >
            Sample for ECO101
          </Link>
          <Link
            href="/assets/pdf/sta130-sample.pdf"
            target="_blank"
            className="text-xs rounded-lg bg-gray-200 w-fit py-2 px-5 mx-auto my-2"
          >
            Sample for STA130
          </Link>
        </div>
      </div>,
    ],
    'social media': [
      <div key={2} className="text-center">
        <div className="max-w-[50%] mt-5 mx-auto relative aspect-square rounded-xl">
          <Image
            alt=""
            // TODO: update image
            src={'/assets/exec-dummy-image.png'}
            fill={true}
            sizes={'100%'}
            className="aspect-square bg-gray-200 border-0 rounded-lg object-cover"
          />
        </div>
        <div className="my-2 underline underline-offset-2 first-letter:capitalize">
          Social Media
        </div>
        <div className="mb-1 text-xs">여러 곳에서 저희를 만나보세요</div>
        {/* TODO: links update */}
        <div className="flex flex-col w-max mx-auto">
          <Link
            href="https://www.youtube.com/@utkcc3050"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs rounded-lg w-full bg-gray-200 py-2 px-auto mx-auto my-2"
          >
            Youtube
          </Link>
          <Link
            href="https://www.instagram.com/utkcc_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs rounded-lg w-fit bg-gray-200 py-2 px-5 mx-auto my-2"
          >
            Instagram
          </Link>
        </div>
      </div>,
    ],
  };

  return (
    <PageIntro
      pageName="resources"
      pageSlogan={<>소스라치는 리소스</>}
      pageExp={
        <>
          UTKCC는 인스타그램와 유튜브를 소통창구로, 안티캘린더와 족보를
          참고자료로 나눠드리고 있습니다.
          <span className="my-3 w-full block" />각 아이콘을 클릭하여 UTKCC가
          제공하는 다양한 리소스를 받아보세요.
        </>
        // TODO: footer link
      }
    >
      <MenuBar
        defaultLabel="anti-calendar"
        columnNumber={1}
        data={resourcesData}
      />
    </PageIntro>
  );
}
