import * as fs from 'fs'
import { Service } from 'node-linux'

const packageConfig = JSON.parse(fs.readFileSync('package.json', 'utf8'))

export const svc = new Service({
  name: packageConfig.name,
  description: packageConfig.description,
  script: 'src/server.ts',
  nodeOptions: '-r dotenv/config -r ts-node/register',
  user: packageConfig.name,
  group: packageConfig.name
})
