import { InstituicaoController } from "../controllers/instituicao.controller"
jest.mock('../controllers/instituicao.controller')

it("tem de simular listagem de instituição", () => {
  const functionNameMock = jest.fn()
  jest.spyOn(InstituicaoController.prototype, "getInstituicoes").mockImplementation(functionNameMock)
})

it("tem de simular registro do instituição", () => {
  const functionNameMock = jest.fn()
  jest.spyOn(InstituicaoController.prototype, "createInstituicao").mockImplementation(functionNameMock)
})

it("tem de simular atualização do instituição", () => {
  const functionNameMock = jest.fn()
  jest.spyOn(InstituicaoController.prototype, "updateInstituicao").mockImplementation(functionNameMock)
})

it("tem de simular exclusão do instituição", () => {
  const functionNameMock = jest.fn()
  jest.spyOn(InstituicaoController.prototype, "deleteInstituicao").mockImplementation(functionNameMock)
})