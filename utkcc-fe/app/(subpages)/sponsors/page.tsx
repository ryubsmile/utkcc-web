import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageIntro from '@/components/pageIntro';
import MenuBar from '@/components/menubar';
import { sponsorData } from '@/data/sponsors-data';

export const metadata: Metadata = {
  title: 'Sponsors',
};

export default function Sponsors() {
  const data: { [k: string]: JSX.Element[] } = Object.fromEntries(
    sponsorData.map((sponsorInfo, i) => [
      sponsorInfo.name.toLowerCase(),
      [getSponsorCell({ ...sponsorInfo, id: i })],
    ]),
  );

  return (
    <PageIntro
      pageName="sponsors"
      pageSlogan={<>UTKCC와 함께하는 파트너십</>}
      pageExp={
        <>
          UTKCC는 토론토에 위치한 한인식당들과 제휴하여 UTKCC 멤버십 소지자에게
          일정 할인 혹은 경품 등 다양한 혜택들을 제공해드리고 있습니다.
          <span className="my-3 w-full block" />
          멤버십에 가입하셔서 더 많은 혜택을 누려보세요.
        </>
        // TODO: footer 링크 요청해서 받기
      }
    >
      <MenuBar
        defaultLabel={Object.keys(data)[0]}
        columnNumber={1}
        data={data}
      />
    </PageIntro>
  );
}

interface SponsorInfo {
  name: string;
  exp: string;
  imageSrc: string;
  websiteUrl: string;
  locationUrl: string;
  id: number;
}

function getSponsorCell({
  name,
  exp,
  imageSrc,
  websiteUrl,
  locationUrl,
  id,
}: SponsorInfo) {
  return (
    <div key={id} className="text-center">
      <div className="max-w-[50%] mt-5 mx-auto relative aspect-square rounded-xl">
        <Image
          key={id}
          alt="-"
          src={imageSrc}
          fill={true}
          sizes={'100%'}
          className="aspect-square bg-gray-200 border-0 rounded-lg object-cover"
        />
      </div>
      <div className="my-2 underline underline-offset-2 capitalize">{name}</div>
      <div className="mb-1 text-xs">{exp}</div>
      <div className="flex w-max mx-auto gap-3">
        <Link
          className="text-xs rounded-lg bg-gray-200 py-2 px-4 mx-auto my-2 capitalize"
          target="_blank"
          rel="noopener noreferrer"
          href={websiteUrl}
        >
          website
        </Link>
        <Link
          className="text-xs rounded-lg bg-gray-200 py-2 px-4 mx-auto my-2 capitalize"
          target="_blank"
          rel="noopener noreferrer"
          href={locationUrl}
        >
          location
        </Link>
      </div>
    </div>
  );
}
