import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Events',
};

interface EventProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function Events({ searchParams }: EventProps) {
  const title = 'UTKCC PRESENTS';
  const subtitle = '매년 다양하고 의미있는 이벤트를 주최하고자 합니다.';

  const showModal = searchParams?.modal;

  return (
    <div className="w-full">
      <div className="text-xl font-bold text-center mt-12">{title}</div>
      <div className="text-sm font-normal text-center mt-4 mb-8 text-kcc-gray">
        {subtitle}
      </div>
      <div className="flex flex-col lg:flex-row gap-8 h-auto w-[30vmax] lg:w-full mx-auto">
        <EventTile
          eventType="academic"
          eventSlogan={
            <>
              학생의 본분을 <br />
              잊지 않기 위하여
            </>
          }
          backURL="/events"
          showModal={showModal}
        ></EventTile>
        <EventTile
          eventType="professional"
          eventSlogan={
            <>
              대학 그 너머 <br /> 커리어를 위하여
            </>
          }
          backURL="/events"
          showModal={showModal}
        ></EventTile>
        <EventTile
          eventType="social"
          eventSlogan={
            <>
              대학 생활의 묘미를 <br /> 잊지 않기 위하여
            </>
          }
          backURL="/events"
          showModal={showModal}
        ></EventTile>
      </div>
    </div>
  );
}

interface EventTileProps {
  eventType: string;
  eventSlogan: string | React.ReactNode;
  bgImage?: string;
  backURL: string;
  showModal: string | string[] | undefined;
}

function EventTile({
  eventType,
  eventSlogan,
  bgImage,
  backURL,
  showModal,
}: EventTileProps) {
  return (
    <>
      <Link
        href={`${backURL}?modal=${eventType}`}
        shallow={true}
        scroll={false}
        className="aspect-square bg-gray-200 w-full h-auto rounded-lg p-6 flex flex-col gap-6"
      >
        <div className="text-s capitalize">{eventType}</div>
        <div className="text-lg leading-5">{eventSlogan}</div>
      </Link>
      {showModal === eventType && (
        <EventModal
          eventType={eventType}
          eventSlogan={eventSlogan}
          backURL={backURL}
        />
      )}
    </>
  );
}

interface EventModalProps {
  eventType: string;
  eventSlogan: string | React.ReactNode;
  backURL: string;
}

function EventModal({ eventType, eventSlogan, backURL }: EventModalProps) {
  return (
    <dialog className="fixed top-0 left-0 z-[100] w-screen h-screen p-0 bg-black bg-opacity-50 justify-center items-center flex mx-auto my-auto touch-none">
      <Link
        href={backURL}
        className="z-0 absolute bg-transparent w-full h-full top-0 left-0 cursor-default"
      />
      <div className="z-10 m-4 lg:m-12 p-4 lg:p-8 rounded-lg w-full h-fit bg-white flex flex-col gap-3">
        <div className="text-kcc-theme text-sm capitalize">{eventType}</div>
        <div className="text-xl">{eventSlogan}</div>
        <Link
          href={backURL}
          className="w-fit self-end underline underline-offset-2 text-kcc-gray"
        >
          돌아가기
        </Link>
      </div>
    </dialog>
  );
}
