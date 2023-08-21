import Image from 'next/image';
import PageIntro from '../../components/pageIntro';
import MenuBar from '../../components/menubar';
import Link from 'next/link';
import sponsorData from './sponsor-info.json';

export default function Sponsors() {
  const data: { [k: string]: JSX.Element[] } = Object.fromEntries(
    sponsorData.map((sponsorInfo: SponsorInfo) => [
      sponsorInfo.name,
      [getSponsorCell(sponsorInfo)],
    ]),
  );

  return (
    <PageIntro
      pageName="sponsors"
      pageSlogan={<>함께하는 든든한 분들</>}
      pageExp={
        <>
          UTKCC는 토론토에 위치한 한인식당들과 제휴하여 UTKCC 멤버쉽 소지자에게
          일정 할인 혹은 경품 등 다양한 혜택들을 제공해드리고 있습니다.
          <span className="my-3 w-full block" />
          멤버쉽에 가입하셔서 더 많은 혜택을 누려보세요.
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
}

function getSponsorCell({
  name,
  exp,
  imageSrc,
  websiteUrl,
  locationUrl,
}: SponsorInfo) {
  return (
    <div key={0} className="text-center">
      <div className="max-w-[50%] mt-5 mx-auto relative aspect-square rounded-xl">
        <Image
          alt="-"
          // TODO: update image
          src={imageSrc}
          fill={true}
          sizes={'100%'}
          className="aspect-square bg-gray-200 border-0 rounded-lg object-cover"
        />
      </div>
      <div className="my-2 underline underline-offset-2 first-letter:capitalize">
        {name}
      </div>
      <div className="mb-1 text-xs">{exp}</div>
      {/* TODO: links update */}
      <div className="flex w-max mx-auto gap-3">
        <Link
          className="text-xs rounded-lg bg-gray-200 py-2 px-4 mx-auto my-2"
          target="_blank"
          rel="noopener noreferrer"
          href={websiteUrl}
        >
          Website
        </Link>
        <Link
          className="text-xs rounded-lg bg-gray-200 py-2 px-4 mx-auto my-2"
          target="_blank"
          rel="noopener noreferrer"
          href={locationUrl}
        >
          Location
        </Link>
      </div>
    </div>
  );
}
