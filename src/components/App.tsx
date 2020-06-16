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
      title: "covid-19",
      description: "Covid-19 Real Time Data in Thailand and The world",
      link: "https://thanawatgulati.github.io/covid-19",
    },
    {
      title: "Orther",
      description: "Other works and work experience",
      link: "https://github.com/thanawatgulati",
    },
  ];
  const Contact = [
    {
      title: "Email",
      description: "My work email",
      link: "mailto:work@thanawatgulati.com",
    },
    {
      title: "Github",
      description: "My github account",
      link: "https://github.com/thanawatgulati",
    },
    {
      title: "Facebook",
      description: "My facebook messenger",
      link: "https://m.me/mjamesthanawat",
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
        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6">
          <div className="text-2xl font-semibold pb-2 uppercase">
            Work Experience
            {workEx.map((r, index) => (
              <Card key={index} data={r} />
            ))}
          </div>
        </section>
        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6">
          <div className="text-2xl font-semibold pb-2 uppercase">
            Contact
            {Contact.map((r, index) => (
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
