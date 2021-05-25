import { AccountTypeModel } from '@/domain/models'

export interface AddAccountType {
  add: (data: AddAccountType.Params) => Promise<void>
}

export namespace AddAccountType {
  export type Params = Omit<AccountTypeModel, 'id'>
}