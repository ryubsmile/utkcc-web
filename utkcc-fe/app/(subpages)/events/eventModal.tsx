'use client';

import Image from 'next/image';
import { useState } from 'react';

/**
 * Explains a single event, of among type `professional, academic, or social`.
 */
interface EventSummary {
  type: string;
  slogan: string[];
  explanation: string;
}

export interface EventModalButtonProps {
  info: EventSummary;
  bgImage: string;
}

export default function EventModalButton({
  info,
  bgImage,
}: EventModalButtonProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="aspect-square relative text-white w-full h-auto rounded-lg p-6 flex flex-col gap-6 cursor-pointer overflow-hidden"
      >
        <div className="absolute w-full h-full bg-black top-0 left-0 -z-20"></div>
        <Image
          alt="-"
          src={bgImage}
          fill={true}
          className="opacity-40 object-cover -z-10"
        />
        <div className="text-s capitalize">{info.type}</div>
        <div className="text-lg leading-5">
          {info.slogan.map((slice, i) => (
            <p key={i} className="block">
              {slice}
            </p>
          ))}
        </div>
        <div className="text-xl font-light">+</div>
      </div>
      {showModal && <EventModal setShowModal={setShowModal} info={info} />}
    </>
  );
}

interface EventModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  info: EventSummary;
}

function EventModal({ info, setShowModal }: EventModalProps) {
  return (
    <dialog className="fixed top-0 left-0 z-[100] w-screen h-screen p-0 bg-black bg-opacity-50 justify-center items-center flex mx-auto my-auto touch-none">
      <div
        onClick={() => setShowModal(false)}
        className="z-0 absolute bg-transparent w-full h-full top-0 left-0"
      />
      <div className="z-10 m-4 lg:my-12 lg:mx-48 p-4 lg:p-8 rounded-lg w-full h-fit bg-white flex flex-col gap-3">
        <div className="text-kcc-theme text-sm capitalize">{info.type}</div>
        <div className="text-xl">
          {info.slogan.map((slice, i) => (
            <p key={i} className="block">
              {slice}
            </p>
          ))}
        </div>
        <div className="text-kcc-gray text-sm break-keep">
          {info.explanation}
        </div>
        <div
          onClick={() => setShowModal(false)}
          className="w-fit self-end underline underline-offset-2 text-kcc-gray cursor-pointer"
        >
          돌아가기
        </div>
      </div>
    </dialog>
  );
}
