import useSWR from "swr";
import { fetcher } from "../utils";

export default function useGetTvShow(id: string | string[] | undefined) {
  const results = useSWR(`/api/tv-show/${id}`, fetcher, {
    revalidateOnFocus: false,
  });

  return results;
}
