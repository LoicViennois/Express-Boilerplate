import { svc } from './service'

svc.on('install', () => {
  console.log('Install complete.')
  console.log('The service exists: ', svc.exists)
  svc.start()
})

svc.install()
