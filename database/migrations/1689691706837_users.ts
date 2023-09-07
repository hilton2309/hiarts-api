import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { categories } from 'App/Utils'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name').notNullable
      table.string('username').notNullable().unique()
      table.string('email', 255).notNullable().unique()
      table.string('password', 180).notNullable()
      table.integer('unit_id').unsigned()
      table.enu('category', categories).notNullable().defaultTo('normal')
      table.boolean('ativo').defaultTo(true)
      table.string('remember_me_token').nullable()
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
