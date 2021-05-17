import { connect, disconnect } from '../config/db.config'
import { StatusContaModel } from '../models/status-conta.model'
import { APILogger } from '../logger/api.logger'

export class StatusContaRepository {
  private logger: APILogger
  constructor() {
    connect()
    this.logger = new APILogger()
  }
  async getStatusConta() {
    const status_conta = await StatusContaModel.find({})
    console.log('status-conta:::', status_conta)
    return status_conta
  }
  async createStatusConta(status) {
    let data = {}
    try {
      data = await StatusContaModel.create(status)
    } catch(err) {
      this.logger.error('Error::' + err)
    }
    return data
  }
  async updateStatusConta(status) {
    let data = {}
    try {
      data = await StatusContaModel.updateOne(status)
    } catch(err) {
      this.logger.error('Error::' + err)
    }
    return data
  }
  async deleteStatusConta(statusId) {
    let data: any = {}
    try {
      data = await StatusContaModel.deleteOne({_id : statusId})
    } catch(err) {
      this.logger.error('Error::' + err)
    }
    return {status: `${data.deletedCount > 0 ? true : false}`}
  }
}
