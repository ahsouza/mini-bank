import * as request from 'supertest'
import * as MongoHelper from "../config/db.config"
import * as App from "../index"
let transacaoModel

describe('Transação Routes',()=> {
  beforeAll(async() => {
    MongoHelper.connect()
    transacaoModel = await MongoHelper.getCollection('transacoes')
  })

  beforeEach(async() => {
    await transacaoModel.deleteMany()
  })

  afterAll(() => {
    MongoHelper.disconnect()
  })

  test('Tem de retornar 200 quando as credenciais válidas são fornecidas', async() => {
    await transacaoModel.insertOne({
      recebedor: 'valid_name',
      cpf: 99999999999,
      conta_destino: 9999999999999999,
      instituicao_destino: 'valid_instituicao_destino',
      tipo: 'valid_tipo',
      valor: 99999
    })
    await request(App)
      .post('/api/transacao')
      .send({transacao: {
        recebedor: 'valid_name',
        cpf: 99999999999,
        conta_destino: 9999999999999999,
        instituicao_destino: 'valid_instituicao_destino',
        tipo: 'valid_tipo',
        valor: 99999
      }})
      .expect(200)
  })
})
