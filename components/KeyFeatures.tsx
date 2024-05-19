import { Block5, Sevice, Steering } from '@/assets/images'
import Image from 'next/image'
import React,{FC} from 'react'
import Button from './Button'

const PlatformServices: FC = () => {
  return (
    <div className='p-0 sm:p-20 w-full'>
      <h2 className='text-5xl leading-snug text-[rgb(8,61,85)] font-extrabold mt-4 mb-4 underline decoration-gray-400'>Pivotal Features</h2>
      <div className='flex gap-6 justify-evenly mb-12 mt-12'>
      <div className=' w-1/3'>
        <Image src={Steering} alt='' width={500}/>
        <h3 className='text-3xl leading-snug text-[rgb(8,61,85)] font-extrabold mt-4 mb-4 '>Pair Cooling Zone</h3>
        <p className='text-[#083d55] text-2xl mt-4 '>Experience optimal comfort with our innovative Pair Cooling Zone, ensuring personalized and efficient climate control for a refreshing journey</p>
        </div>
        <div className=' w-1/3'>
        <Image src={Steering} alt='' width={500}/>
        <h3 className='text-3xl leading-snug text-[rgb(8,61,85)] font-extrabold mt-4 mb-4 '>Live Location Insights</h3>
        <p className='text-[#083d55] text-2xl mt-4 '>Stay informed and in control with our Live Location Monitoring feature, providing real-time tracking for instant updates on your journey</p>
        </div>
        <div className=' w-1/3'>
        <Image src={Steering} alt='' width={500}/>
        <h3 className='text-3xl leading-snug text-[rgb(8,61,85)] font-extrabold mt-4 mb-4 '>Instant Alerts</h3>
        <p className='text-[#083d55] text-2xl mt-4 '>Receive Instant Alerts for timely updates and important notifications, ensuring you stay well-informed throughout your journey</p>
        </div>
        </div>
        <div className='w-full flex justify-center mt-8 mb-8'><Button Text=''/></div>
      </div>
  )
}

export default PlatformServices
