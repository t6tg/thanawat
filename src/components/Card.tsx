import React, { ReactElement } from "react";

interface Props {}

export default function Card({}: Props): ReactElement {
  return (
    <div className="pt-4">
      <section className="bg-white dark:bg-gray-600 rounded-lg p-6">
        <div className="text-lg font-semibold pb-2 uppercase">
          Hello from the other side
        </div>
        <p className="text-sm font-light lowercase">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque porro
          iure ullam perspiciatis magnam repellendus consequuntur aliquid,
          laborum repudiandae, dolore sequi dolorem laudantium voluptas,
          eligendi aspernatur quisquam quae enim praesentium?
        </p>
      </section>
    </div>
  );
}
