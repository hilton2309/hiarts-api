import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'sectors'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('sector').notNullable().unique()

    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
