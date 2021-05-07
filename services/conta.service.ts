import { ContaRepository } from '../repository/conta.repository';

export class ContaService {
  private contaRepository: ContaRepository
  constructor() {
    this.contaRepository = new ContaRepository()
  }
  async getContas() {
    return await this.contaRepository.getContas()
  }
  async createConta(conta) {
    return await this.contaRepository.createConta(conta)
  }
  async updateConta(conta) {
    return await this.contaRepository.updateConta(conta)
  }
  async deleteConta(contaId) {
    return await this.contaRepository.deleteConta(contaId)
  }
}
