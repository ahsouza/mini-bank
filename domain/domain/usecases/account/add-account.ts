import { AccountModel } from '@/domain/models'

export interface AccountModel {
  add: (data: AccountModel.Params) => Promise<void>
}

export namespace AccountModel {
  export type Params = Omit<AccountModel, 'id'>
}