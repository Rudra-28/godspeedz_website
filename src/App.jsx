import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Ticker from './components/Ticker/Ticker'
import Problem from './components/Problem/Problem'
import Features from './components/Features/Features'
import Screenshots from './components/Screenshots/Screenshots'
import Waitlist from './components/Waitlist/Waitlist'
import AppBanner from './components/AppBanner/AppBanner'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Problem />
        <Features />
        <Screenshots />
        <Waitlist />
        <AppBanner />
      </main>
      <Footer />
    </>
  )
}
