import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreValidator {
  constructor(protected ctx: HttpContextContract) { }


  public schema = schema.create({
    nome: schema.string({ trim: true }),
    uf: schema.string({ trim: true }),
    cidade: schema.string({ trim: true }),
  })


  public messages: CustomMessages = {}
}
