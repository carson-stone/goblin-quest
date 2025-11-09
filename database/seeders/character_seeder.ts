import Character from '#models/character'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { CharacterClassId } from '#database/seeders/character_class_seeder'
import { UserId } from '#database/seeders/user_seeder'

export default class extends BaseSeeder {
  private createName(characterClass: string): string {
    return `${characterClass} Char`
  }

  async run() {
    await Character.createMany([
      {
        userId: UserId.PC_1,
        characterClassId: CharacterClassId.FIGHTER,
        name: this.createName('Fighter'),
      },
      {
        userId: UserId.PC_2,
        characterClassId: CharacterClassId.PALADIN,
        name: this.createName('Paladin'),
      },
    ])
  }
}
