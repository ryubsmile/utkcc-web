'use client';

import { KCC_START_YEAR, KCC_TH_NOW } from '@/data/change-annually-data';
import { useState } from 'react';

export default function AboutModalButton() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="rounded-lg bg-gray-300 text-black px-4 py-2 w-fit mt-4 mx-auto cursor-pointer"
      >
        Learn More
      </div>
      {showModal && <AboutModal setShowModal={setShowModal} />}
    </>
  );
}

function AboutModal({
  setShowModal,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <dialog className="fixed top-0 left-0 z-[100] w-screen h-screen p-0 bg-black bg-opacity-50 justify-center items-center flex mx-auto my-auto touch-none">
      <div
        onClick={() => setShowModal(false)}
        className="z-0 absolute bg-transparent w-full h-full top-0 left-0"
      />
      <div className="z-10 m-4 lg:my-12 lg:mx-48 p-4 lg:p-16 rounded-lg w-full h-fit bg-white flex flex-col gap-3 lg:gap-6">
        <div className="text-xl font-bold text-kcc-theme">About UTKCC</div>
        <div className="text-kcc-gray text-xs lg:text-sm flex flex-col gap-3">
          <p className="leading-6">
            올해 {KCC_TH_NOW}기를 맞이하는 토론토 대학교의 UTKCC는 Commerce 또는
            Economics를 전공하는 학생들로부터 출범하여, {KCC_START_YEAR}년부터
            현재까지 왕성한 활동을 펼치고 있는 한인학생회입니다. 현재는 다양한
            기술, 여러 아이디어의 인풋과 네트워킹이 중요한 현 사회에 발 맞추기
            위하여 상경계 학생은 물론 다양한 전공을 공부하는 학생 임원진들로
            이루어져 있습니다.
          </p>
          <p className="leading-6">
            UTKCC는{' '}
            <span className="text-kcc-theme underline underline-offset-4">
              #Be Part of a Professional Community
            </span>
            ,{' '}
            <span className="text-kcc-theme underline underline-offset-4">
              #Work Hard, Play Hard
            </span>{' '}
            라는 모토를 가지고 학업, 진로, 그리고 친목과 같은 다방면에 초점을 둔
            이벤트들을 진행하며 서로에게 큰 자산이 되는 가치들과 대학생활에 맞는
            맞춤형 지원을 제공하는 커뮤니티입니다. 저희 임원진들은 이벤트를 위해
            머리를 맞대어 고민하고, 기획하며, 학업을 위해 함께 공부하고, 다양한
            전공의 커리어 고민들을 나누며 새로운 시각을 접하고 배워갑니다.
          </p>
          <p className="leading-6">
            또한, 지난 {KCC_TH_NOW}년이라는 시간 동안 KCC를 거쳐가시고 국내외
            사회 여러 분야로 진출하신 Alumni분들로 구성된 KCCA 네트워크가
            형성되었습니다. KCC에 애정을 갖고 계시는 Alumni분들을 통하여 학우
            여러분들이 관심 있는 산업에 종사하고 계시는 Alumni분들과
            네트워킹하며 직종과 관련된 정보를 얻을 수 있는 커피챗, 커리어
            세미나, 와인 파티 등 유익한 이벤트를 제공하고 있습니다. Alumni분들의
            경험 및 유익한 정보들을 토대로 특정 분야에 국한되지 않고 사회 각
            분야를 선도할 수 있는 리더를 양성하며, 여러분들의 대학 생활을 더욱
            더 의미있고 윤활하게 만들 수 있도록 정진하고 있습니다.
          </p>
        </div>
        <div
          onClick={() => setShowModal(false)}
          className="w-fit self-end underline underline-offset-2 text-kcc-gray text-xs lg:text-sm cursor-pointer"
        >
          돌아가기
        </div>
      </div>
    </dialog>
  );
}
