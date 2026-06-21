"use client"
import AvatarStack from './avatars'

import { forwardRef } from 'react'

const HeroTextBottom = forwardRef(function HeroTextBottom(props,ref) {
    const outlinePath =
        "M-18 1062 31-2822C23-2943 94-3029 206-3014L5793-1204C5867-1225 5983-1013 5912-914L5608 1117C5581 1349 5381 1395 5150 1380L298 1315C158 1326 7 1226-5 1062"

    return (
        <div
        ref={ref}
        className={`lg:w-[22rem]  lg:transform lg:translate-x-[6.2rem] lg:translate-y-[-6.5rem] scale-y-[0.75]  `}>
            <div className="relative">
                <svg
                    className={`self-start w-full h-auto `}
                    xmlns="http://www.w3.org/2000/svg" viewBox="-18.1 -3015.8 5952 4398">
                    <path
                        d={outlinePath}
                        fill="none"
                        stroke="#8F98A8"
                        strokeWidth="36"
                        strokeDasharray="170 120"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>

                <div className="absolute inset-0 justify center ">
                    <p className="lg:text-5xl font-bold mt-14 ml-10">
                        500+ <br />
                    </p>
                    <p className="font-bold lg:text-2xl ml-10">
                        Top investors
                    </p>

                    <div className='ml-10 mt-2'>
                        <AvatarStack />
                    </div>

                </div>
            </div>
        </div>


    )
});

export default HeroTextBottom
