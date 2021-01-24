import React from "react";
import { GetServerSideProps } from "next";
import Header from "../components/Header";
import Blog from "../components/Blog";

const Index = ({ data, spotify_data }) => {
  return (
    <div>
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

  console.log(data);

  return {
    props: {
      data,
      spotify_data,
    },
  };
};

export default Index;
