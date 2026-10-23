import { Logo } from './Logo'
import { ChannelLinks } from './ChannelLinks'

export function Nav() {
  return (
    <div className="w">
      <header className="nav">
        <Logo />
        <nav className="nl" aria-label="Main">
          <a href="#how">How it works</a>
          <a href="#mods">Modules</a>
          <a href="#join">FAQ</a>
          <a className="btn pri" href="#join">Join waitlist</a>
        </nav>
      </header>
    </div>
  )
}

export function Hero({ email, onEmail }: { email: string; onEmail: (v: string) => void }) {
  return (
    <div className="w fade" style={{ paddingTop: 88, paddingBottom: 64 }}>
      <span className="pill">Launching late January 2027</span>
      <h1>One place to connect, monitor and manage your projects.</h1>
      <p className="mu lead">
        Codex Tech Developers Platform brings errors, payments and workflows into one verified dashboard. Any language, any infrastructure.
      </p>
      <form
        className="hero-form"
        onSubmit={(e) => {
          e.preventDefault()
          document.getElementById('join')?.scrollIntoView()
          document.getElementById('e2')?.focus({ preventScroll: true })
        }}
      >
        <div className="field">
          <label className="sr-only" htmlFor="e1">Email</label>
          <input id="e1" className="in" type="email" autoComplete="email" placeholder="you@company.com" value={email} onChange={(e) => onEmail(e.target.value)} />
        </div>
        <button className="btn pri" type="submit">Join the waitlist</button>
      </form>
      <p className="mu small" style={{ margin: '10px 0 20px' }}>Free to join. Updates by email, WhatsApp or Telegram.</p>
      <ChannelLinks />
    </div>
  )
}

const TILES = [
  { label: 'Errors (24h)', value: '12', status: 'Connected', on: true },
  { label: 'Payments (NGN)', value: '₦482,500', status: 'Connected', on: true },
  { label: 'Payments (USD)', value: '$1,940', status: 'Connected', on: true },
  { label: 'Deploys', value: 'Setup', status: 'Setup required', on: false },
]

export function Preview() {
  return (
    <div className="w" style={{ paddingBottom: 40 }}>
      <div className="card" style={{ padding: 20 }}>
        <div className="row" style={{ justifyContent: 'space-between', marginBottom: 16 }}>
          <b>Project: Acme API</b>
          <span className="mu small">Illustration with sample data</span>
        </div>
        <div className="g4">
          {TILES.map((t) => (
            <div key={t.label} className="card inner">
              <div className="mu small">{t.label}</div>
              <div className="metric">{t.value}</div>
              <span className={`bd${t.on ? ' on' : ''}`}>{t.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const STEPS = [
  ['01', 'Create a project', 'Add your app and environments.'],
  ['02', 'Connect your tools', 'SDK, API, webhook or provider link.'],
  ['03', 'Choose what to monitor', 'Errors, events, payments, alerts.'],
  ['04', 'Verify and watch', 'Only verified capabilities show as Connected.'],
]

export function HowItWorks() {
  return (
    <div className="w sec" id="how">
      <h2>How it works</h2>
      <p className="mu" style={{ margin: '0 0 28px' }}>You choose what to monitor. Codex works out how to collect it.</p>
      <div className="g4">
        {STEPS.map(([n, t, d]) => (
          <div className="card" key={n}>
            <div className="num">{n}</div>
            <h3>{t}</h3>
            <div className="mu">{d}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

const MODULES = [
  ['Codex Monitor', 'Errors, custom events, alerts and payment visibility for Paystack and Stripe, reported per currency.', true],
  ['Codex Mail', 'Email delivery for alerts and your own apps.', true],
  ['Dependencies', 'Outdated packages and security advisories.', false],
  ['Repo', 'GitHub workflows in one place.', false],
  ['Deploy', 'Deployment status and history.', false],
  ['SDK Hub', 'Find and set up Codex SDKs.', false],
] as const

export function Modules() {
  return (
    <div className="w sec" id="mods" style={{ paddingTop: 0 }}>
      <h2>Modules</h2>
      <p className="mu" style={{ margin: '0 0 28px' }}>Start with what you need. Add the rest later.</p>
      <div className="g3">
        {MODULES.map(([name, desc, launch]) => (
          <div className="card" key={name}>
            <span className={`bd${launch ? ' on' : ''}`}>{launch ? 'Launching 31 Jan' : 'Planned'}</span>
            <h3 style={{ marginTop: 12 }}>{name}</h3>
            <div className="mu">{desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Footer() {
  return (
    <div className="w">
      <footer className="foot">
        <span className="mu">Codex Tech Developers Platform. Prices and features may change before launch.</span>
        <a className="mu" href="#/privacy">Privacy notice</a>
      </footer>
    </div>
  )
}
