import { Van } from '@/assets/images'
import Image from 'next/image'
import React,{FC} from 'react'
import Button from './Button'

interface BannerType{
  Heading:string,
  Text:string,
  Btn: boolean
}

const Banner: FC <BannerType> = ({Heading, Text, Btn=true}) => {
  return (
    <div className='h-600 flex p-0 sm:p-8 mt-20'>
        <div className='h-[100%] p-4 place-items-center align-middle flex-1 w-300'>
            <h1 className='text-5xl leading-snug text-[#083d55] font-extrabold mt-4 mb-4'>{Heading ? Heading :""}</h1>
            <p className='text-[#083d55] text-2xl mb-6'>{Text ? Text :""}</p>
           {Btn && <Button Text=''/>}
        </div>
        <div className='justify-center'>
            <Image src={Van}  width={450} alt='Govans' />
        </div>
      
    </div>
  )
}

export default Banner
