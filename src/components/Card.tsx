import React, { ReactElement } from "react";

interface Props {
  data: {
    title: string;
    description: string;
    link: string;
  };
}

export default function Card({ data }: Props): ReactElement {
  return (
    <main className="pt-4">
      <section className="bg-white bg-gray-200 dark:bg-gray-600 rounded-lg p-6">
        <div className="text-lg font-semibold pb-2 uppercase hover:underline">
          <a href={data.link} rel="noopener" target="_blank">
            {data.title}
          </a>
        </div>
        <p className="text-sm font-light lowercase">{data.description}</p>
      </section>
    </main>
  );
}
