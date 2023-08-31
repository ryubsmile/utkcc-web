import { Metadata } from 'next';
import Image from 'next/image';
import PageIntro from '@/components/pageIntro';
import aboutImage from '/public/assets/images/about-image.webp';

export const metadata: Metadata = {
  title: 'About',
};

export default function About() {
  return (
    <PageIntro
      pageName="about"
      pageSlogan={
        <span className="after:content-['토론토_대학교_\A_한인_경영동아리'] whitespace-pre lg:after:content-['UTKCC'] lg:font-bold lg:text-7xl lg:mb-0" />
      }
      pageExp={
        <>
          UTKCC는 2007년에 설립된 토론토 대학교의 한인 경영 커뮤니티로서,
          비즈니스라는 공통된 관심사를 가진 다양한 한인 학생들이 모여 경영
          분야에 대한 지식과 경험을 공유하며 함께 성장합니다.
          <span className="my-3 w-full block" />
          매년 커리어 컨퍼런스, 케이스 컴피티션, 네트워킹 세션 및 다양한 경영
          동아리와 같은 활동을 통해 한인 학생들의 커리어 발전을 지원하고
          있습니다.
        </>
      }
    >
      <Image
        alt="about image"
        className="w-full h-auto lg:max-h-[60vh] object-contain rounded-md mb-6"
        placeholder="blur"
        src={aboutImage}
      />
    </PageIntro>
  );
}
