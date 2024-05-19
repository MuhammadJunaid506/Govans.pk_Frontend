import Image from 'next/image'
import React, {FC} from 'react'

const CompletedRides:FC = () => {
  return (
<div className='bg-[#083d55] p-0 sm:p-20 w-full text-white'>
      <h2 className='text-4xl leading-snug font-extrabold mt-4 mb-4 text-center'>Efficient Commute Solutions: Linking Thousands with Dependable Transportation</h2>      
      <p className=' text-2xl mt-4 text-center'>Experience excellence in transportation as we proudly connect numerous clients and employees through our extensive network of reliable routes.</p>
      <div className='flex gap-6 justify-evenly mb-12 mt-6'>
      <div className='p-10 w-1/3'>
        <h2 className='text-6xl leading-snug font-extrabold mt-4 mb-4 text-center'>2k+</h2>
        <p className=' text-2xl mt-4 text-center text-black'>Total Rides with Govans</p>
        </div>
        <div className='p-10 w-1/3'>
        <h2 className='text-6xl leading-snug font-extrabold mt-4 mb-4 text-center'>1k+</h2>
        <p className=' text-2xl mt-4 text-center text-black'>SAFE MILES DRIVEN</p>
        </div>
        <div className='p-10 w-1/3'>
        <h2 className='text-6xl leading-snug font-extrabold mt-4 mb-4 text-center'>2k+</h2>
        <p className=' text-2xl mt-4 text-center text-black'>Customer Satisfaction</p>
        </div>
        </div>
      </div>
  )
}

export default CompletedRides
