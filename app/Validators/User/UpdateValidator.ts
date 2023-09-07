import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { categories } from 'App/Utils'

export default class UpdateValidator {
  constructor(protected ctx: HttpContextContract) { }

  public schema = schema.create({
    username: schema.string.optional({ trim: true }),
    name: schema.string.optional({ trim: true }),
    password: schema.string.optional({ trim: true }, [rules.confirmed('passwordConfirmation')]),
    unitId: schema.number.optional([rules.exists({ table: 'units', column: 'id' })]),
    category: schema.enum.optional(categories)
  })


  public messages: CustomMessages = {}
}
