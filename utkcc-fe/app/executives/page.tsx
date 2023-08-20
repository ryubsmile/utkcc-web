import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Executives',
};

export default function Executives() {
  const title = 'Executives';
  const subtitle = '남들과는 다른 이벤트를 만들고자 합니다';

  return (
    <div className="pt-16 px-8">
      <div className="text-xl font-bold text-center mt-12">{title}</div>
      <div className="text-sm font-normal text-center mt-4 mb-8 text-kcc-gray">
        {subtitle}
      </div>
    </div>
  );
}
