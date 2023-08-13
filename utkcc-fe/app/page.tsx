import Slides from './slides';
import PageIntro from './pageIntro';
import Image from 'next/image';
import aboutImage from '/public/assets/about-image.png';
import eventsImage from '/public/assets/events-image.png';

export default function Home() {
  return (
    <div className="flex-col">
      <Slides />
      <div className="px-8 z-50">
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
              <span className="my-2 w-full block" />
              매년 학업, 진로, 그리고 친목도모와 같이 학생들의 대학생활을
              지원하는 다양한 행사들을 진행합니다.
            </>
          }
        >
          <Image alt="about image" src={aboutImage} />
        </PageIntro>
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
              <span className="my-2 w-full block" />
              모두 UTKCC에서 만나보세요.
            </>
          }
        >
          <Image alt="events image" src={eventsImage} />
        </PageIntro>
      </div>
    </div>
  );
}
