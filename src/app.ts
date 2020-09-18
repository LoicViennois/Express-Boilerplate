import { Request, Response } from 'express'
import * as express from 'express'
import * as helmet from 'helmet'
import * as morgan from 'morgan'

import { healthCheck } from './server/routes/healthz'

export const app = express()

// TODO: implement CORS

app.use(helmet())
app.use(morgan('tiny'))

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('hello world')
})

// Docker HEALTHCHECK
app.route('/healthz').get(healthCheck)
