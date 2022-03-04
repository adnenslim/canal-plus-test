import getSearch from "./handlers/search";
import type { NextApiRequest, NextApiResponse } from "next";

import createApiHandler from "@/services/server/utils/create-api-handler";
import isAllowedMethod from "@/services/server/utils/is-allowed-method";

const METHODS = ["GET"];

const searchWrapper = async (
  req: NextApiRequest,
  res: NextApiResponse,
  handlers: any
) => {
  if (!isAllowedMethod(req, res, METHODS)) return;
  try {
    if (req.method === "GET") {
      return await handlers.getSearch({ req, res });
    }
  } catch (error) {
    res.status(500).json({ data: null, errors: [{ message: "error" }] });
  }
};

export const handlers = {
  getSearch,
};

export default createApiHandler(searchWrapper, handlers, {});
