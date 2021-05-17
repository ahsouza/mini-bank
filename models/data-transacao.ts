import { model, Schema, Model, Document } from 'mongoose'

export interface IDataTransacao extends Document {
  // Foreign Key
  // pagador_id == cliente
  pagador_id: number
  // transacao_id == transacao padrao para o recebedor
  transacao_id: number
  // numero_conta == conta do recebedor
  numero_conta: number
  // Foreign Key
  valor_transacao: number
  data_transacao: string
}

const DataTransacaoSchema: Schema = new Schema({
  pagador_id: { type: Number, required: true, ref: 'clientes' },
  transacao_id: { type: Number, required: true, ref: 'transacoes' },
  numero_conta: { type: Number, required: true, ref: 'contas' },
  valor_transacao: { type: Number, required: true },
  data_transacao: { type: Date, default: Date.now }
})
export const DataTransacaoModel: Model<IDataTransacao> = model<IDataTransacao>('dataTransacao', DataTransacaoSchema)
