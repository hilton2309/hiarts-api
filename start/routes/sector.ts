import Route from '@ioc:Adonis/Core/Route'
Route.post('/sector', 'Sector/Main.store').middleware('acl:admin')
Route.get('/sector', 'Sector/Main.index').middleware('auth')
Route.put('/sector/:id', 'Sector/Main.update').middleware('acl:admin')
