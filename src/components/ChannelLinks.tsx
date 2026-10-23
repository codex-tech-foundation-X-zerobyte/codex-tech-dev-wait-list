import { config } from '../config'

type Props = { layout?: 'row' | 'stack' | 'split' }

function Channel({ href, label, pri }: { href: string; label: string; pri?: boolean }) {
  const cls = `btn${pri ? ' pri' : ''}`
  const style = pri !== undefined ? { flex: 1 } : undefined
  if (!href) return <span className={cls} style={style} aria-disabled="true" title="Link coming soon">{label}</span>
  return <a className={cls} style={style} href={href} target="_blank" rel="noopener noreferrer">{label}</a>
}

export function ChannelLinks({ layout = 'row' }: Props) {
  const split = layout === 'split'
  return (
    <div className={layout === 'stack' ? 'stack' : 'row'}>
      <Channel href={config.whatsappUrl} label={split ? 'Join WhatsApp channel' : 'Join our WhatsApp channel'} pri={split ? true : undefined} />
      <Channel href={config.telegramUrl} label={split ? 'Join Telegram channel' : 'Join our Telegram channel'} pri={split ? false : undefined} />
    </div>
  )
}
