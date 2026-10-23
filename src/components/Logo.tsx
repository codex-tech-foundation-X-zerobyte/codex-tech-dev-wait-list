// Logo mark lives in src/assets/logo.svg (master copy: ../../branding/codex-mark.svg).
import logoUrl from '../assets/logo.svg'

export function Logo() {
  return (
    <a className="lg" href="#/" aria-label="Codex home">
      <img src={logoUrl} alt="" width={24} height={24} />
      Codex
    </a>
  )
}
