import { APILogger } from '../logger/api.logger'
import { InstituicaoService } from '../services/instituicao.service'

export class InstituicaoController {
  private instituicaoService: InstituicaoService
  private logger: APILogger
  constructor() {
    this.instituicaoService = new InstituicaoService()
    this.logger = new APILogger()
  }

  async getInstituicoes() {
    this.logger.info('Controller: getInstituicoes', null)
    return await this.instituicaoService.getInstituicoes()
  }

  async createInstituicao(banco) {
    this.logger.info('Controller: createInstituicao', banco)
    let totalInstituicoes = (await this.instituicaoService.getInstituicoes()).length
    var validoInstituicao = {
      _id: totalInstituicoes+1,
      nome: banco.nome,
      codigo: banco.codigo,
      cep: banco.cep,
      logradouro: banco.logradouro,
      estado: banco.estado,
      cidade: banco.cidade,
      bairro: banco.bairro
    }
    return await this.instituicaoService.createInstituicao(validoInstituicao)
  }

  async updateInstituicao(banco) {
    this.logger.info('Controller: updateInstituicao', banco)
    return await this.instituicaoService.updateInstituicao(banco)
  }

  async deleteInstituicao(bancoId) {
    this.logger.info('Controller: deleteInstituicao', bancoId)
    return await this.instituicaoService.deleteInstituicao(bancoId)
  }
}
