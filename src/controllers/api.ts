import { Response, Request } from 'express';

/**
 * GET /api
 * List of API examples.
 */
export const getApi = (req: Request, res: Response) => {
    res.send({this: 'is somehting'});
};
