import * as request from 'supertest'
import * as MongoHelper from "../config/db.config"
import * as App from "../index"
let dataTransacaoModel

describe('Dados Da Transação Routes',()=> {
  beforeAll(async() => {
    MongoHelper.connect()
    dataTransacaoModel = await MongoHelper.getCollection('dataTransacao')
  })

  beforeEach(async() => {
    await dataTransacaoModel.deleteMany()
  })

  afterAll(() => {
    MongoHelper.disconnect()
  })

  test('Tem de retornar 200 quando as credenciais válidas são fornecidas', async() => {
    await dataTransacaoModel.insertOne({
      pagador_id: 1,
      transacao_id: 2,
      numero_conta: 99999999,
      valor_transacao: 'valid_logradouro'
    })
    await request(App)
      .post('/api/dataTransacao')
      .send({dataTransacao: {
        pagador_id: 1,
        transacao_id: 2,
        numero_conta: 99999999,
        valor_transacao: 'valid_logradouro'
      }})
      .expect(200)
  })
})
