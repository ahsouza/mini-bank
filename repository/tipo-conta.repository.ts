import { connect, disconnect } from '../config/db.config'
import { TipoContaModel } from '../models/tipo-conta'
import { APILogger } from '../logger/api.logger'

export class TipoContaRepository {
  private logger: APILogger
  constructor() {
    connect()
    this.logger = new APILogger()
  }
  async getTiposConta() {
    const tipos_conta = await TipoContaModel.find({})
    console.log('tipos-contas:::', tipos_conta)
    return tipos_conta
  }

  async createTipoConta(tipoConta) {
    let data = {}
    try {
      data = await TipoContaModel.create(tipoConta)
    } catch(err) {
      this.logger.error('Error::' + err)
    }
    return data
  }

  async updateTipoConta(tipoConta) {
    let data = {}
    try {
      data = await TipoContaModel.updateOne(tipoConta)
    } catch(err) {
      this.logger.error('Error::' + err)
    }
    return data
  }

  async deleteTipoConta(tipoId) {
    let data: any = {}
    try {
      data = await TipoContaModel.deleteOne({_id : tipoId})
    } catch(err) {
      this.logger.error('Error::' + err)
    }
    return {status: `${data.deletedCount > 0 ? true : false}`}
  }
}
