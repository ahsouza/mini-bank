import { ClienteRepository } from '../repository/cliente.repository';

export class ClienteService {
  private clienteRepository: ClienteRepository;
  constructor() {
    this.clienteRepository = new ClienteRepository()
  }
  async getClientes() {
    return await this.clienteRepository.getClientes()
  }
  async createCliente(cliente) {
    return await this.clienteRepository.createCliente(cliente);
  }
  async updateCliente(cliente) {
    return await this.clienteRepository.updateCliente(cliente)
  }
  async deleteCliente(clienteId) {
    return await this.clienteRepository.deleteCliente(clienteId)
  }
}
