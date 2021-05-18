import { InstitutionModel } from '@/domain/models'

export interface AddInstitution {
  add: (data: AddInstitution.Params) => Promise<void>
}

export namespace AddInstitution {
  export type Params = Omit<InstitutionModel, 'id'>
}