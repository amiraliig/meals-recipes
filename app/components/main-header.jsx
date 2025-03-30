import React from 'react'
import Link from 'next/link'
import image from "@/public/logo.png"
import Image from 'next/image'
import NavLink from './navLink'
const MainHeader = () => {
    return (
        <div className=' items-center  text-lg font-bold text-amber-900 shadow-lg justify-around item-center hidden md:flex'>
            <Link href={'/'} className='flex items-center'>
                <Image src={image} alt="" className='size-28' priority />
                <h2>BURGERZILLA</h2>
            </Link>
            <div className='flex justify-between w-1/4'>
                <NavLink href={`/meals`} className='text-center' >MEALS</NavLink>
                <NavLink href={`/community`} className=''>COMMUNITY</NavLink>

            </div>
        </div>
    )
}

export default MainHeader