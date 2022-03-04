import getMovieById from "./handlers/get-movie-by-id";
import type { NextApiRequest, NextApiResponse } from "next";
import createApiHandler from "@/services/server/utils/create-api-handler";
import isAllowedMethod from "@/services/server/utils/is-allowed-method";

const METHODS = ["GET"];

const showWrapper = async (
  req: NextApiRequest,
  res: NextApiResponse,
  handlers: any
) => {
  if (!isAllowedMethod(req, res, METHODS)) return;
  try {
    if (req.method === "GET") {
      return await handlers.getMovieById({ req, res });
    }
  } catch (error) {
    res.status(500).json({ data: null, errors: [{ message: "error" }] });
  }
};

export const handlers = {
  getMovieById,
};

export default createApiHandler(showWrapper, handlers, {});
