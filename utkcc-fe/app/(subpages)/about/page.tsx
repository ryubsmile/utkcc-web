import { Metadata } from 'next';
import Image from 'next/image';
import PageIntro from '@/components/pageIntro';
import aboutImage from '/public/assets/about-image.png';

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
          UTKCC는 상경계열 전공생들로부터 출범하여 현재는 다양한 전공계열의
          학생들로 이루어진 한인 동아리입니다.
          <span className="my-3 w-full block" />
          매년 학업, 진로, 그리고 친목도모와 같이 학생들의 대학생활을 지원하는
          다양한 행사들을 진행합니다.
        </>
      }
    >
      <Image
        alt="about image"
        className="w-[80vw] h-auto max-h-[40vh] lg:max-h-[60vh] object-contain"
        src={aboutImage}
      />
    </PageIntro>
  );
}
