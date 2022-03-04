import Image from "next/image";

type TMovieProps = {
  poster_path?: string;
  vote_average?: number;
  title?: string;
};

export const MovieCard = ({
  poster_path,
  title,
  vote_average,
}: TMovieProps): JSX.Element => {
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
          alt={title}
          width="300"
          height="400"
        />
        <figcaption>
          <span className="vote">{vote_average}</span>
        </figcaption>
        <h2 className="title">{title}</h2>
      </figure>
    </>
  );
};
