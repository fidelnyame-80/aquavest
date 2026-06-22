"use client"
import HeroTextTop from "./heroTextTop";
import HeroImage from "./heroImage";
import HeroTextBottom from "./HeroTextBottom";
import RevealedSection from "./RevealedSection";

import { useRef, useEffect } from 'react';
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'


//Register the plugin once, outside the component
gsap.registerPlugin(ScrollTrigger)


const Hero = () => {
  const outerRef = useRef(null) //the tall outer wrapper. this is the scroll space
  const stickyRef = useRef(null) // stickyRef here is the view-port height container that remains in view while the scroll event is happening
  const textTopRef = useRef(null) // the heroTextTop component that will be animated
  const textBotRef = useRef(null) // the heroTextBottom component that will be animated
  const imageRef = useRef(null) // the heroImage component that will be animated
  const revealRef = useRef(null) // the hidden component that will show when the scroll animation is done

  useEffect(() => {
    //safety check to wait for all the refs to be attached
    if (
      !outerRef.current ||
      !stickyRef.current ||
      !textTopRef.current ||
      !textBotRef.current ||
      !imageRef.current ||
      !revealRef.current
    ) return;

    //building the animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {          // ← lowercase s
        trigger: outerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 2,  
        pin: true,
        
      }
    })

    // animating each piece

    //1. the revealedSection
    tl.fromTo(
      revealRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, ease: "power2.out", duration: 2,  }, 0
    )

    //2. the leftgate ie heroTextTop 
    tl.to(
      textTopRef.current,
      { x: "-110%",
        ease: "power2.in",
        opacity: 0,
      duration: 1.2 },
         0
    )

    //3. the leftgate bottom part ie heroTextBottom
    tl.to(
      textBotRef.current,
      { y: "150%", ease: "power2.in", opacity: 0, duration: 1.2 }, 0
    )

    //4. the right gate ie the heroImage
    tl.to(imageRef.current, { x: "110%", ease: "power2.in", opacity: 0, duration: 1.3 }, 0)

    //you need to cleanup on mount
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill())
    }

  }, [])



  return (

    <div ref={outerRef} className="relative h-[200vh]"> {/* OUTER — tall, gives scroll room */}

      {/* STICKY — pinned, viewport height */}
      <div ref={stickyRef} className="relative top-15 h-screen overflow-hidden">

        {/* RevealedSection sits behind everything */}
        <RevealedSection ref={revealRef} />

        {/* Your existing grid — sits on top */}
        <div className="grid lg:grid-cols-2 gap-0 h-full">

          <div className="grid lg:grid-rows-2 gap-0">
            <HeroTextTop ref={textTopRef} />
            <HeroTextBottom ref={textBotRef} />
          </div>

          <HeroImage ref={imageRef} />

        </div>

      </div>
    </div>
  )
}

export default Hero