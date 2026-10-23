export const LANGUAGES = [
  { value: 'typescript', label: 'TypeScript / JavaScript' },
  { value: 'python', label: 'Python' },
  { value: 'go', label: 'Go' },
  { value: 'other', label: 'Other' },
] as const

export const PROVIDERS = [
  { value: 'paystack', label: 'Paystack' },
  { value: 'stripe', label: 'Stripe' },
  { value: 'flutterwave', label: 'Flutterwave' },
  { value: 'other', label: 'Other' },
  { value: 'none', label: 'None yet' },
] as const

export type FormValues = {
  email: string
  language: string
  provider: string
  note: string
  consent: boolean
}

export type FormErrors = Partial<Record<keyof FormValues, string>>

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/

export function validate(v: FormValues): FormErrors {
  const e: FormErrors = {}
  const email = v.email.trim()
  if (!email) e.email = 'Enter your email address.'
  else if (email.length > 254 || !EMAIL_RE.test(email)) e.email = 'Enter a valid email address.'
  if (!LANGUAGES.some((l) => l.value === v.language)) e.language = 'Choose a language.'
  if (!PROVIDERS.some((p) => p.value === v.provider)) e.provider = 'Choose a payment provider.'
  if (v.note.trim().length > 500) e.note = 'Keep this under 500 characters.'
  if (!v.consent) e.consent = 'Please agree so we can contact you.'
  return e
}
