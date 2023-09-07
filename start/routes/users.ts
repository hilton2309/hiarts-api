import Route from '@ioc:Adonis/Core/Route'

Route.post('/users', 'User/Main.store').middleware('acl:admin')
Route.put('/users', 'User/Main.update').middleware('auth')
Route.get('/users', 'User/Main.index').middleware('auth')
Route.get('/user', 'User/Main.show').middleware('auth')

Route.put('/users/:id', 'User/Ativo.update')

