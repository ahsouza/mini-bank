import { InstituicaoRepository } from '../repository/instituicao.repository';

export class InstituicaoService {
  private instituicaoRepository: InstituicaoRepository
  constructor() {
    this.instituicaoRepository = new InstituicaoRepository()
  }
  async getInstituicoes() {
    return await this.instituicaoRepository.getInstituicoes()
  }
  async createInstituicao(banco) {
    return await this.instituicaoRepository.createInstituicao(banco)
  }
  async updateInstituicao(banco) {
    return await this.instituicaoRepository.updateInstituicao(banco)
  }
  async deleteInstituicao(bancoId) {
    return await this.instituicaoRepository.deleteInstituicao(bancoId)
  }
}
