import { connect, disconnect } from "../config/db.config";
import { InstituicaoModel } from '../models/instituicao.model';
import { APILogger } from '../logger/api.logger';

export class InstituicaoRepository {
  private logger: APILogger;
  constructor() {
    connect()
    this.logger = new APILogger()
  }

  async getInstituicoes() {
    const instituicoes = await InstituicaoModel.find({})
    console.log('instituicoes:::', instituicoes)
    return instituicoes;
  }

  async createInstituicao(banco) {
    let data = {}
    try {
      data = await InstituicaoModel.create(banco)
    } catch(err) {
      this.logger.error('Error::' + err)
    }
    return data;
  }

  async updateInstituicao(banco) {
    let data = {}
    try {
      data = await InstituicaoModel.updateOne(banco)
    } catch(err) {
      this.logger.error('Error::' + err)
    }
    return data;
  }

  async deleteInstituicao(bancoId) {
    let data: any = {}
    try {
      data = await InstituicaoModel.deleteOne({_id : bancoId})
    } catch(err) {
      this.logger.error('Error::' + err)
    }
    return {status: `${data.deletedCount > 0 ? true : false}`}
  }
}
