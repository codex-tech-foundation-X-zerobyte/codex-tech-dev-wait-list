import { describe, expect, it } from 'vitest'
import { validate, type FormValues } from './validate'

const ok: FormValues = { email: 'ada@example.com', language: 'typescript', provider: 'paystack', note: '', consent: true }

describe('validate', () => {
  it('accepts a valid form', () => expect(validate(ok)).toEqual({}))
  it('rejects an empty or malformed email', () => {
    expect(validate({ ...ok, email: '' }).email).toBeTruthy()
    expect(validate({ ...ok, email: 'not-an-email' }).email).toBeTruthy()
    expect(validate({ ...ok, email: 'a@b' }).email).toBeTruthy()
  })
  it('trims whitespace around the email', () => expect(validate({ ...ok, email: '  ada@example.com ' })).toEqual({}))
  it('requires consent', () => expect(validate({ ...ok, consent: false }).consent).toBeTruthy())
  it('rejects unknown language and provider', () => {
    expect(validate({ ...ok, language: 'cobol' }).language).toBeTruthy()
    expect(validate({ ...ok, provider: 'x' }).provider).toBeTruthy()
  })
  it('limits the note to 500 characters', () => {
    expect(validate({ ...ok, note: 'a'.repeat(501) }).note).toBeTruthy()
    expect(validate({ ...ok, note: 'a'.repeat(500) }).note).toBeUndefined()
  })
})
