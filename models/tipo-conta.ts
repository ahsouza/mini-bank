import { model, Schema, Model, Document } from 'mongoose'

export interface ITipoConta extends Document {
  _id: string
  descricao: string
  createDate: string
  updatedDate: string
  updatedBy: string
}

const TipoContaSchema: Schema = new Schema({
  _id: { type: String, required: true },
  descricao: { type: String, required: true },
  createDate: { type: Date, default: Date.now },
  updatedDate: { type: Date, default: Date.now },
  updatedBy: { type: String, required: false }
})
export const TipoContaModel: Model<ITipoConta> = model<ITipoConta>('tipoConta', TipoContaSchema)
