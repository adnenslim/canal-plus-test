export default function createApiHandler(
  handlerWrapper: any,
  handlers: any,
  defaultOptions: any
) {
  return function getApiHandler({ operations, options }: any = {}) {
    const ops = { ...operations, ...handlers };
    const opts = { ...defaultOptions, ...options };

    return function apiHandler(req: any, res: any) {
      return handlerWrapper(req, res, ops, opts);
    };
  };
}
