import { AccountStatusModel  } from '@/domain/models'

export interface AddAccountStatus {
  add: (data: AddAccountStatus.Params) => Promise<void>
}

export namespace AddAccountStatus {
  export type Params = Omit<AccountStatusModel, 'id'>
}