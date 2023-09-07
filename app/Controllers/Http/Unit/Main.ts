import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { Unit } from 'App/Models'
import { StoreValidator, UpdateValidator } from 'App/Validators/Unit'

export default class UnitController {
  public async index({ }: HttpContextContract) {
    const unit = Unit.query().orderBy('id').preload('user', (query) => {
      query.select('name')
    })

    return unit
  }

  public async store({ request, response }: HttpContextContract) {

    const { nome, uf, cidade } = await request.validate(StoreValidator)
    const unit = await Unit.create({ nome, uf, cidade })

    await unit.save()
    return response.ok('Cadastrado com sucesso')
  }

  public async show({ params, response }: HttpContextContract) {
    const unit = await Unit.findBy('id', params.id)

    // if (!unit) {
    //   return response.notFound({ error: { message: 'not found' } })
    // }

    if (!unit) {
      return response.status(422).send({
        error: { message: 'Parâmetro de unidade ausente' }
      })
    }

    await unit!.load('user', (query) => {
      query.select('name', 'category')
    })

    return unit
    // return unit.serialize({ fields: { pick: ['name', 'category'] } })
  }

  public async update({ params, request }: HttpContextContract) {
    const data = await request.validate(UpdateValidator)

    const unit = await Unit.findOrFail(params.id)

    unit.merge(data).save()
  }

  public async destroy({ }: HttpContextContract) { }
}
