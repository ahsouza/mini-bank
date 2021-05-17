import * as request from 'supertest'
import * as MongoHelper from "../config/db.config"
import * as App from "../index"
let instituicaoModel

describe('Instituições Routes',()=> {
  beforeAll(async() => {
    MongoHelper.connect()
    instituicaoModel = await MongoHelper.getCollection('instituicoes')
  })

  beforeEach(async() => {
    await instituicaoModel.deleteMany()
  })

  afterAll(() => {
    MongoHelper.disconnect()
  })

  test('Tem de retornar 200 quando as credenciais válidas são fornecidas', async() => {
    await instituicaoModel.insertOne({
      nome: 'valid_name',
      codigo: 99999999999,
      cep: 99999999,
      logradouro: 'valid_logradouro',
      estado: 'valid_estado',
      cidade: 'valid_cidade',
      bairro: 'valid_bairro'
    })
    await request(App)
      .post('/api/instituicao')
      .send({instituicao: {
        nome: 'valid_name',
        codigo: 99999999999,
        cep: 99999999,
        logradouro: 'valid_logradouro',
        estado: 'valid_estado',
        cidade: 'valid_cidade',
        bairro: 'valid_bairro'
      }})
      .expect(200)
  })
})
