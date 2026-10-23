import { Logo } from './Logo'

// DRAFT. Have this reviewed by the product owner (and a legal adviser) before launch.
export function Privacy() {
  return (
    <>
      <div className="w"><div className="nav"><Logo /></div></div>
      <div className="w prose">
        <h1 style={{ fontSize: 36 }}>Privacy notice</h1>
        <p className="mu">Draft for review. Last updated 20 October 2026.</p>
        <h2>What we collect</h2>
        <p>Your email address, your main programming language, your payment provider, and an optional note about what you want to monitor. We record the time you agreed to be contacted.</p>
        <h2>Why we collect it</h2>
        <p>To invite you to try Codex, to send launch updates, and to understand which languages and payment providers matter most to our first users.</p>
        <h2>Who can see it</h2>
        <p>Only authorized Codex administrators. We do not sell your details.</p>
        <h2>Your choices</h2>
        <p>You can ask us to remove your details at any time by contacting us or replying to any update. We will delete them.</p>
        <h2>Updates</h2>
        <p>Channel updates on WhatsApp and Telegram are handled by those services under their own privacy terms.</p>
        <p><a href="#/">Back to the home page</a></p>
      </div>
    </>
  )
}
