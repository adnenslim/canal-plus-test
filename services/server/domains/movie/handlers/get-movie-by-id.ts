import type { NextApiRequest, NextApiResponse } from "next";
type TNextApi = {
  req: NextApiRequest;
  res: NextApiResponse;
};
const getMovie = async ({ req, res }: TNextApi) => {
  const { id } = req?.query;
  const [details, credits] = await Promise.all([
    fetch(
      `${process.env.TMDB_HOST}/movie/${id}?api_key=${process.env.TMDB_API_KEY}`
    ).then((res) => res.json()),
    fetch(
      `${process.env.TMDB_HOST}/movie/${id}/credits?api_key=${process.env.TMDB_API_KEY}`
    ).then((res) => res.json()),
  ])
  res.status(200).json({
    data: {...details, ...credits} || {},
  });
};

export default getMovie;


