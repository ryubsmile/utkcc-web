import { LogoImage } from '@/components/slide';
import './animation.css';

export default function NewSlide() {
  const animationName = 'upfold';

  const Text1 = () => (
    <div className="font-normal text-xl text-center text-gray-600">
      <p className={`${animationName}-text-1`}>
        학업 성취와 커리어의 첫 시작점 <br />
        모두 이 곳에서 시작하세요. <br />
      </p>
      <p className={`${animationName}-text-2`}>
        이제껏 경험 못 했던 한인경영동아리, <br />
        <span className="text-kcc-theme">UTKCC</span>와 함께라면 당신의 <br />
        유티는 분명 더 즐거울거에요.
      </p>
    </div>
  );

  const Text2 = () => (
    <div className={`font-normal text-xl text-center ${animationName}-slogan`}>
      Be Part of a
      <br /> <span className="text-kcc-theme">Professional</span> Community.
    </div>
  );

  const GroupName = () => (
    <div className={`flex flex-col text-center ${animationName}-group-name`}>
      <div className="font-bold text-4xl text-kcc-theme">UTKCC</div>
      <div className="mt-4 font-normal text-gray-600">
        University of Toronto <br /> Korean Commerce Community
      </div>
    </div>
  );

  const ScrollInstructor = () => (
    <div
      className={`absolute w-full bottom-[8dvh] opacity-60 text-center ${animationName}-logo`}
    >
      아래로 스크롤하세요.
    </div>
  );

  const PlaceCenter = ({ children }: { children: JSX.Element }) => (
    <div className="absolute w-screen h-screen flex items-center justify-center">
      {children}
    </div>
  );

  return (
    <div className="w-screen h-screen absolute top-0 left-0 z-50 bg-slate-200">
      <div className="relative w-full h-full">
        <div className="absolute w-screen h-screen scale-[0.25] upfold-logo">
          <LogoImage />
        </div>
        <PlaceCenter>
          <Text1 />
        </PlaceCenter>
        <PlaceCenter>
          <Text2 />
        </PlaceCenter>
        <PlaceCenter>
          <GroupName />
        </PlaceCenter>
        <PlaceCenter>
          <ScrollInstructor />
        </PlaceCenter>
      </div>
    </div>
  );
}
