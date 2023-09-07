import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import { Copy } from 'App/Models'

export default class Sector extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public sector: string

  @hasMany(() => Copy)
  public copies: HasMany<typeof Copy>
}
