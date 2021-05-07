import { model, Schema, Model, Document } from 'mongoose';

export interface IInstituicao extends Document {
  _id: number
  nome: string
  codigo: number
  cep: number
  logradouro: string
  estado: string
  cidade: string
  bairro: string
  createDate: string
  updatedDate: string
  updatedBy: string
}

const InstituicaoSchema: Schema = new Schema({
  _id: { type: Number, required: true },
  nome: { type: String, required: true },
  codigo: { type: Number, default: 0 },
  cep: { type: Number, default: 0 },
  logradouro: { type: String },
  estado: { type: String },
  cidade: { type: String },
  bairro: { type: String },
  createDate: { type: Date, default: Date.now },
  updatedDate: { type: Date, default: Date.now },
  updatedBy: { type: String, required: false }
})
export const InstituicaoModel: Model<IInstituicao> = model<IInstituicao>('instituicoes', InstituicaoSchema)
