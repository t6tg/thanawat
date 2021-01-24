import React from "react";

const Card = ({ data }) => {
  return (
    <div className="bg-gray-100 rounded-md">
      {data.cover_image && (
        <img
          src={data.cover_image}
          alt={data.id}
          className="rounded-tl-md rounded-tr-md"
        />
      )}
      <div className="p-2">
        <a href={data.url} target="_blank">
          <h3 className="font-bold text-lg">{data.title}</h3>
        </a>
        <span className="font-light text-xs">{data.description}</span>
        <div className="flex items-center mt-2">
          <img
            src={data.user.profile_image_90}
            alt={data.user.name}
            width="40px"
            className="rounded-full"
          />
          <div className="ml-2">
            <p className="text-sm font-bold">{data.user.name}</p>
            <p className="text-xs font-light">@{data.user.twitter_username}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
