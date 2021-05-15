import { ClienteController } from "../controllers/cliente.controller"
jest.mock('../controllers/cliente.controller')

it("tem de simular listagem de cliente", () => {
  const functionNameMock = jest.fn()
  jest.spyOn(ClienteController.prototype, "getClientes").mockImplementation(functionNameMock)
})

it("tem de simular informações do cliente específico", () => {
  const functionNameMock = jest.fn()
  jest.spyOn(ClienteController.prototype, "getCliente").mockImplementation(functionNameMock)
})

it("tem de simular registro do cliente", () => {
  const functionNameMock = jest.fn()
  jest.spyOn(ClienteController.prototype, "createCliente").mockImplementation(functionNameMock)
})

it("tem de simular atualização do cliente", () => {
  const functionNameMock = jest.fn()
  jest.spyOn(ClienteController.prototype, "updateCliente").mockImplementation(functionNameMock)
})

it("tem de simular exclusão do cliente", () => {
  const functionNameMock = jest.fn()
  jest.spyOn(ClienteController.prototype, "updateCliente").mockImplementation(functionNameMock)
})