import { Request, Response } from 'express'
import * as express from 'express'
import * as helmet from 'helmet'
import * as morgan from 'morgan'

export const app = express()

app.use(helmet())
app.use(morgan('tiny'))

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('hello')
})
