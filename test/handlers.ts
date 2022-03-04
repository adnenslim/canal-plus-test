import { rest } from "msw";

export const handlers = [
  rest.get("https://api.themoviedb.org/3/search/tv:search", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          title: "home alone",
          vote_average: 10,
          poster_path: "askjfskafhkas.png",
        },
      ])
    );
  }),
];
