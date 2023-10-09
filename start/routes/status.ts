import Route from '@ioc:Adonis/Core/Route'

Route.get('/status', async () => ({ status: ` API is running at: ${new Date().toLocaleString()}` }))
