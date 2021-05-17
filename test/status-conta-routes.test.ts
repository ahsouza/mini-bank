import * as request from 'supertest'
import * as MongoHelper from "../config/db.config"
import * as App from "../index"
let statusContaModel

describe('Status Da Conta Routes',()=> {
  beforeAll(async() => {
    MongoHelper.connect()
    statusContaModel = await MongoHelper.getCollection('statusConta')
  })

  beforeEach(async() => {
    await statusContaModel.deleteMany()
  })

  afterAll(() => {
    MongoHelper.disconnect()
  })

  test('Tem de retornar 200 quando as credenciais válidas são fornecidas', async() => {
    await statusContaModel.insertOne({
      status: 'valid_status',
      cor: 'valid_cor'
    })
    await request(App)
      .post('/api/statusAccount')
      .send({statusConta: {
        status: 'valid_status',
        cor: 'valid_cor'
      }})
      .expect(200)
  })
})
