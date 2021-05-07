import { connect, disconnect } from "../config/db.config";
import { ClienteModel } from '../models/cliente.model';
import { APILogger } from '../logger/api.logger';

export class ClienteRepository {
  private logger: APILogger;
  constructor() {
    connect()
    this.logger = new APILogger()
  }

  async getClientes() {
    const clientes = await ClienteModel.find({})
    console.log('clientes:::', clientes)
    return clientes;
  }

  async createCliente(cliente) {
    let data = {}
    try {
      data = await ClienteModel.create(cliente)
    } catch(err) {
      this.logger.error('Error::' + err)
    }
    return data;
  }

  async updateCliente(cliente) {
    let data = {}
    try {
      data = await ClienteModel.updateOne(cliente)
    } catch(err) {
      this.logger.error('Error::' + err)
    }
    return data;
  }

  async deleteCliente(clienteId) {
    let data: any = {}
    try {
      data = await ClienteModel.deleteOne({_id : clienteId})
    } catch(err) {
      this.logger.error('Error::' + err)
    }
    return {status: `${data.deletedCount > 0 ? true : false}`}
  }
}
