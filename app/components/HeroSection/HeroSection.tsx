import React from 'react'
import Image from "next/image"


const HeroSection = () => {
  return (
    <div className='bg-slate-900 w-full relative'>
      <Image
       src="/image/hero.png" 
       alt="hero"
      width={1920}
      height={900}
      className='object-cover'
      />
    </div>
  )
}

export default HeroSection
