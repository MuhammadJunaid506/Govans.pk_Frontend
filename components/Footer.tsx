import { Block5, FB, Insta, Logo, Yt, twit } from '@/assets/images'
import Image from 'next/image'
import React, {FC} from 'react'
import Button from './Button'

const Footer: FC = () => {
  return (
    <>
    <div className='bg-[#083d55] p-0 sm:p-20 w-full grid grid-cols-4 text-white'>
        <Image src={Logo} width={200} alt=''/>
        <ul className='space-y-5'>
        <li>SCHOOLS</li>
        <li>FAMILIES</li>
        <li>GIFT CARDS</li>
        <li>ABOUT</li>
        <li>CONTACT US</li>
        <li>COMMUNITY GUIDELINES</li>
        </ul>
        <ul className='space-y-5'>
        <li>SCHOOLS</li>
        <li>FAMILIES</li>
        <li>GIFT CARDS</li>
        <li>ABOUT</li>
        <li>CONTACT US</li>
        <li>COMMUNITY GUIDELINES</li>
        </ul>
        <div>
            <h4 className='text-3xl leading-snug font-extrabold mb-4'>Need It Help <br/>Subscribe to our Govans Newsletter</h4>
            <input type='text' name='email' placeholder='Enter Your Email' className='mb-8 p-3 '/>
            <div className='flex flex-wrap gap-6'>
            <Image src={FB}   alt='GoBlock5s' />
            <Image src={Insta} alt='GoBlock5s' />
            <Image src={twit}   alt='GoBlock5s' />
            <Image src={Yt}  alt='GoBlock5s' />
            </div>
        </div>
    </div>
            <div className='flex justify-around w-full bg-[#163c4e] text-white'>
            <div className='flex flex-wrap gap-6'>
            <Image src={FB}   alt='GoBlock5s' />
            <Image src={Insta}  alt='GoBlock5s' />
            <Image src={twit}   alt='GoBlock5s' />
            <Image src={Yt}  alt='GoBlock5s' />
            </div>
            <p className=''>© 2021 All Rights Reserved | Mariana Tech Solutions</p>
            <p className=''>Privacy Policy</p>
        </div>
        </>
  )
}

export default Footer
