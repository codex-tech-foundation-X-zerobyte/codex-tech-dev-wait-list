import { useState } from 'react'
import { LANGUAGES, PROVIDERS, validate, type FormErrors, type FormValues } from '../lib/validate'
import { joinWaitlist } from '../lib/supabase'
import { ChannelLinks } from './ChannelLinks'

type Props = { email: string; onEmail: (v: string) => void; onJoined: () => void }

export function JoinForm({ email, onEmail, onJoined }: Props) {
  const [language, setLanguage] = useState('typescript')
  const [provider, setProvider] = useState('paystack')
  const [note, setNote] = useState('')
  const [consent, setConsent] = useState(false)
  const [website, setWebsite] = useState('') // honeypot
  const [errors, setErrors] = useState<FormErrors>({})
  const [formError, setFormError] = useState('')
  const [busy, setBusy] = useState(false)

  async function submit(ev: React.FormEvent) {
    ev.preventDefault()
    if (busy) return
    const values: FormValues = { email, language, provider, note, consent }
    const found = validate(values)
    setErrors(found)
    setFormError('')
    if (Object.keys(found).length) return
    setBusy(true)
    const res = await joinWaitlist(values, website)
    setBusy(false)
    if (res.ok) onJoined()
    else setFormError(res.message)
  }

  return (
    <div className="w sec" id="join" style={{ paddingTop: 0 }}>
      <div className="card join">
        <div>
          <h2>Join the waitlist</h2>
          <p className="mu">
            Get early access and launch updates. We only collect what is needed to invite you. Ask us to remove your details at any time.
          </p>
          <ChannelLinks layout="stack" />
        </div>
        <form className="fields" onSubmit={submit} noValidate>
          <div>
            <label htmlFor="e2">Email</label>
            <input id="e2" className="in" type="email" autoComplete="email" placeholder="you@company.com" value={email} onChange={(e) => onEmail(e.target.value)} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'e2-err' : undefined} />
            {errors.email && <p id="e2-err" className="err">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="l2">Main language</label>
            <select id="l2" className="in" value={language} onChange={(e) => setLanguage(e.target.value)}>
              {LANGUAGES.map((l) => <option key={l.value} value={l.value}>{l.label}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="p2">Payment provider</label>
            <select id="p2" className="in" value={provider} onChange={(e) => setProvider(e.target.value)}>
              {PROVIDERS.map((p) => <option key={p.value} value={p.value}>{p.label}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="n2">What do you want to monitor? (optional)</label>
            <textarea id="n2" className="in" rows={3} maxLength={500} value={note} onChange={(e) => setNote(e.target.value)} aria-invalid={!!errors.note} />
            {errors.note && <p className="err">{errors.note}</p>}
          </div>
          <div className="hp" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input id="website" type="text" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
          </div>
          <div>
            <div className="consent">
              <input id="c2" type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} aria-invalid={!!errors.consent} />
              <label htmlFor="c2">I agree to be contacted about Codex launch updates. See the <a href="#/privacy">privacy notice</a>.</label>
            </div>
            {errors.consent && <p className="err">{errors.consent}</p>}
          </div>
          <button className="btn pri" type="submit" disabled={busy} style={{ width: '100%' }}>
            {busy ? 'Joining...' : 'Join the waitlist'}
          </button>
          <p className="err status" role="alert">{formError}</p>
        </form>
      </div>
    </div>
  )
}
