import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { types } from 'App/Utils/Type'

export default class StoreValidator {
  constructor(protected ctx: HttpContextContract) { }

  public schema = schema.create({
    sectorId: schema.number([rules.exists({ table: 'sectors', column: 'id' })]),
    amount: schema.number(),
    type: schema.enum(types),
    comment: schema.string.optional({ trim: true }),
  })


  public messages: CustomMessages = {}
}
