import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import { User, Unit, Sector } from 'App/Models'

export default class Copy extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number

  @column()
  public unitId: number

  @column()
  public sectorId: number

  @column()
  public amount: number

  @column()
  public type: string

  @column()
  public comment: string

  @column.dateTime({
    autoCreate: true, serialize: (value: DateTime) => {
      return value.toFormat('yyyy-MM-dd')
    }
  })
  public createdAt: DateTime

  @column.dateTime({
    autoCreate: true, autoUpdate: true, serialize: (value: DateTime) => {
      return value.toFormat('dd-MM-yyyy')
    }
  })
  public updatedAt: DateTime

  @belongsTo(() => User)
  public copies: BelongsTo<typeof User>

  @belongsTo(() => Unit)
  public units: BelongsTo<typeof Unit>

  @belongsTo(() => Sector)
  public sectors: BelongsTo<typeof Sector>

}
