import Link from 'next/link';

interface Props {
  pathname?: string;
  modalname?: string;
  children: React.ReactNode;
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function Tmp({
  pathname = 'tmp/',
  modalname = 'true',
  children,
  searchParams,
}: Props) {
  const showModal = searchParams?.modal;
  return (
    <>
      <Link
        href={`${pathname}/?modal=${modalname}`}
        className="bg-gray-200 p-4 rounded-lg h-fit"
      >
        this is tmp page.
      </Link>
      {showModal && <BasicModal pathname={pathname}>{children}</BasicModal>}
    </>
  );
}

interface ModalProps {
  pathname: string;
  children: React.ReactNode;
}

function BasicModal({ pathname, children }: ModalProps) {
  return (
    <>
      <dialog className="fixed top-0 left-0 z-[100] w-screen h-screen p-0 bg-black bg-opacity-50 justify-center items-center flex mx-auto my-auto">
        <Link
          href={pathname}
          className="z-0 absolute bg-transparent w-full h-full top-0 left-0 cursor-default"
        />
        <div className="z-10 bg-white p-4 rounded-lg">
          Hi! This is an easter egg page made by the creator! Glad you found it
          ^_^
          <br />
        </div>
      </dialog>
    </>
  );
}