import { Request, RequestHandler, Response } from 'express';

export const hello: RequestHandler = (req: Request, res: Response) => {
  res.send('hello world');
};
