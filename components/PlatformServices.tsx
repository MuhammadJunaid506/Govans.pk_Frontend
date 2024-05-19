import { Block5, Sevice, Steering } from '@/assets/images'
import Image from 'next/image'
import React,{FC} from 'react'
import Button from './Button'

const PlatformServices: FC = () => {
  return (
    <div className='bg-[#ddd] p-0 sm:p-20 w-full'>
      <h2 className='text-5xl leading-snug text-[rgb(8,61,85)] font-extrabold mt-4 mb-4 text-center'>You’ll Always Be in the Know</h2>
      <div className='flex gap-6 justify-evenly mb-12 mt-6'>
      <div className='p-10 bg-white shadow-sm shadow-white rounded w-1/3'>
        <Image src={Steering} alt='' width={250}/>
        <p className='text-[#083d55] text-2xl mt-4'>We have a direct line to drivers, which creates unparalleled transparency, visibility and communication between us, CareDrivers, Ride Organizers and users associated with a Rider’s account.</p>
        </div>
        <div className='p-10 bg-white shadow-sm shadow-white rounded w-1/3'>
        <Image src={Block5} alt='' width={250}/>
        <p className='text-[#083d55] text-2xl mt-4'>Our Platform enables Ride Organizers and users associated with a Rider’s account to track rides in real-time, and receive text and app notifications throughout the ride.</p>
        </div>
        <div className='p-10 bg-white shadow-sm shadow-white rounded w-1/3'>
        <Image src={Sevice} alt='' width={250}/>
        <p className='text-[#083d55] text-2xl mt-4'>We communicate status changes to you immediately, so you’re never in the dark. You can also call or chat us directly — our Support team is available to help!</p>
        </div>
        </div>
        <div className='w-full flex justify-center mt-8 mb-8'><Button Text=''/></div>
      </div>
  )
}

export default PlatformServices
