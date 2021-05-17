import { connect, disconnect } from "../config/db.config";
import { TransacaoModel } from '../models/transacao.model';
import { APILogger } from '../logger/api.logger';

export class TransacaoRepository {
  private logger: APILogger;
  constructor() {
    connect()
    this.logger = new APILogger()
  }

  async getTransacoes() {
    const transacoes = await TransacaoModel.find({})
    console.log('transacoes:::', transacoes)
    return transacoes;
  }

  async createTransacao(transacao) {
    let data = {}
    try {
      data = await TransacaoModel.create(transacao)
    } catch(err) {
      this.logger.error('Error::' + err)
    }
    return data;
  }

  async updateTransacao(transacao) {
    let data = {}
    try {
      data = await TransacaoModel.updateOne(transacao)
    } catch(err) {
      this.logger.error('Error::' + err)
    }
    return data;
  }

  async deleteTransacao(transacaoId) {
    let data: any = {}
    try {
      data = await TransacaoModel.deleteOne({_id : transacaoId})
    } catch(err) {
      this.logger.error('Error::' + err)
    }
    return {status: `${data.deletedCount > 0 ? true : false}`}
  }
}
