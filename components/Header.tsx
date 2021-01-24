import React from "react";

const Header = ({ nowPlay }) => {
  return (
    <div className="grid mt-16 text-center justify-center">
      <img
        src="/profile.webp"
        alt="t6tg"
        loading="lazy"
        width="200px"
        className="mx-auto rounded-full"
      />
      <h1 className="text-6xl font-extrabold mt-4">T6TG</h1>
      <div className="flex justify-center flex-row gap-4 mt-4">
        <a href="https://fb.com/mjamesthanawat" title="facebook">
          <img src="/facebook.svg" alt="facebook" loading="lazy" width="32px" />
        </a>
        <a href="https://twitter.com/t6tg_" title="twitter">
          <img src="/twitter.svg" alt="twitter" loading="lazy" width="32px" />
        </a>
        <a
          href="https://webring.wonderful.software#YOUR.DOMAIN"
          title="วงแหวนเว็บ"
          className="animate-spin"
        >
          <img
            alt="วงแหวนเว็บ"
            width="32"
            height="32"
            src="https://webring.wonderful.software/webring.black.svg"
          />
        </a>
      </div>
      {nowPlay.is_playing && (
        <div className="mx-3 mt-2">
          <div className="flex bg-green-500 p-4 rounded-md text-white m-2 m-auto">
            <img
              src={nowPlay.item.album.images[1].url}
              alt="song"
              width="100px"
              className="rounded-md"
            />
            <div className="ml-3 text-left my-auto">
              <img
                src="/spotify.png"
                alt="spotify"
                loading="lazy"
                width="100px"
                className="mb-2"
              />
              <a href={nowPlay.context.external_urls.spotify} target="_blank">
                <p className="font-bold">{nowPlay.item.name}</p>
              </a>
              <p>
                <b>Artist : </b>
                {nowPlay.item.artists[0].name}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
