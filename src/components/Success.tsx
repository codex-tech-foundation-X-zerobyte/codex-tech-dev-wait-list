import { Logo } from './Logo'
import { ChannelLinks } from './ChannelLinks'

export function Success({ onBack }: { onBack: () => void }) {
  return (
    <>
      <div className="w"><div className="nav"><Logo /></div></div>
      <div className="w center fade">
        <svg width="56" height="56" viewBox="0 0 24 24" role="img" aria-label="Success">
          <circle cx="12" cy="12" r="11" fill="none" stroke="#F2650D" strokeWidth="1.5" />
          <path d="M7 12.5l3.2 3.2L17 9" stroke="#F2650D" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
        <h2 style={{ fontSize: 36, marginTop: 20 }}>You are on the list.</h2>
        <p className="mu" style={{ fontSize: 17 }}>
          Thanks for joining. We are launching in late January 2027 and will invite early users first.
        </p>
        <div className="card" style={{ marginTop: 28, textAlign: 'left' }}>
          <h3>Get updates faster</h3>
          <div className="mu" style={{ marginBottom: 16 }}>Join a channel so you do not miss the launch.</div>
          <ChannelLinks layout="split" />
        </div>
        <p className="mu small" style={{ marginTop: 20 }}>Want your details removed? Reply to any update or contact us.</p>
        <button className="btn" type="button" onClick={onBack} style={{ marginTop: 8 }}>Back to the home page</button>
      </div>
    </>
  )
}
