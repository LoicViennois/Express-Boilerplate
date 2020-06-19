import { app } from './app'

app.set('port', process.env.EXPRESS_PORT || 3000)
app.set('interface', process.env.EXPRESS_INTERFACE || 'localhost')

const server = app.listen(app.get('port'), app.get('interface'), () => {
  console.log(`express app listening on port ${app.get('port')} via interface ${app.get('interface')}`)
})

process.on('SIGINT', shutdownServer)

process.on('SIGTERM', shutdownServer)

function shutdownServer () {
  console.info('shutting down...')
  server.close((err) => {
    if (err) {
      console.error(err)
      process.exitCode = 1
    } else {
      console.info('bye')
    }
    process.exit()
  })
}
