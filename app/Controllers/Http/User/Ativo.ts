import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { User } from 'App/Models'
import { UpdateValidator } from 'App/Validators/User/Ativo'

export default class AtivoController {


    public async update({ request, params, response }: HttpContextContract) {
        const data = await request.validate(UpdateValidator)
        const user = await User.findOrFail(params.id)
        user.merge(data)

        await user.save()
        return response.ok({ message: 'Atualizado' })
    }

    public async destroy({ }: HttpContextContract) { }
}
