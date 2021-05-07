import { model, Schema, Model, Document } from 'mongoose'

export interface IConta extends Document {
  _id: number
  numero: number
  status: string
  tipo: string
  cliente_id: number
  saldo_atual: number
  instituicao: number
  createDate: string
  updatedDate: string
  updatedBy: string
}

const ContaSchema: Schema = new Schema({
  _id: { type: Number, required: true },
  numero: { type: Number, required: true },
  status: { type: String, required: true, ref: 'statusConta' }, 
  tipo: { type: String, required: true, ref: 'tipoConta' },
  cliente_id: { type: Number, required: true, ref: 'clientes'},
  saldo_atual: { type: Number, required: true },
  instituicao: { type: Number, required: true, ref: 'instituicoes'},
  createDate: { type: Date, default: Date.now },
  updatedDate: { type: Date, default: Date.now },
  updatedBy: { type: String, required: false }
})
export const ContaModel: Model<IConta> = model<IConta>('contas', ContaSchema)
