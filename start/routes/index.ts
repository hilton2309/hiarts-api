import Route from '@ioc:Adonis/Core/Route'
import './auth'
import './users'
import './unit'
import './sector'
import './copies'

Route.get('/', async () => {
  return { hello: 'world' }
})
