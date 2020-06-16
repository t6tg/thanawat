import React, { ReactElement } from "react";
import Card from "./Card";

interface Props {}

export default function App({}: Props): ReactElement {
  const AW = [
    {
      title: "Blog",
      description:
        "Collection of stories including technology, reviews, life-style and much more.",
      link: "https://blog.thanawatgulati.com",
    },
  ];
  const workEx = [
    {
      title: "JCSSE 2020",
      description:
        "Websites to apply to participate in academic seminars organized by king mongkut's university of technology north bangkok",
      link: "https://jcsse2020.cs.kmutnb.ac.th",
    },
    {
      title: "Computer Programming Grader",
      description:
        "Automatic programming check system Used in teaching computer programming at king mongkut's university of technology north bangkok",
      link: "https://github.com/thanawatgulati/compro2grader",
    },
    {
      title: "Computer Programming Grader",
      description:
        "Automatic programming check system Used in teaching computer programming at king mongkut's university of technology north bangkok",
      link: "https://github.com/thanawatgulati/compro2grader",
    },
  ];
  return (
    <main className="container mx-auto px-4 pt-16 dark:text-white">
      <h1 className="text-5xl font-bold">Thanawat Gulati</h1>
      <div className="w-full py-4 md:pr-4">
        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6">
          <div className="text-2xl font-semibold pb-2 uppercase">
            Affiliated websites
            {AW.map((r, index) => (
              <Card key={index} data={r} />
            ))}
          </div>
        </section>
        <section className="bg-white dark:bg-gray-800 rounded-lg p-6">
          <div className="text-2xl font-semibold pb-2 uppercase">
            Work Experience
            {workEx.map((r, index) => (
              <Card key={index} data={r} />
            ))}
          </div>
        </section>
      </div>
      <footer className="text-center">
        © Copyright {new Date().getFullYear()} · Thanawat Gulati
      </footer>
    </main>
  );
}
