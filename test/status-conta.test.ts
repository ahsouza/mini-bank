import { StatusContaController } from "../controllers/status-conta.controller"
jest.mock('../controllers/status-conta.controller')

it("tem de simular listagem de status da conta", () => {
  const functionNameMock = jest.fn()
  jest.spyOn(StatusContaController.prototype, "getStatusConta").mockImplementation(functionNameMock)
})

it("tem de simular registro de status da conta", () => {
  const functionNameMock = jest.fn()
  jest.spyOn(StatusContaController.prototype, "createStatusConta").mockImplementation(functionNameMock)
})

it("tem de simular atualização de status da conta", () => {
  const functionNameMock = jest.fn()
  jest.spyOn(StatusContaController.prototype, "updateStatusConta").mockImplementation(functionNameMock)
})

it("tem de simular exclusão de status da conta", () => {
  const functionNameMock = jest.fn()
  jest.spyOn(StatusContaController.prototype, "deleteStatusConta").mockImplementation(functionNameMock)
})