import { Airport, Block5, Corporate, Trip, Wedding } from '@/assets/images'
import Image from 'next/image'
import React, {FC} from 'react'
import Button from './Button'

const OccasionTabs:FC = () => {
  return (
    <div className='p-0 sm:p-20 w-full'>
      <h2 className='text-5xl leading-snug text-[rgb(8,61,85)] font-extrabold mt-4 mb-4 text-center'>Tailored Transport Excellence for Every Occasion</h2>
      <p className='text-[#083d55] text-2xl mt-4'>Elevate your events, be it weddings, corporate functions, picnics, or airport transfers, with our customized transportation services. Experience seamless, stylish, and punctual journeys tailored to meet your unique needs.</p>
      <div className='flex gap-6 justify-evenly mb-12 mt-12'>
      <div className=' bg-white shadow-sm shadow-white rounded'>
        <Image src={Wedding} alt='' width={500}/>
        <p className='text-[#083d55] text-2xl mt-4 text-center'>Wedding</p>
        </div>
        <div className=' bg-white shadow-sm shadow-white rounded'>
        <Image src={Corporate} alt='' width={500}/>
        <p className='text-[#083d55] text-2xl mt-4 text-center'>Corporate</p>
        </div>
        <div className=' bg-white shadow-sm shadow-white rounded'>
        <Image src={Trip} alt='' width={500}/>
        <p className='text-[#083d55] text-2xl mt-4 text-center'>Trip</p>
        </div>
        <div className=' bg-white shadow-sm shadow-white rounded'>
        <Image src={Airport} alt='' width={500}/>
        <p className='text-[#083d55] text-2xl mt-4 text-center'>Airport</p>
        </div>
        </div>
      </div>
  )
}

export default OccasionTabs
