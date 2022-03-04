import Image from "next/image";
import React from "react";

type TActor = {
  credit_id: string;
  profile_path: string;
  name: string;
  gender: number;
  popularity: number;
};

type TCast = {
  cast: TActor[];
};

type TAvatar = {
  actor: TActor;
};

export const Avatar = ({ actor }: TAvatar): JSX.Element => {
  return (
    <>
      <figure className="igure">
        <Image
          src={
            actor.profile_path
              ? `https://image.tmdb.org/t/p/w300_and_h450_bestv2${actor.profile_path}`
              : actor.gender !== 1
              ? "/gender-1.jpg"
              : "/gender-2.jpg"
          }
          className="poster"
          alt={actor.name}
          width="200"
          height="300"
        />
        <h2 className="title">{actor.name}</h2>
      </figure>
    </>
  );
};

export default function ListOfCast({ cast }: TCast) {
  return (
    <>
      <div>
        <h3>Cast</h3>
      </div>
      <div className="list avatar__list">
        {cast?.map((actor: TActor) => (
          <Avatar key={actor.credit_id} actor={actor} />
        ))}
      </div>
    </>
  );
}
