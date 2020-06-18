import { app } from './app'


app.set('port', process.env.EXPRESS_PORT || 3000)
app.set('interface', process.env.EXPRESS_INTERFACE || '127.0.0.1')

app.listen(app.get('port'), app.get('interface'), () => {
  console.log(`express app listening on port ${app.get('port')} via interface ${app.get('interface')}`)
})
