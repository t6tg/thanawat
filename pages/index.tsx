import React from "react";
import { GetServerSideProps } from "next";
import Header from "../components/Header";
import Blog from "../components/Blog";
import Head from "next/head";

const Index = ({ data, spotify_data }) => {
  return (
    <div>
      <Head>
        <title>T6TG | Thanawat Gulati</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Thanawat Gulati • CSKMUNTB#32 | t6tg.com | Google Developer Student Clubs Lead | Microsoft Learn Student Ambassador (MLSA)"
        />
        <meta
          name="og:description"
          content="Thanawat Gulati • CSKMUNTB#32 | t6tg.com | Google Developer Student Clubs Lead | Microsoft Learn Student Ambassador (MLSA)"
        />
        <meta
          name="keywords"
          content="t6tg, T6TG, james, Thanawat, thanawat, gulati, Gulati, m.mjames, mjames"
        />
        <meta name="author" content="Thanawat Gulati" />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content="T6TG • Thanawat Gulati" />
        <meta property="og:site_name" content="T6TG" />
        <meta property="og:image" content="https://to.t6tg.com/preview_img" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS Feed for t6tg.com"
          href="/rss.xml"
        />
      </Head>
      <Header nowPlay={spotify_data} />
      <Blog data={data} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const url = "https://dev.to/api/articles/me/published";
  const spotify_url = "https://api.spotify.com/v1/me/player/currently-playing";

  const res_spotify = await fetch(spotify_url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.SPOTIFY_API}`,
    },
  });
  const spotify_data = await res_spotify.json();

  const res = await fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      "api-key": `${process.env.DEV_TO}`,
    },
  });
  const data = await res.json();

  return {
    props: {
      data,
      spotify_data,
    },
  };
};

export default Index;
