import { TipoContaRepository } from '../repository/tipo-conta.repository';

export class TipoContaService {
  private tipoContaRepository: TipoContaRepository
  constructor() {
    this.tipoContaRepository = new TipoContaRepository()
  }
  async getTiposConta() {
    return await this.tipoContaRepository.getTiposConta()
  }
  async createTipoConta(tipoConta) {
    return await this.tipoContaRepository.createTipoConta(tipoConta)
  }
  async updateTipoConta(tipoConta) {
    return await this.tipoContaRepository.updateTipoConta(tipoConta)
  }
  async deleteTipoConta(tipoId) {
    return await this.tipoContaRepository.deleteTipoConta(tipoId)
  }
}
