import { useNavigate } from 'react-router-dom'
import Button from './ui/buttonV2'

const RelatableComp = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-white'>
        <div className='flex items-center justify-center py-20 gap-60'>
            <img src="/monitioring.png" height={392} width={463} />
            <div className='flex flex-col gap-3'>
                <span className='text-3xl text-black font-semibold'>Feels <span className='text-[#7979DC]'>Relatable?</span></span>
                <span className='max-w-52 text-black'>50% of Indians find health insurance complex and cryptic</span>
                <div className='mt-20'>
                    <Button text="Chat Now" className='rounded-full py-2 px-9 bg-[#7979DC] text-white' onClick={()=>navigate('/chat')} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default RelatableComp