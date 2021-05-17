import { connect, disconnect } from '../config/db.config'
import { TipoTransacaoModel } from '../models/tipo-transacao'
import { APILogger } from '../logger/api.logger'

export class TipoTransacaoRepository {
  private logger: APILogger
  constructor() {
    connect()
    this.logger = new APILogger()
  }
  async getTiposTransacao() {
    const tipos_transacoes = await TipoTransacaoModel.find({})
    console.log('tipo-transacoes:::', tipos_transacoes)
    return tipos_transacoes
  }

  async createTipoTransacao(tipoTransacao) {
    let data = {}
    try {
      data = await TipoTransacaoModel.create(tipoTransacao)
    } catch(err) {
      this.logger.error('Error::' + err)
    }
    return data
  }

  async updateTipoTransacao(tipoTransacao) {
    let data = {}
    try {
      data = await TipoTransacaoModel.updateOne(tipoTransacao)
    } catch(err) {
      this.logger.error('Error::' + err)
    }
    return data
  }

  async deleteTipoTransacao(tipoId) {
    let data: any = {}
    try {
      data = await TipoTransacaoModel.deleteOne({_id : tipoId})
    } catch(err) {
      this.logger.error('Error::' + err)
    }
    return {status: `${data.deletedCount > 0 ? true : false}`}
  }
}
