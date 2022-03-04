import Image from "next/image";

type TTvShowCardProps = {
  poster_path?: string;
  original_name?: string;
  vote_average?: number;
};

export const TvShowCard = ({
  poster_path,
  original_name,
  vote_average,
}: TTvShowCardProps): JSX.Element => {
  return (
    <>
      <figure className="figure">
        <Image
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`
              : "/empty-image.png"
          }
          className="poster"
          alt={original_name}
          width="300"
          height="400"
        />
        <figcaption>
          <span className="vote">{vote_average}</span>
        </figcaption>
        <h2 className="title">{original_name}</h2>
      </figure>
    </>
  );
};
