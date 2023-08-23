'use client';
import { useState } from 'react';

/**
 * Creates a menu bar with the following:
 * @param defaultLabel - the default category when initially loaded
 * @param columnNumber - the number of columns to display on a single row
 * @param data - object with categories as keys and JSX Elements as values
 */
export default function MenuBar({
  defaultLabel,
  columnNumber,
  data,
}: {
  defaultLabel: string;
  columnNumber: number;
  data: { [k: string]: JSX.Element[] };
}) {
  const [selectedCategory, setSelectedCategory] = useState(defaultLabel);

  const handleMenuChange = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    setSelectedCategory(e.currentTarget.outerText.toLowerCase());
  };

  return (
    <div className="w-full">
      <div className="w-full flex lg:flex-wrap border-b border-b-kcc-gray text-kcc-gray overflow-x-auto gap-4 pb-2 text-xs whitespace-nowrap justify-items-center">
        {Object.keys(data).map((d, i) => (
          <div
            key={i}
            className={`cursor-pointer capitalize ${
              d === selectedCategory ? 'font-bold text-kcc-theme' : ''
            }`}
            onClick={handleMenuChange}
          >
            {d}
          </div>
        ))}
      </div>
      <div
        // TODO: more columns to map as objects after interns come in
        className={`grid ${columnNumber === 1 ? 'grid-cols-1' : 'grid-cols-2'}
        )} p-5 gap-x-10 gap-y-5`}
      >
        {data[selectedCategory]}
      </div>
    </div>
  );
}
