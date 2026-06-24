"use client"
import Hero from '../Components/Hero'
import Marquee from '../Components/Marquee'
import ProduceJourney from '../Components/ProduceJourney'
import HarvestFields from '../Components/HarvestFields'

const page = () => {
  return (
    <main className=''>
      <Hero />
      <Marquee />
      <ProduceJourney />
      <HarvestFields />
    </main>
  )
}

export default page
