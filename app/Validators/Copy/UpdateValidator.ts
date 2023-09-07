import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import { types } from 'App/Utils/Type'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateValidator {
  constructor(protected ctx: HttpContextContract) { }

  public schema = schema.create({
    sectorId: schema.number.optional([rules.exists({ table: 'sectors', column: 'id' })]),
    amount: schema.number.optional(),
    type: schema.enum.optional(types),
    comment: schema.string.optional({ trim: true })
  })

  public messages: CustomMessages = {}
}
