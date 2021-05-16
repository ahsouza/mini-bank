const request = require('supertest')
const app = require('../app')
const MongoHelper = require('../config/db.config')
let clienteModel

describe('Cliente Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_CONNECTION_STRING)
    clienteModel = await MongoHelper.getCollection('clientes')
  })

  beforeEach(async () => {
    await clienteModel.deleteMany()
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  test('Should return 200 when valid credentials are provided', async () => {
    await clienteModel.insertOne({
      nome: 'valid_name',
      cpf: 'valid_cpf',
      numero_conta: 'valid_numero_conta',
      telefone: 'valid_telefone',
      email: 'valid_email@mail.com',
      cep: 'valid_cep',
      logradouro: 'valid_logradouro',
      estado: 'valid_estado',
      cidade: 'valid_cidade',
      bairro: 'valid_bairro'
    })
    await request(app)
      .post('/api/cliente')
      .send({
        nome: 'valid_name',
        cpf: 'valid_cpf',
        numero_conta: 'valid_numero_conta',
        telefone: 'valid_telefone',
        email: 'valid_email@mail.com',
        cep: 'valid_cep',
        logradouro: 'valid_logradouro',
        estado: 'valid_estado',
        cidade: 'valid_cidade',
        bairro: 'valid_bairro'
      })
      .expect(200)
  })


})