import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Sector from 'App/Models/Sector'
import { StoreValidator, UpdateValidator } from 'App/Validators/Sector'

export default class SectorController {
  public async index({ }: HttpContextContract) {
    const setor = await Sector.all()

    return setor
  }

  public async store({ request, response }: HttpContextContract) {
    const { sector } = await request.validate(StoreValidator)

    const setor = await Sector.create({ sector })

    await setor.save()

    return response.ok({ message: 'Cadastrado com sucesso!' })
  }

  public async show({ }: HttpContextContract) { }

  public async update({ request, params }: HttpContextContract) {
    const { sector } = await request.validate(UpdateValidator)

    const setor = await Sector.findOrFail(params.id)

    setor.merge({ sector }).save()

  }

}
