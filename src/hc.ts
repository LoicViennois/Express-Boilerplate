import * as http from 'http'

const options = {
  timeout: 2000,
  host: process.env.EXPRESS_INTERFACE || 'localhost',
  port: process.env.EXPRESS_PORT || 3000,
  path: '/healthz'
}

const request = http.request(options, (res) => {
  console.log('STATUS: ' + res.statusCode)
  process.exitCode = (res.statusCode === 200) ? 0 : 1
  process.exit()
})

request.on('error', (err) => {
  console.error('ERROR', err)
  process.exit(1)
})

request.end()
