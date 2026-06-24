"use client"
import HeroText from '../Components/heroTextTop'
import Hero from '../Components/Hero'
import RevealedSection from '../Components/RevealedSection'
import Marquee from '../Components/Marquee'
import ValueOfferSection from '../Components/ValueOffer'

const page = () => {
  return (
    <main className=''>
      <Hero />
      <Marquee />
      <ValueOfferSection/>
    </main>
  )
}

export default page