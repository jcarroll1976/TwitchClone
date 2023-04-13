import Link from 'next/link'
import React from 'react'
import logo from "../public/assets/logo.png"
import Image from 'next/image';



export default function Navbar() {
  return (
    <div className='fixed h-14 w-full flex flex-nowrap items-center p-4 bg-[#0e0e10] mb-[2px] z-10'>
      {/*Left Side*/}
      <div className='flex grow items-center justify-start'>
        <Link href='/'>
            <Image src={logo} alt='/' width='36' height='36' className='cursor-pointer z-10' />
        </Link>
      </div>
      {/*Middle*/}
      {/*Right Side*/}
    </div>
  )
}
