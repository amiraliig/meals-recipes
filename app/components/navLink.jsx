'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLink = ({ children, href }) => {
    const path = usePathname()
    return (
        <Link href={href} className={path.startsWith(href) ? `text-[#ff9100] [text-shadow:_0_2px_8px_#ff9100]  text-xl  leading-snug font-manrope font-extrabold` : null}>
            {children}
        </Link>
    )
}

export default NavLink