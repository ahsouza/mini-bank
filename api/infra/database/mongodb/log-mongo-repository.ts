  
import { MongoHelper } from '@/infra/database'
import { LogErrorRepository } from '@/data/protocols/database/logs'

export class LogMongoRepository implements LogErrorRepository {
  async logError (stack: string): Promise<void> {
    const errorCollection = await MongoHelper.getCollection('errors')
    await errorCollection.insertOne({
      stack,
      date: new Date()
    })
  }
}