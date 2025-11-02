import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Party extends BaseModel {
  static table = 'parties'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare dmUserId: number

  @column()
  declare campaignId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
