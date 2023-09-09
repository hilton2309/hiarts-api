import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { categories } from 'App/Utils'



export default class UpdateValidator {
  constructor(protected ctx: HttpContextContract) { }

  public schema = schema.create({
    ativo: schema.boolean.optional(),
    category: schema.enum.optional(categories),
    unitId: schema.number.optional()
  })


  public messages: CustomMessages = {}
}
