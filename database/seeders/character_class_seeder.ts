import CharacterClass from '#models/character_class'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export enum CharacterClassId {
  FIGHTER = 1,
  CLERIC = 2,
  PALADIN = 3,
  WIZARD = 4,
  ROGUE = 5,
}

export default class extends BaseSeeder {
  async run() {
    await CharacterClass.createMany([
      {
        id: CharacterClassId.FIGHTER,
        name: 'Fighter',
      },
      {
        id: CharacterClassId.CLERIC,
        name: 'Cleric',
      },
      {
        id: CharacterClassId.PALADIN,
        name: 'Paladin',
      },
      {
        id: CharacterClassId.WIZARD,
        name: 'Wizard',
      },
      {
        id: CharacterClassId.ROGUE,
        name: 'Rogue',
      },
    ])
  }
}
