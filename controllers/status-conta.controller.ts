import { APILogger } from '../logger/api.logger'
import { StatusContaService } from '../services/status-conta.service'

export class StatusContaController {
  private statusContaService: StatusContaService
  private logger: APILogger
  constructor() {
    this.statusContaService = new StatusContaService()
    this.logger = new APILogger()
  }
  async getStatusConta() {
    this.logger.info('Controller: getStatusConta', null)
    return await this.statusContaService.getStatusConta()
  }
  async createStatusConta(status) {
    this.logger.info('Controller: createStatusConta', status)
    return await this.statusContaService.createStatusConta(status)
  }
  async updateStatusConta(status) {
    this.logger.info('Controller: updateStatusConta', status)
    return await this.statusContaService.updateStatusConta(status)
  }
  async deleteStatusConta(statusId) {
    this.logger.info('Controller: deleteStatusConta', statusId)
    return await this.statusContaService.deleteStatusConta(statusId)
  }
}
