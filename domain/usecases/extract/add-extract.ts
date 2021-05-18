import { ExtractModel } from '@/domain/models'

export interface AddExtract {
  add: (data: AddExtract.Params) => Promise<void>
}

export namespace AddExtract {
  export type Params = Omit<ExtractModel, 'id'>
}