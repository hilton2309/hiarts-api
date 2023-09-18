import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run() {
    await User.create({
      name: 'Hilton Alves',
      username: 'hilton',
      email: 'hilton_as@hotmail.com',
      unitId: 1,
      password: '2309',
      category: 'admin'
    })
  }
}
