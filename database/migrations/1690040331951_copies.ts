import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { types } from 'App/Utils/Type'

export default class extends BaseSchema {
  protected tableName = 'copies'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('user_id')
        .unsigned()
        .references('users.id')
        .onUpdate('CASCADE')

      table.integer('unit_id')
        .unsigned()
        .references('units.id')
        .onUpdate('CASCADE')

      table.integer('sector_id')
        .unsigned()
        .references('sectors.id')
        .onUpdate('CASCADE')

      table.integer('amount').unsigned().notNullable()

      table.enu('type', types).notNullable().defaultTo('normal')

      table.text('comment', 'longtext').nullable()

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
