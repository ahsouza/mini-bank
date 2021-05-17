import * as request from 'supertest'
import * as MongoHelper from "../config/db.config"
import * as App from "../index"
let contaModel

describe('Conta Routes',()=> {
  beforeAll(async() => {
    MongoHelper.connect()
    contaModel = await MongoHelper.getCollection('contas')
  })

  beforeEach(async() => {
    await contaModel.deleteMany()
  })

  afterAll(() => {
    MongoHelper.disconnect()
  })

  test('Tem de retornar 200 quando as credenciais válidas são fornecidas', async() => {
    await contaModel.insertOne({
      numero: 9999999,
      status: 'valid_status',
      tipo: 'valid_tipo',
      cliente_id: 9999999,
      saldo_atual: 999999,
      instituicao: 104
    })
    await request(App)
      .post('/api/conta')
      .send({conta: {
        numero: 9999999,
        status: 'valid_status',
        tipo: 'valid_tipo',
        cliente_id: 9999999,
        saldo_atual: 999999,
        instituicao: 104
      }})
      .expect(200)
  })
})
