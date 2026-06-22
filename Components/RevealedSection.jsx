import { forwardRef } from 'react'
import Image from 'next/image';

const RevealedSection = forwardRef(function RevealedSection(props, ref) {
    return (
        <div
            ref={ref}
            className='absolute inset-0  opacity-0
    scale-0 grid lg:grid-cols-2 mt-10'
        >
            <div className='flex justify-center'>
                <div className='relative bg-[#35530E] w-[20rem] h-[20rem] rounded-full' />
                <Image
                src='/farmerImage.webp'
                alt='farmer-carrying-fruits'
                width={500}
                height={500}
                className='w-[25rem] h-[25rem] object-cover transform translate-x-30 absolute inset-0 '
                />
            </div>
            <div className=' inset-0 justify center'>
                <h1
                    className='lg:text-6xl '
                >
                    Most young people never own farmland
                </h1>
            </div>

        </div>
    )
});

export default RevealedSection;
