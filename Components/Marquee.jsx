"use client"

import { useRef, useEffect } from "react";
import gsap from "gsap";


const Marquee = () => {
    const marqueeRef = useRef(null);

     useEffect(() => {
    gsap.to(marqueeRef.current, {
      xPercent: -50,
      duration: 20,
      ease: "none",
      repeat: -1,
    });
  }, []);

    const items = [
        "Crop Farming",
        "Poultry",
        "Aquaculture",
        "Greenhouses",
        "Fruit Farming",
        "Vegetable Farming",
        "Sustainable Agriculture"
    ]
    return (
        <section 
        
        className="overflow-hidden bg-gray-300 h-[6rem] transform  ">
            <div 
            ref={marqueeRef}
            className="flex gap-8 whitespace-nowrap text-3xl font-bold uppercase  ">
                {[...items, ...items].map((item, index) => (
                    <div
                        key={index}
                        className="px-6 py-3 rounded-full "
                    >
                        {item}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Marquee;