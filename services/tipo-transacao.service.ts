import { TipoTransacaoRepository } from '../repository/tipo-transacao.repository';

export class TipoTransacaoService {
  private tipoTransacaoRepository: TipoTransacaoRepository
  constructor() {
    this.tipoTransacaoRepository = new TipoTransacaoRepository()
  }
  async getTiposTransacao() {
    return await this.tipoTransacaoRepository.getTiposTransacao()
  }
  async createTipoTransacao(tipoTransacao) {
    return await this.tipoTransacaoRepository.createTipoTransacao(tipoTransacao)
  }
  async updateTipoTransacao(tipoTransacao) {
    return await this.tipoTransacaoRepository.updateTipoTransacao(tipoTransacao)
  }
  async deleteTipoTransacao(tipoId) {
    return await this.tipoTransacaoRepository.deleteTipoTransacao(tipoId)
  }
}
