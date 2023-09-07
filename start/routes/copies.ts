import Route from '@ioc:Adonis/Core/Route'
Route.post('/copy', 'Copy/Main.store').middleware('acl:admin,editor')
Route.get('/copy', 'Copy/Main.index').middleware('auth')
Route.get('/copy/:id', 'Copy/Main.show').middleware('auth')
Route.put('/copy/:id', 'Copy/Main.update').middleware('auth')
Route.delete('/copy/:id', 'Copy/Main.destroy').middleware('auth')