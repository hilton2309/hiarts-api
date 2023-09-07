import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateValidator {
  constructor(protected ctx: HttpContextContract) { }


  public schema = schema.create({
    sector: schema.string.optional({ trim: true }, [rules.unique({ table: 'sectors', column: 'sector' })])
  })

  public messages: CustomMessages = {}
}
