import * as express from 'express';
import * as cors from 'cors';
import { Request, Response } from 'express';
import * as helmet from 'helmet';
import * as morgan from 'morgan';

import { healthCheck } from './server/routes/healthz';

export const app = express();

app.use(cors({
  origin: [
    process.env.APP_CLIENT_URL
  ]
}));

app.use(helmet());
app.use(morgan('tiny'));

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('hello world');
});

// Docker HEALTHCHECK
app.route('/healthz').get(healthCheck);
