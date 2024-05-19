import React,{FC} from 'react'
import Button from './Button'
import HeroSection from './HeroSection'
import { Block5 } from '@/assets/images'

const FirstSection: FC = () => {
  return (
    <div className='items-center' >
        <h2 className='text-4xl leading-snug text-[#083d55] font-extrabold mt-4 mb-4 text-center'>How It Works</h2>
        <HeroSection Heading='Step 1' Text='You need transportation for students who don’t fit on traditional bus routes or need a little extra help.' ImageProp={Block5} Btn='' RowReversse={true}/>
        <HeroSection Heading='Step 2' ImageProp={Block5} Btn='' RowReversse={false} Text='Easily set up one-time and repeating rides for students in the HopSkipDrive Platform — rides are guaranteed.'/>
        <HeroSection Heading='Step 6' ImageProp={Block5} Btn='' RowReversse={false} Text=''/>
        <HeroSection Heading='Step 3' ImageProp={Block5} Btn='' RowReversse={true} Text='Pickup notes and multi-factor authentication ensure students and CareDrivers safely find each other.'/>
        <HeroSection Heading='Step 4' ImageProp={Block5} Btn='' RowReversse={false} Text="Get alerts for each stage of the ride and view the ride as it's happening Parents or caregivers on the child’s account also get alerts for added visibility and safety."/>
        <HeroSection Heading='Step 5' ImageProp={Block5} Btn='' RowReversse={true} Text='HopSkipDrive Safe Ride Support system tracks each ride in real-time, proactively addressing any issues. Our Client Success Team is there each step of the way, from set-up to reporting.'/>
        <div className='w-full flex justify-center mb-8'><Button Text={""}/></div>
      
    </div>
  )
}

export default FirstSection
