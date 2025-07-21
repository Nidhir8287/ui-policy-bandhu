import { LinkedinIcon } from 'lucide-react'
import React from 'react'

function MeetTheFounders() {
  return (
    <div className='py-20 bg-[#F3F3FF] flex flex-col'>
        <span className='font-medium flex justify-center text-4xl text-black'>
            Meet the brains
            <span className='text-[#7979DC] ml-2'>behind</span>
        </span>
        <div className='flex justify-center gap-44 px-24 py-20'>
            <div className=''>
                <img src="/shikhar.png" className='rounded-md' />
                <a
                  className="flex items-center cursor-pointer w-fit h-fit"
                  href="https://www.linkedin.com/in/shikhar2srivastava2/"
                  target="_blank"
                >
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                        className="w-12 h-12 relative left-36 -top-7"
                    />
                </a>
                <div className='flex flex-col gap-2 items-center justify-center'>
                    <span className='text-[#E6853D]'>Shikhar Srivastav</span>
                    <span className='text-black'>“Curious by nature”</span>
                </div>
                
            </div>
            <div className='flex flex-col items-center justify-center'>
                <div>
                    <img src="/nidhi.png" className='rounded-md' />
                    <a
                    className="flex items-center cursor-pointer"
                    target="_blank"
                    href="https://www.linkedin.com/in/nidhi-rajput-kumar/"
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                            className="w-12 h-12 relative left-36 -top-7"
                        />
                    </a>
                </div>
                <div className='flex flex-col gap-2 items-center justify-center w-fit h-fit'>
                    <span className='text-[#E6853D]'>Nidhi Rajput</span>
                    <span className='text-black'>“Thinking beyond the box”</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MeetTheFounders