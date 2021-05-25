export type ExtractModel = {
  id: number
  conta_origem: number
  tipo_de_ted: string
  instituicao: string
  tipo_conta: string
  conta_destino: number
  tipo_pessoa: string
  nome: string
  cpf_cnpj: number
  valor: number
  valor_da_tarifa: number
  finalidade: string
  identificacao_transferencia: string
  historico: string
  data_da_operacao: string
  codigo_da_operacao: number
  chave_de_seguranca: string
  createDate: Date
  updatedDate: Date
}