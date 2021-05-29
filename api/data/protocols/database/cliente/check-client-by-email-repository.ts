export interface CheckClientByEmailRepository {
  checkByEmail: (email: string) => Promise<CheckClientByEmailRepository.Result>
}

export namespace CheckClientByEmailRepository {
  export type Result = boolean
}
