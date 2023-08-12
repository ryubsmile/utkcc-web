import Slides from './slides';

export default function Home() {
  return (
    <div className="flex-col">
      <Slides />
      <div className="px-8">
        <article className="mt-[20vh] h-[100vh]">
          {/* section intro title */}
          <div className="text-kcc-theme font-semibold text-xl mb-4">About</div>
          {/* section intro explanations */}
          <div className="text-black font-semibold text-2xl">
            토론토 대학교 <br /> 한인 경영동아리
          </div>
          {/* <Image alt="a" src="/" /> */}
          <p className="text-xl break-keep hyphens-auto text-gray-600 py-4">
            UTKCC는 상경계열 전공생들로부터 출범하여 현재는{' '}
            <Emph>다양한 전공계열</Emph>의 학생들로 이루어진{' '}
            <Emph>한인 동아리</Emph>입니다. <br /> <br />
            매년 학업, 진로, 그리고 친목도모와 같이 학생들의{' '}
            <Emph>대학생활을 지원</Emph>하는 다양한 행사들을 진행합니다.
          </p>
        </article>
      </div>
    </div>
  );
}

/**
 * 텍스트 컬러 강조
 */
const Emph = ({ children }: { children: ReactNode }) => (
  <span className="text-kcc-theme">{children}</span>
);
