import { model, Schema, Model, Document } from 'mongoose'

export interface ICliente extends Document {
  _id: number
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
  createDate: string
  updatedDate: string
  updatedBy: string
}

const ClienteSchema: Schema = new Schema({
  _id: { type: Number, required: true },
  nome: { type: String, required: true },
  cpf: { type: Number, required: true },
  numero_conta: { type: Number, default: 0, ref: 'contas'},
  telefone: { type: Number },
  email: { type: String },
  cep: { type: Number },
  logradouro: { type: String },
  estado: { type: String },
  cidade: { type: String },
  bairro: { type: String },
  createDate: { type: Date, default: Date.now },
  updatedDate: { type: Date, default: Date.now },
  updatedBy: { type: String, required: false }
})
export const ClienteModel: Model<ICliente> = model<ICliente>('clientes', ClienteSchema)
