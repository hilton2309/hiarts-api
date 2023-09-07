import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import { User, Copy } from 'App/Models'

export default class Unit extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public uf: string

  @column()
  public cidade: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => User)
  public user: HasMany<typeof User>

  @hasMany(() => Copy)
  public copies: HasMany<typeof Copy>

}