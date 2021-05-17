import { APILogger } from '../logger/api.logger'
import { TransacaoService } from '../services/transacao.service'

export class TransacaoController {
  private transacaoService: TransacaoService
  private logger: APILogger
  constructor() {
    this.transacaoService = new TransacaoService()
    this.logger = new APILogger()
  }

  async getTransacoes() {
    this.logger.info('Controller: getTransacoes', null)
    return await this.transacaoService.getTransacoes()
  }

  async createTransacao(transacao) {
    this.logger.info('Controller: createTransacao', transacao)
    let totalTransacoes = (await this.transacaoService.getTransacoes()).length
    var validoInstituicao = {
      _id: totalTransacoes+1,
      nome: transacao.nome,
      recebedor: transacao.recebedor,
      cpf: transacao.cpf,
      conta_destino: transacao.conta_destino,
      instituicao_destino: transacao.instituicao_destino
    }
    return await this.transacaoService.createTransacao(validoInstituicao)
  }

  async updateTransacao(transacao) {
    this.logger.info('Controller: updateTransacao', transacao)
    return await this.transacaoService.updateTransacao(transacao)
  }

  async deleteTransacao(transacaoId) {
    this.logger.info('Controller: deleteTransacao', transacaoId)
    return await this.transacaoService.deleteTransacao(transacaoId)
  }
}
