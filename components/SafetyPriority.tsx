import React, {FC} from 'react'
import HeroSection from './HeroSection'
import { Maap } from '@/assets/images'


interface safety {
    Heading: string,
    Btn?:any,
    BtnText:string
}

const SafetyPriority:FC<safety> = ({Heading, Btn, BtnText}) => {
  return (
    <div className='p-0 sm:p-8 w-full'>
        <h2 className='text-5xl leading-snug text-[#083d55] font-extrabold mt-4 mb-4 text-center'>{Heading ? Heading:"Safety is Our #1 Priority"}</h2>
        <HeroSection Text="" ImageProp={""} Heading="" RowReversse={false} Btn={Btn} BtnText={BtnText}/>
    </div>
  )
}

export default SafetyPriority
