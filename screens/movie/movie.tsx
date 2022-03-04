import useGetMovie from "../../services/client/movie/use-get-movie";
import { useRouter } from "next/router";
import ListOfCast from "@/components/list-of-cast/list-of-cast";
import Poster from "@/components/poster/poster";
import DetailsInfos from "@/components/details-infos/details-infos";

export default function Movie() {
  const router = useRouter();
  const movieId = router?.query?.id;
  const { data, error } = useGetMovie(movieId);

  if (error) return <h2>An error has occurred.</h2>;
  if (!error && !data?.data) return <h2>Loading...</h2>;
  return (
    <div className="details__wrapper">
      <div className="details__head">
        <Poster poster={data?.data?.poster_path} title={data?.data?.title} />
        <DetailsInfos
          title={data?.data?.title}
          genres={data?.data?.genres}
          overview={data?.data?.overview}
          startDate={data?.data?.release_date}
        />
      </div>
      <ListOfCast cast={data?.data?.cast} />
    </div>
  );
}
