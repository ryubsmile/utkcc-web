'use client';
import { useState } from 'react';

interface PresidentIntroProps {
  position: string;
  name: string;
  intro: string[];
}

export default function PresidentModalButton(props: PresidentIntroProps) {
  const [showIntro, setShowIntro] = useState(false);

  return (
    <>
      <div
        onClick={() => setShowIntro(true)}
        className="rounded-lg bg-gray-300 px-3 py-1 w-fit text-2xs mt-2 cursor-pointer border border-gray-200 hover:bg-gray-200"
      >
        소개글
      </div>
      {showIntro && <PresidentModal setShowModal={setShowIntro} {...props} />}
    </>
  );
}

interface PresidentModalProps extends PresidentIntroProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function PresidentModal({
  position,
  name,
  intro,
  setShowModal,
}: PresidentModalProps) {
  return (
    <dialog className="fixed top-0 left-0 z-[100] w-screen h-screen p-0 bg-black bg-opacity-50 justify-center items-center flex mx-auto my-auto touch-none">
      <div
        onClick={() => setShowModal(false)}
        className="z-0 absolute bg-transparent w-full h-full top-0 left-0"
      />
      <div className="z-10 m-4 lg:my-12 lg:mx-48 p-4 lg:p-16 rounded-lg w-full h-fit bg-white flex flex-col gap-3 lg:gap-6">
        <div className="text-kcc-theme text-sm">
          <span className="capitalize">{position}</span>
          {' of UTKCC'}
        </div>
        <div className="text-xl">{name}</div>
        <div className="text-kcc-gray text-xs lg:text-sm flex flex-col gap-3">
          {intro.map((paragraph, i) => (
            <p key={i} className="break-keep">
              {paragraph}
            </p>
          ))}
        </div>
        <div
          onClick={() => setShowModal(false)}
          className="w-fit self-end underline underline-offset-2 text-kcc-gray hover:opacity-70 text-xs lg:text-sm cursor-pointer"
        >
          돌아가기
        </div>
      </div>
    </dialog>
  );
}
