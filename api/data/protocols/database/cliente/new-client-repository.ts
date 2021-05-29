import { NewClient } from '@/domain/usecases'

export interface NewClientRepository {
  add: (data: NewClientRepository.Params) => Promise<NewClientRepository.Result>
}

export namespace NewClientRepository {
  export type Params = NewClient.Params
  export type Result = boolean
}
