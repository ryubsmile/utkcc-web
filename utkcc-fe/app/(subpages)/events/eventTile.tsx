'use client';

import { useState } from 'react';

interface EventTileProps {
  eventType: string;
  eventSlogan: string | React.ReactNode;
  bgImage?: string;
}

export default function EventTile({
  eventType,
  eventSlogan,
  bgImage,
}: EventTileProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="aspect-square bg-gray-200 w-full h-auto rounded-lg p-6 flex flex-col gap-6 cursor-pointer"
      >
        <div className="text-s capitalize">{eventType}</div>
        <div className="text-lg leading-5">{eventSlogan}</div>
        <div className="text-xl font-light">+</div>
      </div>
      {showModal && (
        <EventModal
          eventType={eventType}
          eventSlogan={eventSlogan}
          setShowModal={setShowModal}
        />
      )}
    </>
  );
}

interface EventModalProps {
  eventType: string;
  eventSlogan: string | React.ReactNode;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function EventModal({ eventType, eventSlogan, setShowModal }: EventModalProps) {
  return (
    <dialog className="fixed top-0 left-0 z-[100] w-screen h-screen p-0 bg-black bg-opacity-50 justify-center items-center flex mx-auto my-auto touch-none">
      <div
        onClick={() => setShowModal(false)}
        className="z-0 absolute bg-transparent w-full h-full top-0 left-0"
      />
      <div className="z-10 m-4 lg:my-12 lg:mx-32 p-4 lg:p-8 rounded-lg w-full h-fit bg-white flex flex-col gap-3">
        <div className="text-kcc-theme text-sm capitalize">{eventType}</div>
        <div className="text-xl">{eventSlogan}</div>
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
