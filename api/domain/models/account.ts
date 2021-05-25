export type AccountModel = {
  id: number
  nome: string
  cpf: number
  numero_conta: number
  telefone: number
  email: string
  cep: number
  logradouro: string
  estado: string
  cidade: string
  bairro: string
  createDate: Date
  updatedDate?: Date
  updatedBy: number
}
