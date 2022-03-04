import Link from "next/link";
import useGetSearch from "@/services/client/search/search";
import { MovieCard } from "../movie-card/movie-card";
import { TvShowCard } from "../show-card/show-card";

type TSearchListProps = {
  search: string | string[] | undefined;
};

type TMovie = {
  id: number;
  poster_path?: string;
  vote_average?: number;
  title?: string;
};

type TTvShowCard = {
  id: number;
  poster_path?: string;
  original_name?: string;
  vote_average?: number;
};

type TMovieUnionShow = TMovie | TTvShowCard;

export default function SearchList({ search }: TSearchListProps): JSX.Element {
  const { data, error } = useGetSearch({ search });

  if (!error && !data?.data) return <h2>Loading...</h2>;
  if (error) return <h2>An error has occurred.</h2>;

  return (
    <div className="list search__list">
      {data?.data?.length > 0 ? (
        data?.data?.map((item: TMovieUnionShow) => (
          <div key={item.id}>
            {
              <Link
                href={
                  "title" in item ? `/movie/${item.id}` : `/tv-show/${item.id}`
                }
                passHref
              >
                <a>
                  {"title" in item ? (
                    <MovieCard {...item} />
                  ) : (
                    <TvShowCard {...item} />
                  )}
                </a>
              </Link>
            }
          </div>
        ))
      ) : (
        <h2>No results found</h2>
      )}
    </div>
  );
}
