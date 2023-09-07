import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel, belongsTo, BelongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import { Unit, Copy } from 'App/Models'
import { Category } from 'App/Utils'

export default class User extends BaseModel {

  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public username: string

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public category: Category

  @column()
  public unitId: number

  @column()
  public ativo: boolean

  @column({ serializeAs: null })
  public rememberMeToken: string | null

  @column.dateTime({
    autoCreate: true, serialize: (value: DateTime) => {
      return value.toFormat('dd/MM/yyyy')
    }
  })
  public createdAt: DateTime

  @column.dateTime({
    autoCreate: true, autoUpdate: true, serialize: (value: DateTime) => {
      return value.toFormat('dd/MM/yyyy')
    }
  })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }

  @belongsTo(() => Unit)
  public units: BelongsTo<typeof Unit>

  @hasMany(() => Copy)
  public copies: HasMany<typeof Copy>

}


  // @column.dateTime({
  //   autoCreate: true, serialize: (value: DateTime) => {
  //     return value.toFormat('dd/MM/yyyy HH:mm:ss')
  //   }
  // })
  // public createdAt: DateTime