export interface LoadClientByEmailRepository {
  loadByEmail: (email: string) => Promise<LoadClientByEmailRepository.Result>
}

export namespace LoadClientByEmailRepository {
  export type Result = {
    id: string
    name: string
    password: string
  }
}