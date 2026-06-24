"use client"

import { useRef, useEffect } from "react";
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Float} from "@react-three/drei"
import { Tomato_2 } from "./models/Tomato_2"
import { Canvas, useFrame } from "@react-three/fiber"
import { ContactShadows } from "@react-three/drei";

gsap.registerPlugin(ScrollTrigger);

const ProduceTomato = ({ triggerRef }) => {
    const tomatoRef = useRef(null);
    const spinRef = useRef(null);

    useFrame((state,delta)=>{
        if(!spinRef.current) return;

        spinRef.current.rotation.y += delta*0.8
    })

    useEffect(() => {
        const tomato = tomatoRef.current;
        const section = triggerRef.current;

        if (!tomato || !section) return;

        // Context cleans up this component's GSAP work on unmount
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top 72%",
                    toggleActions: "play none none reverse",
                },
            });

            // Top-right → centre
            tl.to(
                tomato.position,
                {
                    x: 0,
                    y: 0,
                    z: 0,
                    duration: 1.4,
                    ease: "power4.out",
                },
                0
            )
                .to(
                    tomato.scale,
                    {
                        x: 1,
                        y: 1,
                        z: 1,
                        duration: 1.4,
                        ease: "back.out(1.2)",
                    },
                    0
                )
                .to(
                    tomato.rotation,
                    {
                        x: 0,
                        y: 0,
                        z: 0,
                        duration: 1.4,
                        ease: "power3.out",
                    },
                    0
                );
        }, section);

        return () => ctx.revert();
    }, [triggerRef]);

   return (
  <group
    ref={tomatoRef}
    position={[4.2, 0.02, 0]}
    rotation={[0.4, 1.2, 0.6]}
    scale={0.3}
  >
    <group ref={spinRef}>
      <Tomato_2 scale={0.55} />
    </group>
  </group>
);
}




const ValueOfferSection = () => {
    const sectionRef = useRef(null);

    return (
        <section
            ref={sectionRef}
            className="min-h-screen overflow-hidden ">
            <div className="font-bold lg:text-6xl place-self-center mt-10">
                Produce is the PRODUCT
            </div>
            <div className="h-[420px] w-full md:h-[520px]">
                <Canvas camera={{ position: [0, 0, 5], fov: 35 }}>
                    <ambientLight intensity={1.2} />

                    <directionalLight
                        position={[4, 5, 4]}
                        intensity={2.5}
                    />

                    <ProduceTomato triggerRef={sectionRef} />

                    <ContactShadows
                        position={[0, -2.4, 0]}
                        opacity={0.35}
                        blur={2.5}
                        scale={4}
                        far={4}
                    />
                </Canvas>
            </div>
        </section>
    )
}

export default ValueOfferSection;

