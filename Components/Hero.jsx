"use client"
import HeroTextTop from "./heroTextTop";
import HeroImage from "./heroImage";
import HeroTextBottom from "./HeroTextBottom";

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-0 lg:min-h-[60vh] max-h-[60vh]">
        <div className={`grid lg:grid-rows-2 gap-0 `}>
          <HeroTextTop />
          <HeroTextBottom />
        </div>
        
        <HeroImage />
    </div>
  )
}

export default Hero