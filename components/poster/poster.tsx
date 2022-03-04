import React from "react";
import Image from "next/image";

type TPoster = {
  poster: string;
  title: string;
};

export default function Poster({ poster, title }: TPoster) {
  return (
    <div className="movie__figure" style={{ flex: 1 }}>
      <Image
        src={
          poster
            ? `https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster}`
            : "/empty-image.png"
        }
        className="poster"
        alt={title}
        width="600"
        height="900"
      />
    </div>
  );
}
