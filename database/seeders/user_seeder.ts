import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export enum UserId {
  PC_1 = 1,
  PC_2 = 2,
}

export default class extends BaseSeeder {
  async run() {
    await User.createMany([
      {
        id: UserId.PC_1,
        username: 'pc1',
        email: 'pc1@test.test',
        password: 'password',
      },
      {
        id: UserId.PC_2,
        username: 'pc2',
        email: 'pc2@test.test',
        password: 'password',
      },
    ])
  }
}
