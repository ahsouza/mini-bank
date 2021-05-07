import { APILogger } from '../logger/api.logger'
import { TipoTransacaoService } from '../services/tipo-transacao.service'

export class TipoTransacaoController {
  private tipoTransacaoService: TipoTransacaoService
  private logger: APILogger
  constructor() {
    this.tipoTransacaoService = new TipoTransacaoService()
    this.logger = new APILogger()
  }

  async getTiposTransacao() {
    this.logger.info('Controller: getTiposTransacao', null)
    return await this.tipoTransacaoService.getTiposTransacao()
  }

  async createTipoTransacao(tipoTransacao) {
    this.logger.info('Controller: createTipoTransacao', tipoTransacao)
    return await this.tipoTransacaoService.createTipoTransacao(tipoTransacao)
  }

  async updateTipoTransacao(tipoTransacao) {
    this.logger.info('Controller: updateTipoTransacao', tipoTransacao)
    return await this.tipoTransacaoService.updateTipoTransacao(tipoTransacao)
  }

  async deleteTipoTransacao(tipoId) {
    this.logger.info('Controller: deleteTipoTransacao', tipoId)
    return await this.tipoTransacaoService.deleteTipoTransacao(tipoId)
  }
}
