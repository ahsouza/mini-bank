import * as request from 'supertest'
import * as MongoHelper from "../config/db.config"
import * as App from "../index"
let clienteModel

describe('Cliente Routes',()=> {
  beforeAll(async() => {
    MongoHelper.connect()
    clienteModel = await MongoHelper.getCollection('clientes')
  })

  beforeEach(async() => {
    await clienteModel.deleteMany()
  })

  afterAll(() => {
    MongoHelper.disconnect()
  })

  // test('Tem de se reconectar quando getCollection() é executado e o cliente é desconectado', async() => {
  //   expect(MongoHelper).toBeTruthy()
  //   await MongoHelper.disconnect()
  //   expect(MongoHelper).toBeFalsy()
  //   await MongoHelper.getCollection('clientes')
  //   expect(MongoHelper).toBeTruthy()
  // })

  test('Tem de retornar 200 quando as credenciais válidas são fornecidas', async() => {
    await clienteModel.insertOne({
      nome: 'valid_name',
      cpf: 99999999999,
      numero_conta: 'valid_numero_conta',
      telefone: 99999999,
      email: 'valid_email@mail.com',
      cep: 99999999,
      logradouro: 'valid_logradouro',
      estado: 'valid_estado',
      cidade: 'valid_cidade',
      bairro: 'valid_bairro'
    })
    await request(App)
      .post('/api/cliente')
      .send({cliente: {
        nome: 'valid_name',
        cpf: 99999999999,
        numero_conta: 'valid_numero_conta',
        telefone: 99999999,
        email: 'valid_email@mail.com',
        cep: 99999999,
        logradouro: 'valid_logradouro',
        estado: 'valid_estado',
        cidade: 'valid_cidade',
        bairro: 'valid_bairro'
      }})
      .expect(200)
  })
})
