import { Slide, LogoImage, LogoSlide } from './slide';

export default function Slides() {
  return (
    <div className="h-[600vh] w-fit">
      <Slide
        duration={500}
        additionalStyle=""
        transitions={[
          {
            top: '470vh',
            height: '10vh',
            opacityTo: '1',
          },
        ]}
      >
        <div className="fixed w-full bottom-[8dvh] opacity-60">
          아래로 스크롤하세요.
        </div>
      </Slide>
      <LogoSlide duration={500} />
      <Slide
        duration={500}
        transitions={[
          {
            top: '150vh',
            height: '330vh',
            opacityTo: '0.2',
          },
        ]}
      >
        <div className="relative w-screen h-[100vmin] scale-[0.4] lg:scale-[0.25]">
          <LogoImage />
        </div>
      </Slide>
      <Slide
        duration={500}
        transitions={[
          {
            top: '170vh',
            height: '50vh',
            opacityTo: '1',
          },
        ]}
      >
        <div className="font-normal text-xl">
          학업 성취와 커리어의 첫 시작점 <br />
          모두 이 곳에서 시작하세요. <br />
          <span className="text-transparent">
            이제껏 경험 못 했던 한인경영동아리, <br /> <span>UTKCC</span>와
            함께라면 당신의 <br />
            유티는 분명 더 즐거울거에요.
          </span>
        </div>
      </Slide>
      <Slide
        duration={500}
        transitions={[
          {
            top: '210vh',
            height: '10vh',
            opacityTo: '1',
          },
        ]}
      >
        <div className="font-normal text-xl">
          <span className="text-transparent">
            학업성취와 커리어의 첫 시작점 <br />
            모두 이 곳에서 시작하세요.{' '}
          </span>
          <br />
          이제껏 경험 못 했던 한인경영동아리, <br />{' '}
          <span className="text-kcc-theme">UTKCC</span>와 함께라면 당신의 <br />
          유티는 분명 더 즐거울거에요.
        </div>
      </Slide>
      <Slide
        duration={500}
        transitions={[
          {
            top: '340vh',
            height: '10vh',
            opacityTo: '1',
          },
        ]}
      >
        <div className="font-normal text-xl text-gray-600">
          Be part of a
          <br /> <span className="text-kcc-theme">professional</span> community.
        </div>
      </Slide>
      <Slide
        duration={500}
        transitions={[
          {
            top: '470vh',
            height: '10vh',
            opacityTo: '1',
          },
        ]}
      >
        <div className="flex flex-col">
          <div className="font-bold text-4xl text-kcc-theme">UTKCC</div>
          <div className="mt-4 font-normal text-gray-600">
            University of Toronto <br /> Korean Commerce Community
          </div>
        </div>
      </Slide>
    </div>
  );
}
