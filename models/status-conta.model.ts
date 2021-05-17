import { model, Schema, Model, Document } from 'mongoose';

export interface IStatusConta extends Document {
  _id: string
  status: string
  cor: string
  createDate: string
  updatedDate: string
  updatedBy: string
}

const StatusContaSchema: Schema = new Schema({
  _id: { type: String, required: true },
  status: { type: String, required: true },
  cor: { type: String },
  createDate: { type: Date, default: Date.now },
  updatedDate: { type: Date, default: Date.now },
  updatedBy: { type: String, required: false }
})
export const StatusContaModel: Model<IStatusConta> = model<IStatusConta>('statusConta', StatusContaSchema)
