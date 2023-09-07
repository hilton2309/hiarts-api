import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { Copy } from 'App/Models'
import { StoreValidator, UpdateValidator } from 'App/Validators/Copy'

export default class CopyController {
  public async index({ auth }: HttpContextContract) {
    const user = auth.user!
    const copies = await Copy.query().where('unitId', user.unitId).preload('sectors', (query) => {
      query.select('sector')
    })
    return copies

  }

  public async store({ request, auth }: HttpContextContract) {

    const user = auth.user!

    const { sectorId, amount, comment, type } = await request.validate(StoreValidator)
    // const data = await request.validate(StoreValidator)
    // const copy = await auth.user!.related('copies').create(data)
    // console.log(copy.unitId)
    const copy = await Copy.create({ sectorId, amount, comment, type, unitId: user.unitId, userId: user.id })

    await copy.save()

  }

  public async show({ params, auth }: HttpContextContract) {

    const user = auth.user!

    const copies = await Copy.query().where('sectorId', params.id).andWhere('unitId', user.unitId)

    return copies
  }

  public async update({ request, params, auth, response }: HttpContextContract) {

    const data = await request.validate(UpdateValidator)
    const copy = await Copy.findOrFail(params.id)

    if (auth.user!.id !== copy.userId) {
      return response.unauthorized({ error: { message: 'Acesso negado!' } })
    }

    copy.merge(data)

    await copy.save()

    return copy

  }

  public async destroy({ params, auth, response }: HttpContextContract) {
    const copy = await Copy.findOrFail(params.id)

    if (auth.user!.id !== copy.userId) {
      return response.unauthorized({ error: { message: 'Acesso negado!' } })
    }

    await copy.delete()
  }
}
