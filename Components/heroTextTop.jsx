"use client"
import styles from './styles.module.css'

const heroTextContent = {
  title: "Become a farmer Without Land",
  subtitle: "Invest in agricultural projects and earn returns without owning land or managing a farm"
}

const HeroTextTop = () => {
  return (
    <div className="lg:mt- lg:ml-20 lg:transform lg:translate-x-7">
      <div className={`relative lg:mt-5  `}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.1 -0.1 681.8 442.8">
          <path d="M 31 0 L 672 0 C 681 2 685 10 678 23 L 625 232 C 623 240 614 246 609 244 L 454 260 C 445 260 439 267 437 276 L 402 432 C 397 441 391 444 377 442 L 13 361 C 2 360 0 354 0 345 L 1 23 C 6 9 14 0 29 0" stroke="#000000" strokeWidth="0.1" fill="#BBF451
"/>
        </svg>

        <div className='absolute inset-0 flex flex-col justify center mx-8'>
          <h1 className='lg:text-6xl py-5 font-bold mt-3'>
            Become <span className='bg-white rounded-sm px-2 py-0'> a farmer</span> without <span className='italic ]'>Land</span>. 
          </h1>
          <p className='lg:text-xl text-[black]/70 transform lg:px-5'>
            Invest in agricultural projects <br/> and earn returns without owning <br/> land or managing a farm.
          </p>

          <button className='self-start px-3 font-bold lg:text:sm rounded-md py-2 my-2 mx-3 bg-white '>
            Get Started
          </button>
        </div>
      </div>
    </div>

  )
}

export default HeroTextTop;