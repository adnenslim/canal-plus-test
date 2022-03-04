import { useRouter } from "next/router";
import useGetTvShow from "@/services/client/tv-show/use-get-tv-show";
import ListOfCast from "@/components/list-of-cast/list-of-cast";
import Poster from "@/components/poster/poster";
import DetailsInfos from "@/components/details-infos/details-infos";

export default function TvShow() {
  const router = useRouter();
  const tvShowId = router?.query?.id
  const { data, error } = useGetTvShow(tvShowId);

  if (error) return <h2>An error has occurred.</h2>;
  if (!error && !data?.data) return <h2>Loading...</h2>;
  return (
    <div className="details__wrapper">
      <div className="details__head">
        <Poster poster={data?.data?.poster_path} title={data?.data?.title} />
        <DetailsInfos
          title={data?.data?.original_name}
          genres={data?.data?.genres}
          overview={data?.data?.overview}
          startDate={data?.data?.first_air_date}
        />
      </div>
      <ListOfCast cast={data?.data?.cast} />
    </div>
  );
}
