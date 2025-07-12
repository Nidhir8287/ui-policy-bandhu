import React from 'react'
import Button from './ui/buttonV2'

function HeroSection() {
  return (
    <div className='bg-[#F3F3FF]'>
      <div className='mx-28 flex justify-between py-20'>
        <div className='flex flex-col'>
          <img src='public/logo-without-text.png' height={89} width={64} />
          <div className='flex flex-col gap-5'>
            <span className='text-5xl font-bold text-black'>Your Insurance</span>
            <span className='text-5xl font-bold text-[#8F8FEF]'>Simplified</span>
            <span className='text-xl text-black font-medium'>Ask Bandhu, Let the truth behind your policy <br /> -unlocked</span>
            <Button text="Start today for Free" className="bg-[#8F8FEF] text-whiterounded-full py-1 text-xl px-5 rounded-full text-white" />
          </div>
        </div>
        <div className='flex flex-col -mt-14'>
          <img src="public/chatGroup.png" />
        </div>
      </div>
    </div>
  )
}

export default HeroSection