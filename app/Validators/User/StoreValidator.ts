import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { categories } from 'App/Utils'

export default class StoreValidator {
  constructor(protected ctx: HttpContextContract) { }

  public schema = schema.create({
    name: schema.string({ trim: true }),
    email: schema.string({ trim: true }, [rules.email(), rules.unique({ table: 'users', column: 'email' })]),
    password: schema.string({ trim: true }, [rules.confirmed('passwordConfirmation')]),
    unitId: schema.number([rules.exists({ table: 'units', column: 'id' })]),
    category: schema.enum.optional(categories)
  })

  public messages: CustomMessages = {}
}
