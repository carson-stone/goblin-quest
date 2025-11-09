import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { CampaignFactory } from '#database/factories/campaign_factory'

export default class extends BaseSeeder {
  async run() {
    await CampaignFactory.createMany(3)
  }
}
