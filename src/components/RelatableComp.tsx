import Button from './ui/buttonV2'

const RelatableComp = ({ openChat }) => {
  return (
    <div className='bg-white'>
        <div className='flex items-center justify-center py-20 gap-60'>
            <img src="public/monitioring.png" height={392} width={463} />
            <div className='flex flex-col gap-3'>
                <span className='text-3xl text-black font-semibold'>Feels <span className='text-[#7979DC]'>Relatable?</span></span>
                <span className='max-w-52 text-black'>23% health insurance policy buyers in india fell lost while buying health insurance</span>
                <div className='mt-20'>
                    <Button text="Chat Now" className='rounded-full py-2 px-9 bg-[#7979DC] text-white' onClick={openChat} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default RelatableComp