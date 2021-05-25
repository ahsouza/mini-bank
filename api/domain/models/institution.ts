export type InstitutionModel = {
  id: number
  nome: string
  codigo: number
  cep: number
  logradouro: string
  estado: string
  cidade: string
  bairro: string
  createDate: Date
  updatedDate: Date
  updatedBy?: Date
}