import { Metadata } from 'next';
import EventTile from './eventTile';

export const metadata: Metadata = {
  title: 'Events',
};

export default function Events() {
  const title = 'UTKCC PRESENTS';
  const subtitle = '매년 다양하고 의미있는 이벤트를 주최하고자 합니다.';

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
        ></EventTile>
        <EventTile
          eventType="professional"
          eventSlogan={
            <>
              대학 그 너머 <br /> 커리어를 위하여
            </>
          }
        ></EventTile>
        <EventTile
          eventType="social"
          eventSlogan={
            <>
              대학 생활의 묘미를 <br /> 잊지 않기 위하여
            </>
          }
        ></EventTile>
      </div>
    </div>
  );
}
