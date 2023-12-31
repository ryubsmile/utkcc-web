import Image from 'next/image';
import PageIntro from '@/components/pageIntro';
import eventsImage from '/public/assets/images/events-image.png';
import Link from 'next/link';

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
          <Link
            href={`/events`}
            className="block rounded-xl bg-gray-300 text-sm text-black px-6 py-2 w-fit mt-4 mx-auto cursor-pointer hover:bg-gray-200"
          >
            Learn More
          </Link>
        </>
      }
    >
      <Image
        alt="events image"
        className="w-fit h-auto lg:max-h-[60vh] object-contain rounded-lg"
        placeholder="blur"
        src={eventsImage}
      />
    </PageIntro>
  );
}
