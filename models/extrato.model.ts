import { model, Schema, Model, Document } from 'mongoose';

export interface IExtrato extends Document {
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
  createDate: string
  updatedDate: string
  createdBy: string
  updatedBy: string
}

const ExtratoSchema: Schema = new Schema({
  conta_origem: { type: Number, required: true },
  tipo_de_ted: { type: String, required: true },
  instituicao: { type: String, required: true },
  tipo_conta: { type: String, required: true },
  conta_destino: { type: Number, required: true },
  tipo_pessoa: { type: String, required: true },
  nome: { type: String, required: true },
  cpf_cnpj: { type: Number, required: true },
  valor: { type: Number, required: true },
  valor_da_tarifa: { type: Number, required: true },
  finalidade: { type: String, required: true },
  identificacao_transferencia: { type: String, required: true },
  historico: { type: String, required: true },
  data_da_operacao: { type: String, required: true },
  codigo_da_operacao: { type: Number, required: true },
  chave_de_seguranca: { type: String, required: true },
  createDate: { type: Date, default: Date.now },
  updatedDate: { type: Date, default: Date.now },
  createdBy: { type: String, required: false },
  updatedBy: { type: String, required: false }
})
export const ExtratoModel: Model<IExtrato> = model<IExtrato>('extratos', ExtratoSchema)
