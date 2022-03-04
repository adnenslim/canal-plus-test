import type { NextApiRequest, NextApiResponse } from "next";
type TNextApi = {
  req: NextApiRequest;
  res: NextApiResponse;
};

const getSearch = async ({ req, res }: TNextApi) => {
  const { search } = req?.query;
  const [moviesResults, tvSowsResults] = await Promise.all([
    fetch(
      `${process.env.TMDB_HOST}/search/movie?query=${search}&api_key=${process.env.TMDB_API_KEY}`
    ).then((res) => res.json()),
    fetch(
      `${process.env.TMDB_HOST}/search/tv?query=${search}&api_key=${process.env.TMDB_API_KEY}`
    ).then((res) => res.json()),
  ]);

  res.status(200).json({
    data: [...moviesResults?.results, ...tvSowsResults?.results] || [],
  });
};

export default getSearch;
