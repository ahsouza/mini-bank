import { AccountModel } from '@/domain/models'

export interface AddAccount {
  add: (data: AddAccount.Params) => Promise<void>
}

export namespace AddAccount {
  export type Params = Omit<AccountModel, 'id'>
}