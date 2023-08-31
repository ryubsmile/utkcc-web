import Image from 'next/image';
import PageIntro from '@/components/pageIntro';
import LearnMoreLink from '@/components/learnMoreLink';
import eventsImage from '/public/assets/images/events-image.png';

export default function EventsHomeIntro() {
  return (
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
          만나볼 수 있는 네트워킹 세션, 스트레스를 시원하게 날릴 소셜 이벤트.
          <span className="my-3 w-full block" />
          모두 UTKCC에서 만나보세요.
          <LearnMoreLink name="events" />
        </>
      }
    >
      <Image
        alt="events image"
        className="w-full h-auto lg:max-h-[60vh] object-contain"
        src={eventsImage}
      />
    </PageIntro>
  );
}
