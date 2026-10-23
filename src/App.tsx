import { useEffect, useState } from 'react'
import { Footer, Hero, HowItWorks, Modules, Nav, Preview } from './components/Sections'
import { JoinForm } from './components/JoinForm'
import { Success } from './components/Success'
import { Privacy } from './components/Privacy'

export default function App() {
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)
  const [route, setRoute] = useState(window.location.hash)

  useEffect(() => {
    const onHash = () => setRoute(window.location.hash)
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  if (route === '#/privacy') return <><Privacy /><Footer /></>
  if (joined) return <><Success onBack={() => { setJoined(false); setEmail(''); window.location.hash = '#/' }} /><Footer /></>

  return (
    <>
      <Nav />
      <main>
        <Hero email={email} onEmail={setEmail} />
        <Preview />
        <HowItWorks />
        <Modules />
        <JoinForm email={email} onEmail={setEmail} onJoined={() => { setJoined(true); window.scrollTo(0, 0) }} />
      </main>
      <Footer />
    </>
  )
}
