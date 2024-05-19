import { Block5 } from '@/assets/images'
import Image from 'next/image'
import React, {FC} from 'react'
import Button from './Button'

const Partnership: FC = () => {
  return (
    <div className='bg-[#ddd] p-0 sm:p-20 w-full'>
      <div className='flex gap-6 justify-evenly mb-6'>
        <div className='p-10 bg-white shadow-sm shadow-white rounded w-1/2'>
            <h3 className='text-3xl leading-snug text-[#083d55] font-extrabold mt-4 mb-4 text-center'>We Partner With</h3>
            <div className='flex flex-wrap justify-center gap-8'>
            <Image src={Block5}  width={200} alt='GoBlock5s' />
            <Image src={Block5}  width={200} alt='GoBlock5s' />
            <Image src={Block5}  width={200} alt='GoBlock5s' />
            <Image src={Block5}  width={200} alt='GoBlock5s' />
            </div>
        </div>
        <div className='p-10 bg-white shadow-sm shadow-white rounded w-1/2'>
            <h3 className='text-3xl leading-snug text-[#083d55] font-extrabold mt-4 mb-4 text-center'>We Partner With</h3>
            <div className='flex flex-wrap justify-center gap-8'>
            <Image src={Block5}  width={200} alt='GoBlock5s' />
            <Image src={Block5}  width={200} alt='GoBlock5s' />
            <Image src={Block5}  width={200} alt='GoBlock5s' />
            <Image src={Block5}  width={200} alt='GoBlock5s' />
            </div>
        </div>
      </div>
      <p className='text-[#083d55] text-2xl text-center justify-center'>Contact us today to join the thousands of district communities, schools, non-profits, and government agencies that we support through safe, reliable student transportation.</p>
      <div className='w-full flex justify-center mt-8 mb-8'><Button Text={"Contact Us"}/></div>
      <hr/>
    </div>
  )
}

export default Partnership
