import { DateTime } from 'luxon'
import factory from '@adonisjs/lucid/factories'
import Campaign from '#models/campaign'

export const CampaignFactory = factory
  .define(Campaign, async ({ faker }) => {
    return {
      name: faker.lorem.words({ min: 3, max: 10 }),
      description: faker.lorem.paragraph({ min: 1, max: 3 }),
      createdAt: DateTime.fromJSDate(faker.date.recent()),
    }
  })
  .build()
