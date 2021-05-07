import { APILogger } from '../logger/api.logger'
import { ContaService } from '../services/conta.service'

export class ContaController {
  private contaService: ContaService
  private logger: APILogger
  constructor() {
    this.contaService = new ContaService()
    this.logger = new APILogger()
  }

  async getContas() {
    this.logger.info('Controller: getContas', null)
    return await this.contaService.getContas()
  }

  async createConta(conta) {
    this.logger.info('Controller: createCliente', conta)
    let totalContas = (await this.contaService.getContas()).length
    var validoConta = {
      _id: totalContas+1,
      numero: conta.nome,
      status: conta.status,
      tipo: conta.tipo,
      cliente_id: conta.cliente_id,
      saldo_atual: conta.saldo_atual,
      instituicao: conta.instituicao,
    }
    return await this.contaService.createConta(validoConta)
  }

  async updateConta(conta) {
    this.logger.info('Controller: updateConta', conta)
    return await this.contaService.updateConta(conta)
  }

  async deleteConta(contaId) {
    this.logger.info('Controller: deleteConta', contaId)
    return await this.contaService.deleteConta(contaId)
  }
}
