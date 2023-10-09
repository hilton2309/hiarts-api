import Route from '@ioc:Adonis/Core/Route'
import './auth'
import './users'
import './unit'
import './sector'
import './copies'
import './status'

Route.get('/', async () => {
  return { hello: 'world' }
})
