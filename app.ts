import * as bodyParser from "body-parser"
import * as cors from 'cors';
import * as express from "express"
import { APILogger } from "./logger/api.logger"
import { TransacaoController } from "./controllers/transacao.controller"
import { TipoTransacaoController } from "./controllers/tipo-transacao.controller"
import { ContaController } from "./controllers/conta.controller"
import { TipoContaController } from "./controllers/tipo-conta.controller"
import { ClienteController } from "./controllers/cliente.controller"
import { InstituicaoController } from "./controllers/instituicao.controller"
import { StatusContaController } from "./controllers/status-conta.controller"
import swaggerUi = require('swagger-ui-express')
import fs = require('fs')

const options: cors.CorsOptions = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
  ],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: 'http://localhost:8081',
  preflightContinue: false,
};

class App {
  public express: express.Application
  public logger: APILogger
  public transacaoController: TransacaoController
  public contaController: ContaController
  public clienteController: ClienteController
  public instituicaoController: InstituicaoController
  public tipoTransacaoController: TipoTransacaoController
  public tipoContaController: TipoContaController
  public statusContaController: StatusContaController
  
  /* Swagger files start */
  // private swaggerFile: any = (process.cwd()+"/swagger/swagger.json")
  // private swaggerData: any = fs.readFileSync(this.swaggerFile, 'utf8')
  // private customCss: any = fs.readFileSync((process.cwd()+"/swagger/swagger.css"), 'utf8')
  // private swaggerDocument = JSON.parse(this.swaggerData)
  /* Swagger files end */

  constructor() {
    this.express = express()
    this.middleware()
    this.routes()
    this.logger = new APILogger()
    this.clienteController = new ClienteController()
    this.contaController = new ContaController()
    this.statusContaController = new StatusContaController()
    this.instituicaoController = new InstituicaoController()
    this.tipoContaController = new TipoContaController()
    this.transacaoController = new TransacaoController()
    this.tipoTransacaoController = new TipoTransacaoController()
  }
  // Configure Express middleware.
  private middleware(): void {
    this.express.use(bodyParser.json())
    this.express.use(bodyParser.urlencoded({ extended: false }))
    this.express.use(cors(options))
  }
  private routes(): void {
    // ROTAS Contas
    this.express.get('/api/contas', (req, res) => {
      this.contaController.getContas().then(data => res.json(data))
    })
    this.express.post('/api/conta', (req, res) => {
      console.log(req.body)
      this.contaController.createConta(req.body.conta).then(data => res.json(data))
    })
    this.express.put('/api/conta', (req, res) => {
      this.contaController.updateConta(req.body.conta).then(data => res.json(data))
    })
    this.express.delete('/api/conta/:id', (req, res) => {
      this.contaController.deleteConta(req.params.id).then(data => res.json(data))
    })
    // ROTAS Tipos De Contas
    this.express.get('/api/typesAccount', (req, res) => {
      this.tipoContaController.getTiposConta().then(data => res.json(data))
    })
    this.express.post('/api/typeAccount', (req, res) => {
      console.log(req.body)
      this.tipoContaController.createTipoConta(req.body.tipoConta).then(data => res.json(data))
    })
    this.express.put('/api/typeAccount', (req, res) => {
      this.tipoContaController.updateTipoConta(req.body.tipoConta).then(data => res.json(data))
    })
    this.express.delete('/api/typeAccount/:id', (req, res) => {
      this.tipoContaController.deleteTipoConta(req.params.id).then(data => res.json(data))
    })
    // ROTAS Status De Contas
    this.express.get('/api/statusAccount', (req, res) => {
      this.statusContaController.getStatusConta().then(data => res.json(data))
    })
    this.express.post('/api/statusAccount', (req, res) => {
      console.log(req.body)
      this.statusContaController.createStatusConta(req.body.statusConta).then(data => res.json(data))
    })
    this.express.put('/api/statusAccount', (req, res) => {
      this.statusContaController.updateStatusConta(req.body.statusConta).then(data => res.json(data))
    })
    this.express.delete('/api/tipoAccount/:id', (req, res) => {
      this.statusContaController.deleteStatusConta(req.params.id).then(data => res.json(data))
    })
    // ROTAS Clientes
    this.express.get('/api/clientes', (req, res) => {
      this.clienteController.getClientes().then(data => res.json(data))
    })
    this.express.get('/api/cliente/:id', (req, res) => {
      this.clienteController.getCliente(req.params.id).then(data => res.json(data))
    })
    this.express.post('/api/cliente', (req, res) => {
      console.log(req.body)
      this.clienteController.createCliente(req.body.cliente).then(data => res.json(data))
    })
    this.express.put('/api/cliente', (req, res) => {
      this.clienteController.updateCliente(req.body.cliente).then(data => res.json(data))
    })
    this.express.delete('/api/cliente/:id', (req, res) => {
      this.clienteController.deleteCliente(req.params.id).then(data => res.json(data))
    })
    // ROTAS Transacoes
    this.express.get('/api/transacoes', (req, res) => {
      this.transacaoController.getTransacoes().then(data => res.json(data))
    })
    this.express.post('/api/transacao', (req, res) => {
      console.log(req.body)
      this.transacaoController.createTransacao(req.body.transacao).then(data => res.json(data))
    })
    this.express.put('/api/transacao', (req, res) => {
      this.transacaoController.updateTransacao(req.body.transacao).then(data => res.json(data))
    })
    this.express.delete('/api/transacao/:id', (req, res) => {
      this.transacaoController.deleteTransacao(req.params.id).then(data => res.json(data))
    })
    // ROTAS Tipos Transacoes
    this.express.get('/api/tiposTransacao', (req, res) => {
      this.tipoTransacaoController.getTiposTransacao().then(data => res.json(data))
    })
    this.express.post('/api/tipoTransacao', (req, res) => {
      console.log(req.body)
      this.tipoTransacaoController.createTipoTransacao(req.body.tipoTransacao).then(data => res.json(data))
    })
    this.express.put('/api/tipoTransacao', (req, res) => {
      this.tipoTransacaoController.updateTipoTransacao(req.body.tipoTransacao).then(data => res.json(data))
    })
    this.express.delete('/api/tipoTransacao/:id', (req, res) => {
      this.tipoTransacaoController.deleteTipoTransacao(req.params.id).then(data => res.json(data))
    })
    // ROTAS Instituições
    this.express.get('/api/instituicoes', (req, res) => {
      this.instituicaoController.getInstituicoes().then(data => res.json(data))
    })
    this.express.post('/api/instituicao', (req, res) => {
      console.log(req.body)
      this.instituicaoController.createInstituicao(req.body.instituicao).then(data => res.json(data))
    })
    this.express.put('/api/instituicao', (req, res) => {
      this.instituicaoController.updateInstituicao(req.body.instituicao).then(data => res.json(data))
    })
    this.express.delete('/api/instituicao/:id', (req, res) => {
      this.instituicaoController.deleteInstituicao(req.params.id).then(data => res.json(data))
    })
    // HOME ENDPOINT
    this.express.get("/", (req, res, next) => {
      res.send("Typescript App works!!")
    })
    //this.express.use('/api/docs', swaggerUi.serve,swaggerUi.setup(this.swaggerDocument, null, null, this.customCss))
    this.express.use("*", (req, res, next) => {
      res.send("404! Make sure url is correct!!!")
    })
  }
}
export default new App().express;
