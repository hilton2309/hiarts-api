import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreValidator {
  constructor(protected ctx: HttpContextContract) { }

  public schema = schema.create({
    sector: schema.string({ trim: true }, [rules.unique({ table: 'sectors', column: 'sector' })])
  })


  public messages: CustomMessages = {}
}
