import { Metadata } from 'next';
import EventTile from './eventTile';
import { data } from './eventsInfo';

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
        {data.map((e, i) => (
          <EventTile info={e.info} key={i} />
        ))}
      </div>
    </div>
  );
}
