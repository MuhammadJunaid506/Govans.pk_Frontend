import React,{FC} from 'react'
import PlatformServices from './PlatformServices'
import Image from 'next/image'
import { Block5 } from '@/assets/images'
import Button from './Button'

const Proactive:FC = () => {
  return (
    <div className='bg-[#FFF8F5] p-0 sm:p-20 w-full'>
        <h2 className='text-6xl leading-snug text-[#083d55] font-extrabold mt-4 mb-4'>Proactive</h2>
        <p className='text-[#083d55] text-2xl mb-6'>We know that the best defense is a good offense.<br/><br/>That’s why our safety features and processes are proactive, not a reaction to issues that come up.</p>
      <div className='flex gap-6 justify-evenly mb-8 mt-6'>
      <div className='p-10  rounded w-1/3 text-center'>
        <Image src={Block5} alt='' width={250}/>
        <h3 className='text-2xl leading-snug text-[#083d55] font-extrabold mt-4 mb-4'>15-point CareDriver Certification Process</h3>
        <p className='text-[#083d55] text-lg mt-4 mb-6'>We have a direct line to drivers, which creates unparalleled transparency, visibility and communication between us, CareDrivers, Ride Organizers and users associated with a Rider’s account.</p>
        <Button Text='Learn More'/>
        <div className='p-5 mt-16 bg-[#083d55] shadow-sm shadow-[#083d55] rounded '>
        <h3 className='text-2xl leading-snug text-white font-extrabold mt-4 mb-4'>HopSkipDrive was found to be 71.9% safer when compared against all Global TNCs.</h3>
        </div>
        </div>
        <div className='p-10 mt-16rounded w-1/3 text-center'>
        <Image src={Block5} alt='' width={250}/>
        <h3 className='text-2xl leading-snug text-[#083d55] font-extrabold mt-4 mb-4'>Criteria to stay on the platform</h3>
        <p className='text-[#083d55] text-lg mt-4 mb-6'>Our Platform enables Ride Organizers and users associated with a Rider’s account to track rides in real-time, and receive text and app notifications throughout the ride.</p>
        <Button Text='Learn More'/>
        <div className='p-5 mt-16 bg-[#083d55] shadow-sm shadow-[#083d55] rounded '>
        <h3 className='text-2xl leading-snug text-white font-extrabold mt-4 mb-4'>CareDrivers were found to be 75.9% safer than all global drivers.</h3>
        </div>
        </div>
        <div className='p-10 rounded w-1/3 text-center'>
        <Image src={Block5} alt='' width={250}/>
        <h3 className='text-2xl leading-snug text-[#083d55] font-extrabold mt-4 mb-4'>Surpassing regulatory requirements</h3>
        <p className='text-[#083d55] text-lg mt-4 mb-6'>We communicate status changes to you immediately, so you’re never in the dark. You can also call or chat us directly — our Support team is available to help!</p>
        <Button Text='Learn More'/>
        <div className='p-5 mt-16 bg-[#083d55] shadow-sm shadow-[#083d55] rounded '>
        <h3 className='text-2xl leading-snug text-white font-extrabold mt-4 mb-4'>HopSkipDrive’s collision rate per mile driven was 140X lower than the national average.</h3>
        </div>
        </div>
        </div>
      </div>
  )
}

export default Proactive
