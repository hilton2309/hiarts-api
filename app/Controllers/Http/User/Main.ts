import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { User } from 'App/Models'
import { StoreValidator, UpdateValidator } from 'App/Validators/User'

export default class UserController {
  public async index({ }: HttpContextContract) {
    const users = await User.query().orderBy('id').preload('units', (query) => {
      query.select('nome')
    })
    return users
  }

  public async store({ request, response }: HttpContextContract) {

    const { name, email, password, unitId, category } = await request.validate(StoreValidator)
    const username = name.split(' ')[0].toLocaleLowerCase() + new Date().getTime()
    const user = await User.create({ name, email, username, password, unitId, category })

    await user.save()
    return response.ok({ message: 'Cadastrado' })
  }

  public async show({ auth }: HttpContextContract) {
    const users = await auth.user!

    await users.load('units', (query) => {
      query.select('nome', 'cidade')
    })

    // return users.units mostra apenas a unidade

    return users.serialize({
      fields: {
        omit: ['created_at', 'updated_at', 'rememberMeToken']
      }
    })
  }

  public async update({ request, auth, response }: HttpContextContract) {

    const data = await request.validate(UpdateValidator)
    const user = auth.user!
    user.merge(data)

    await user.save()
    return response.ok({ message: 'Atualizado' })
  }

  public async destroy({ }: HttpContextContract) { }
}
