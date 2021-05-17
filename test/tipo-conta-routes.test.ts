import * as request from 'supertest'
import * as MongoHelper from "../config/db.config"
import * as App from "../index"
let tipoContaModel

describe('Tipos De Conta Routes',()=> {
  beforeAll(async() => {
    MongoHelper.connect()
    tipoContaModel = await MongoHelper.getCollection('tipoConta')
  })

  beforeEach(async() => {
    await tipoContaModel.deleteMany()
  })

  afterAll(() => {
    MongoHelper.disconnect()
  })

  test('Tem de retornar 200 quando as credenciais válidas são fornecidas', async() => {
    await tipoContaModel.insertOne({
      descricao: 'valid_descricao'
    })
    await request(App)
      .post('/api/typeAccount')
      .send({tipoConta: {
        descricao: 'valid_descricao'
      }})
      .expect(200)
  })
})
