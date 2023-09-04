import Image from 'next/image';
import LogoImage from 'public/assets/images/big-logo.png';
import './entry.css';

/**
 * 홈페이지 LCP (Largest Contentful Paint)를 띄우는 애니메이션.
 */
export default function Entry() {
  const animationName = 'upfold';

  const Logo = (
    <Image
      src={LogoImage}
      alt=""
      fill={true}
      sizes={'100%'}
      priority={true}
      className={`object-contain scale-[0.4] lg:scale-[0.25] ${animationName}-logo`}
    />
  );

  const ScrollInstructor = (
    <div
      className={`absolute w-full bottom-[8dvh] opacity-60 text-center ${animationName}-logo`}
    >
      아래로 스크롤하세요.
    </div>
  );

  const Text1 = (
    <div className="font-normal text-xl text-center text-gray-600">
      <p className={`${animationName}-text-1`}>
        학업 성취와 커리어의 첫 시작점 <br />
        모두 이 곳에서 시작하세요. <br />
      </p>
      <p className={`${animationName}-text-2`}>
        이제껏 경험 못 했던 한인 경영동아리, <br />
        <span className="text-kcc-theme">UTKCC</span>와 함께라면 당신의 <br />
        유티는 분명 더 즐거울거예요.
      </p>
    </div>
  );

  const Text2 = (
    <div className={`font-normal text-xl text-center ${animationName}-slogan`}>
      Be Part of a
      <br /> <span className="text-kcc-theme">Professional</span> Community.
    </div>
  );

  const GroupName = (
    <div className={`flex flex-col text-center ${animationName}-group-name`}>
      <div className="font-bold text-4xl text-kcc-theme">UTKCC</div>
      <div className="mt-4 font-normal text-gray-600">
        University of Toronto <br /> Korean Commerce Community
      </div>
    </div>
  );

  const animationComponents = [Logo, ScrollInstructor, Text1, Text2, GroupName];

  return (
    <>
      <div className="w-screen h-[100dvh] absolute top-0 left-0">
        <div className="relative w-full h-full">
          {animationComponents.map((components, i) => (
            <PlaceCenter key={i}>{components}</PlaceCenter>
          ))}
        </div>
      </div>
      <div className="h-screen"></div>
    </>
  );
}

function PlaceCenter({ children }: { children: React.JSX.Element }) {
  return (
    <div className="absolute w-screen h-[100dvh] flex items-center justify-center">
      {children}
    </div>
  );
}
