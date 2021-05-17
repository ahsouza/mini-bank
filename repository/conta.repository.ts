import { connect, disconnect } from "../config/db.config";
import { ContaModel } from '../models/conta.model';
import { APILogger } from '../logger/api.logger';

export class ContaRepository {
  private logger: APILogger;
  constructor() {
    connect()
    this.logger = new APILogger()
  }

  async getContas() {
    const contas = await ContaModel.find({})
    console.log('contas:::', contas)
    return contas;
  }

  async createConta(conta) {
    let data = {}
    try {
      data = await ContaModel.create(conta)
    } catch(err) {
      this.logger.error('Error::' + err)
    }
    return data;
  }

  async updateConta(conta) {
    let data = {}
    try {
      data = await ContaModel.updateOne(conta)
    } catch(err) {
      this.logger.error('Error::' + err)
    }
    return data;
  }

  async deleteConta(contaId) {
    let data: any = {}
    try {
      data = await ContaModel.deleteOne({_id : contaId})
    } catch(err) {
      this.logger.error('Error::' + err)
    }
    return {status: `${data.deletedCount > 0 ? true : false}`}
  }
}
