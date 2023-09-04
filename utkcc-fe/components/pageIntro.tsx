export default function PageIntro({
  children,
  pageName,
  pageSlogan,
  pageExp,
}: {
  children: React.ReactNode;
  pageName: string;
  pageSlogan: string | React.ReactNode;
  pageExp: string | React.ReactNode;
}) {
  return (
    <article className="h-auto w-full lg:pt-0 lg:grid grid-cols-right-tilt-twin-columns gap-x-[5vw] grid-rows-3-auto-rows grid-flow-col-dense items-end relative">
      <div id={pageName} className="absolute -top-32"></div>
      {/* section intro title */}
      <div className="text-kcc-theme font-bold text-xl capitalize self-end">
        {pageName}
      </div>
      {/* section intro slogans */}
      <div className="text-black font-normal text-2xl my-6">{pageSlogan}</div>
      <div className="max-w-full w-full h-full flex items-center justify-center mx-auto row-span-2 row-start-2 rounded-lg overflow-hidden">
        {children}
      </div>
      <p className="break-keep hyphens-auto font-normal my-6 lg:mt-0 text-kcc-gray self-start">
        {pageExp}
      </p>
    </article>
  );
}
