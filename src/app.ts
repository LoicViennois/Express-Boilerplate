import * as express from 'express';
import * as cors from 'cors';
import * as helmet from 'helmet';
import * as morgan from 'morgan';

import { hello } from './server/routes/hello';

export const app = express();

app.use(cors({
  origin: [
    process.env.APP_CLIENT_URL
  ]
}));

app.use(helmet());
app.use(morgan('tiny'));

app.route('/hello').get(hello);
