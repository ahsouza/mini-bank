import * as request from 'supertest'
import * as MongoHelper from "../config/db.config"
import * as App from "../index"
let tipoTransacaoModel

describe('Tipo De Transação Routes',()=> {
  beforeAll(async() => {
    MongoHelper.connect()
    tipoTransacaoModel = await MongoHelper.getCollection('tipoTransacao')
  })

  beforeEach(async() => {
    await tipoTransacaoModel.deleteMany()
  })

  afterAll(() => {
    MongoHelper.disconnect()
  })

  test('Tem de retornar 200 quando as credenciais válidas são fornecidas', async() => {
    await tipoTransacaoModel.insertOne({
      descricao: 'valid_descricao'
    })
    await request(App)
      .post('/api/tipoTransacao')
      .send({tipoTransacao: {
        descricao: 'valid_descricao'
      }})
      .expect(200)
  })
})
