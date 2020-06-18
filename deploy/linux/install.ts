import * as fs from 'fs'
import * as shell from 'shelljs'

import { svc } from './service'

const packageConfig = JSON.parse(fs.readFileSync('package.json', 'utf8'))

shell.exec(`sudo adduser --system --gecos "${packageConfig.description}" --disabled-login --group --no-create-home ${packageConfig.name}`)

svc.on('install', () => {
  console.log('Install complete.')
  console.log('The service exists: ', svc.exists)
  svc.start()
})

svc.install()
