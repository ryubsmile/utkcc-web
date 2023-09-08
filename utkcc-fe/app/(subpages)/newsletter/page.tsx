import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageIntro from '@/components/pageIntro';
import newsletterImage from '/public/assets/images/newsletter-image.png';
import { subscribeNewsletterLink } from '@/data/change-annually-data';

export const metadata: Metadata = {
  title: 'Newsletter',
};

export default function Newsletter() {
  return (
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
          어디서 들어본 것 같은데, 잘 모르겠다 싶은 주제들, 혹은 궁금했는데 찾기
          어려웠던 정보들을 뉴스레터에 담아 쉽고 재밌게 전합니다.
          <span className="my-3 w-full block" />
          이메일 구독으로 KCC 월간 뉴스레터를 간편하게 받아보세요!
          <span className="text-center flex justify-center my-2">
            <Link
              className="text-center px-6 py-2 bg-kcc-theme hover:bg-kcc-theme-darker mt-4 text-white text-opacity-90 hover:text-opacity-100 text-sm w-fit rounded-xl"
              target="_blank"
              rel="noopener noreferrer"
              href={subscribeNewsletterLink}
            >
              뉴스레터 구독하기
            </Link>
          </span>
        </>
      }
    >
      <Image
        alt="events image"
        // className="object-contain w-[80vw] h-auto max-h-[40vh] lg:max-h-[60vh] rounded-lg"
        className="object-contain w-auto max-w-full h-[40vh] lg:h-full lg:max-h-[60vh] rounded-lg"
        src={newsletterImage}
        placeholder="blur"
      />
    </PageIntro>
  );
}
