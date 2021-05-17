import * as request from 'supertest'
import * as MongoHelper from "../config/db.config"
import * as App from "../index"
let extratoModel

describe('Extrato Da Transação Routes',()=> {
  beforeAll(async() => {
    MongoHelper.connect()
    extratoModel = await MongoHelper.getCollection('extratos')
  })

  beforeEach(async() => {
    await extratoModel.deleteMany()
  })

  afterAll(() => {
    MongoHelper.disconnect()
  })

  test('Tem de retornar 200 quando as credenciais válidas são fornecidas', async() => {
    await extratoModel.insertOne({
      conta_origem: 1,
      tipo_de_ted: 'valid_tipo_de_ted',
      instituicao: 'valid_string',
      tipo_conta: 'valid_string',
      conta_destino: 1,
      tipo_pessoa: 'valid_tipo_pessoa',
      nome: 'valid_nome',
      cpf_cnpj: 9999999999,
      valor: 9999,
      valor_da_tarifa: 1,
      finalidade: 'valid_finalidade',
      identificacao_transferencia: 'valid_identificacao_transferencia',
      historico: 'valid_historico',
      data_de_operacao: 'valid_data_de_operacao',
      codigo_da_operacao: 2,
      chave_de_segurancao: 'valid_chave_de_seguranca'
    })
    await request(App)
      .post('/api/extrato')
      .send({extrato: {
        conta_origem: 1,
        tipo_de_ted: 'valid_tipo_de_ted',
        instituicao: 'valid_string',
        tipo_conta: 'valid_string',
        conta_destino: 1,
        tipo_pessoa: 'valid_tipo_pessoa',
        nome: 'valid_nome',
        cpf_cnpj: 9999999999,
        valor: 9999,
        valor_da_tarifa: 1,
        finalidade: 'valid_finalidade',
        identificacao_transferencia: 'valid_identificacao_transferencia',
        historico: 'valid_historico',
        data_de_operacao: 'valid_data_de_operacao',
        codigo_da_operacao: 2,
        chave_de_segurancao: 'valid_chave_de_seguranca'
      }})
      .expect(200)
  })
})
