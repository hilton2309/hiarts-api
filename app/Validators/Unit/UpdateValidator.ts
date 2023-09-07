import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreValidator {
  constructor(protected ctx: HttpContextContract) { }


  public schema = schema.create({
    nome: schema.string.optional({ trim: true }),
    uf: schema.string.optional({ trim: true }),
    cidade: schema.string.optional({ trim: true }),
  })


  public messages: CustomMessages = {}
}
