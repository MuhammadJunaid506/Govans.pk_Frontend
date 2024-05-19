
"use client"
import Image from 'next/image';
import Link from 'next/link';
import React,{useContext, useState} from 'react';
import { FC } from 'react';
import { AuthContext } from "@/context/AuthContext"
import {Logo} from "@/assets/images"
import Button from './Button';
import { Router } from 'next/router';

const Navbar: FC = () => {
    const { user } = useContext(AuthContext);
  return (
    <>
    <nav className="bg-white p-4 text-[#083d55] shadow-slate-600 shadow-md fixed w-full top-0 ">
      <div className="container mx-auto h-[10vh] grid grid-cols-3 place-content-center align-middle">
        <Image src={Logo} width={50} alt="Govans" className='p-3 ml-2 max-h-[8vh]'/>
        <div className='flex justify-around text-center flex-1 col-span-2'>
        <ul className="flex space-x-4 text-[#083d55] text-center font-bold">
          <li className='text-center'>
            <Link href="/">
              ABOUT
            </Link>
          </li>
          <li>
            <Link href="/about">
                CORPORATE
            </Link>
          </li>
          <li>
            <Link href="/event">
                EVENT
            </Link>
          </li>
          <li>
            <Link href="/academic">
                ACADEMIC
            </Link>
          </li>
          <li>
            <Link href="/driver">
                DRIVER
            </Link>
          </li>
          <li>
            <Link href="/blog">
                BLOG
            </Link>
          </li>
          <li>
            <Link href="/contact">
                CONTACT
            </Link>
          </li>
          {!user ? (<li>
            <Link href="/login">
                <button>Login</button>
            </Link>
          </li>) : null }
        </ul>
        <button  className='p-3 bg-[#083d55] rounded-lg shadow-sm shadow-[#083d55] text-white inline-block'>Book Now</button>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;

