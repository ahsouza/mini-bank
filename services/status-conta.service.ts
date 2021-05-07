import { StatusContaRepository } from '../repository/status-conta.repository';

export class StatusContaService {
  private statusContaRepository: StatusContaRepository
  constructor() {
    this.statusContaRepository = new StatusContaRepository()
  }
  async getStatusConta() {
    return await this.statusContaRepository.getStatusConta()
  }
  async createStatusConta(status) {
    return await this.statusContaRepository.createStatusConta(status)
  }
  async updateStatusConta(status) {
    return await this.statusContaRepository.updateStatusConta(status)
  }
  async deleteStatusConta(statusId) {
    return await this.statusContaRepository.deleteStatusConta(statusId)
  }
}
