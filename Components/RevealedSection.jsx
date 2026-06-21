import {forwardRef} from 'react'
import Image from 'next/image';

const RevealedSection = forwardRef(function RevealedSection(props,ref) {
return(
    <div
    ref={ref}
    className='relative grid lg:grid-cols-2'
    >
        <div className='absolute inset-0 justify center'>
           <div className=' relative bg-[#35530E] w-[40rem] h-[40rem] rounded-full '>
                <image 
                href=''
                className=''
                />
            </div> 
        </div>
    </div>
)
});