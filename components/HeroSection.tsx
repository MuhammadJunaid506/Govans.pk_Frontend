"use clients"
import { Block5, Van } from '@/assets/images'
import Image from 'next/image'
import React, {FC} from 'react'


interface Hero {
    Heading : string,
    Text : string,
    ImageProp? : any
    RowReversse?:boolean,
    Btn?:any
    BtnText?:string
}

const HeroSection: FC<Hero> = ({Heading, Text , ImageProp , RowReversse, Btn, BtnText}) => {
  const style: React.CSSProperties = {
    flexDirection: RowReversse ? "row-reverse" : "row"
  }
  return (
    <div className='p-0 sm:p-8 flex w-full' style={style}>
      <div className='w-1/2'>
        <Image className='w-full h-96' src={ImageProp ? ImageProp :Block5} width={300} alt='govans'/>
      </div>
      <div className='w-1/2 p-0 sm:p-20'>
            <h2 className='text-5xl leading-snug text-[#083d55] font-extrabold mt-4 mb-4'>{Heading ? Heading :""}</h2>
            <p className='text-[#083d55] text-2xl mb-4'>{Text ? Text :"Govans is the leader in innovative, scalable school transportation solutions.  Our solution complements school transportation, meeting specialized needs and solving for school bus driver shortages."}</p>
            {Btn && <div className='w-full flex justify-center mb-8'><Btn Text={BtnText}/></div>}
        </div>
    </div>
  )
}

export default HeroSection
