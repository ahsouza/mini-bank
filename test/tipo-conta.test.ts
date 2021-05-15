import { TipoContaController } from "../controllers/tipo-conta.controller"
jest.mock('../controllers/tipo-conta.controller')

it("tem de simular listagem dos tipos de conta", () => {
  const functionNameMock = jest.fn()
  jest.spyOn(TipoContaController.prototype, "getTiposConta").mockImplementation(functionNameMock)
})

it("tem de simular registro para tipo de conta", () => {
  const functionNameMock = jest.fn()
  jest.spyOn(TipoContaController.prototype, "createTipoConta").mockImplementation(functionNameMock)
})

it("tem de simular atualização para tipo da conta", () => {
  const functionNameMock = jest.fn()
  jest.spyOn(TipoContaController.prototype, "updateTipoConta").mockImplementation(functionNameMock)
})

it("tem de simular exclusão para tipo da conta", () => {
  const functionNameMock = jest.fn()
  jest.spyOn(TipoContaController.prototype, "deleteTipoConta").mockImplementation(functionNameMock)
})