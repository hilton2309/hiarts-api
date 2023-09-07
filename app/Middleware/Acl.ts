import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Acl {
  public async handle({ auth, response }: HttpContextContract, next: () => Promise<void>, allowedCategory: string) {

    const user = await auth.authenticate()

    if (!allowedCategory.includes(user.category)) {
      return response.unauthorized({ error: { message: 'Acesso negado' } })
    }

    await next()
  }
}
