import { ClientModel } from '@/domain/models'

export interface AddClient {
  add: (data: AddClient.Params) => Promise<void>
}

export namespace AddClient {
  export type Params = Omit<ClientModel, 'id'>
}