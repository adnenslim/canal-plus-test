import useSWR from "swr";
import { fetcher } from "../utils";
export default function useGetMovie(id: string | string[] | undefined) {
  const results: any = useSWR(`/api/movie/${id}`, fetcher, {
    revalidateOnFocus: false,
  });

  return results;
}
