import { APILogger } from '../logger/api.logger'
import { ClienteService } from '../services/cliente.service'

export class ClienteController {
  private clienteService: ClienteService
  private logger: APILogger
  constructor() {
    this.clienteService = new ClienteService()
    this.logger = new APILogger()
  }

  async getClientes() {
    this.logger.info('Controller: getClientes', null)
    return await this.clienteService.getClientes()
  }

  async getCliente(clienteId){
    this.logger.info('Controller: getCliente', clienteId)
    return await this.clienteService.getCliente(clienteId)
  }

  async createCliente(cliente) {
    this.logger.info('Controller: createCliente', cliente)
    let totalCliente = (await this.clienteService.getClientes()).length
    var validoCliente = {
      _id: totalCliente+1,
      nome: cliente.nome,
      cpf: cliente.cpf,
      telefone: cliente.telefone,
      email: cliente.email,
      cep: cliente.cep,
      logradouro: cliente.logradouro,
      estado: cliente.estado,
      cidade: cliente.cidade,
      bairro: cliente.bairro
    }
    return await this.clienteService.createCliente(validoCliente)
  }

  async updateCliente(cliente) {
    this.logger.info('Controller: updateCliente', cliente)
    return await this.clienteService.updateCliente(cliente)
  }

  async deleteCliente(clienteId) {
    this.logger.info('Controller: deleteCliente', clienteId)
    return await this.clienteService.deleteCliente(clienteId)
  }
}
