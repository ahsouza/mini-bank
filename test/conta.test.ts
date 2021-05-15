import { ContaController } from "../controllers/conta.controller"
jest.mock('../controllers/conta.controller')

it("tem de simular listagem de conta", () => {
  const functionNameMock = jest.fn()
  jest.spyOn(ContaController.prototype, "getContas").mockImplementation(functionNameMock)
})

it("tem de simular registro do conta", () => {
  const functionNameMock = jest.fn()
  jest.spyOn(ContaController.prototype, "createConta").mockImplementation(functionNameMock)
})

it("tem de simular atualização do conta", () => {
  const functionNameMock = jest.fn()
  jest.spyOn(ContaController.prototype, "updateConta").mockImplementation(functionNameMock)
})

it("tem de simular exclusão do conta", () => {
  const functionNameMock = jest.fn()
  jest.spyOn(ContaController.prototype, "deleteConta").mockImplementation(functionNameMock)
})