import Route from '@ioc:Adonis/Core/Route'

Route.post('/unit', 'Unit/Main.store').middleware('acl:admin')
Route.get('/units', 'Unit/Main.index').middleware('auth')
Route.get('/unit/:id', 'Unit/Main.show').middleware('auth')