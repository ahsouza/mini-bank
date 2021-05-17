import { model, Schema, Model, Document } from 'mongoose'

export interface ITransacaoRecebedor {
  recebedor: string
  cpf: number
  conta_destino: number
  instituicao_destino: string
}

export interface ITransacao extends Document, ITransacaoRecebedor {
  _id: number
  tipo: string
  valor: number
  createDate: string
}

const TransacaoSchema: Schema = new Schema({
  _id: { type: Number, required: true },
  recebedor: { type: String, required: true },
  cpf: { type: Number, required: true },
  conta_destino: { type: Number, required: true },
  instituicao_destino: { type: String, required: true, ref: 'instituicoes' },
  tipo: { type: String, required: true, ref: 'tipoTransacao' },
  valor: { type: Number, required: true },
  createDate: { type: Date, default: Date.now },
})
export const TransacaoModel: Model<ITransacao> = model<ITransacao>('transacoes', TransacaoSchema)
