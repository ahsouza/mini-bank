export interface LoadClientByToken {
  load: (accessToken: string, role?: string) => Promise<LoadClientByToken.Result>
}

export namespace LoadClientByToken {
  export type Result = {
    id: string
  }
}