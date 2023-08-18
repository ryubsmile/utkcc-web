import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Events',
};

export default function Events() {
  const title = 'UTKCC PRESENTS';
  const subtitle = '남들과는 다른 이벤트를 만들고자 합니다';

  return (
    <div className="pt-16 px-8">
      <div className="text-xl font-bold text-center mt-12">{title}</div>
      <div className="text-sm font-normal text-center mt-4 mb-8 text-kcc-gray">
        {subtitle}
      </div>
      <div className="flex flex-col gap-8 h-auto">
        <div className="aspect-square bg-gray-200 w-full rounded-lg p-6 flex flex-col gap-6">
          <div className="text-sm">Academic Events</div>
          <div className="text-lg leading-5">
            학생의 본분을 <br />
            잊지 않기 위하여
          </div>
        </div>
        <div>asdf</div>
        <div>asdf</div>
      </div>
    </div>
  );
}
