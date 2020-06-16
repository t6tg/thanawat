import React, { ReactElement } from "react";
import Card from "./Card";

interface Props {}

export default function App({}: Props): ReactElement {
  return (
    <main className="container mx-auto px-4 pt-24 dark:text-white">
      <h1 className="text-5xl font-bold">Thanawat Gulati</h1>
      <div className="w-full py-4 md:pr-4">
        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6">
          <div className="text-2xl font-semibold pb-2 uppercase">
            Affiliated websites
            <Card />
          </div>
        </section>
        <section className="bg-white dark:bg-gray-800 rounded-lg p-6">
          <div className="text-2xl font-semibold pb-2 uppercase">
            Work Experience
            <Card />
          </div>
        </section>
      </div>
    </main>
  );
}
