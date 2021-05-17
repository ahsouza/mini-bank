import { EmailValidatorAdapter } from './email-validator'

const makeSut = (): EmailValidatorAdapter => {
  return new EmailValidatorAdapter()
}

describe('EmailValidator Adapter', () => {
  test('Tem de retornar falso caso validator retorna false', () => {
    const sut = makeSut()
    const isValid = sut.isValid('invalid_email@vittobank.com')
    expect(isValid).toBe(false)
  })
})
