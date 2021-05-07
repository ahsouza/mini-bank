import { model, Schema, Model, Document } from 'mongoose'

export interface ITipoTransacao extends Document {
  _id: string
  descricao: string
  createDate: string
  updatedDate: string
  updatedBy: string
}

const TipoTransacaoSchema: Schema = new Schema({
  _id: { type: String, required: true },
  descricao: { type: String, required: true },
  createDate: { type: Date, default: Date.now },
  updatedDate: { type: Date, default: Date.now },
  updatedBy: { type: String }
})
export const TipoTransacaoModel: Model<ITipoTransacao> = model<ITipoTransacao>('tipoTransacao', TipoTransacaoSchema)
