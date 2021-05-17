import { APILogger } from '../logger/api.logger'
import { TipoContaService } from '../services/tipo-conta.service'

export class TipoContaController {
  private tipoContaService: TipoContaService
  private logger: APILogger
  constructor() {
    this.tipoContaService = new TipoContaService()
    this.logger = new APILogger()
  }

  async getTiposConta() {
    this.logger.info('Controller: getTiposConta', null)
    return await this.tipoContaService.getTiposConta()
  }

  async createTipoConta(tipoConta) {
    this.logger.info('Controller: createTipoConta', tipoConta)
    return await this.tipoContaService.createTipoConta(tipoConta)
  }

  async updateTipoConta(tipoConta) {
    this.logger.info('Controller: updateTipoConta', tipoConta)
    return await this.tipoContaService.updateTipoConta(tipoConta)
  }

  async deleteTipoConta(tipoId) {
    this.logger.info('Controller: deleteTipoConta', tipoId)
    return await this.tipoContaService.deleteTipoConta(tipoId)
  }
}
