import { TransacaoController } from "../controllers/transacao.controller"
jest.mock('../controllers/transacao.controller')

it("tem de simular listagem das transações", () => {
  const functionNameMock = jest.fn()
  jest.spyOn(TransacaoController.prototype, "getTransacoes").mockImplementation(functionNameMock)
})

it("tem de simular registro da transação", () => {
  const functionNameMock = jest.fn()
  jest.spyOn(TransacaoController.prototype, "createTransacao").mockImplementation(functionNameMock)
})

it("tem de simular atualização da transação", () => {
  const functionNameMock = jest.fn()
  jest.spyOn(TransacaoController.prototype, "updateTransacao").mockImplementation(functionNameMock)
})

it("tem de simular exclusão da transação", () => {
  const functionNameMock = jest.fn()
  jest.spyOn(TransacaoController.prototype, "deleteTransacao").mockImplementation(functionNameMock)
})