export interface LoadClientByTokenRepository {
  loadByToken: (token: string, role?: string) => Promise<LoadClientByTokenRepository.Result>
}

export namespace LoadClientByTokenRepository {
  export type Result = {
    id: string
  }
}