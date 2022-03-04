import useSWR from "swr";
import { fetcher } from "../utils";
import { TSearch } from "@/lib/types";

export default function useGetSearch({ search }: TSearch) {
  const results = useSWR(`/api/get-movie-show?search=${search}`, fetcher, {
    revalidateOnFocus: false,
  });
  
  return results;
}
