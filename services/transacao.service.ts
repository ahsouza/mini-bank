import { TransacaoRepository } from '../repository/transacao.repository'

export class TransacaoService {
  private transacaoRepository: TransacaoRepository
  constructor() {
    this.transacaoRepository = new TransacaoRepository()
  }
  async getTransacoes() {
    return await this.transacaoRepository.getTransacoes()
  }
  async createTransacao(transacao) {
    return await this.transacaoRepository.createTransacao(transacao)
  }
  async updateTransacao(transacao) {
    return await this.transacaoRepository.updateTransacao(transacao)
  }
  async deleteTransacao(transacaoId) {
    return await this.transacaoRepository.deleteTransacao(transacaoId)
  }
}
