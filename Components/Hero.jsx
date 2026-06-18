"use client"
import HeroText from "./heroText";
import HeroImage from "./heroImage";

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-0  ">
        <HeroText />
        <HeroImage />
    </div>
  )
}

export default Hero