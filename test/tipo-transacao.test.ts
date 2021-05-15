import { TipoTransacaoController } from "../controllers/tipo-transacao.controller"
jest.mock('../controllers/tipo-transacao.controller')

it("tem de simular listagem dos tipos de transação", () => {
  const functionNameMock = jest.fn()
  jest.spyOn(TipoTransacaoController.prototype, "getTiposTransacao").mockImplementation(functionNameMock)
})

it("tem de simular registro para tipo de transação", () => {
  const functionNameMock = jest.fn()
  jest.spyOn(TipoTransacaoController.prototype, "createTipoTransacao").mockImplementation(functionNameMock)
})

it("tem de simular atualização para tipo de transação", () => {
  const functionNameMock = jest.fn()
  jest.spyOn(TipoTransacaoController.prototype, "updateTipoTransacao").mockImplementation(functionNameMock)
})

it("tem de simular exclusão para tipo de transação", () => {
  const functionNameMock = jest.fn()
  jest.spyOn(TipoTransacaoController.prototype, "deleteTipoTransacao").mockImplementation(functionNameMock)
})