export interface NewClient {
  add: (account: NewClient.Params) => Promise<NewClient.Result>
}

export namespace NewClient {
  export type Params = {
    name: string
    email: string
    password: string
  }

  export type Result = boolean
}