import Link from 'next/link'
import React from 'react'

import { type NavLinkType, navLinks } from '@/lib/navigation';

const NavBar = () => {
    return (
        <header className="flex justify-between items-center w-full max-w-page-width">
            {/* Brand */}
            <h1 className="font-bold text-lg">
                <Link href={'/'}>
                    Youssef al-Tai
                </Link>
            </h1>

            {/* Nav Links */}
            <ul className="flex items-center gap-12">
                {navLinks.map((navLink, i) => (<NavLink key={i} navLink={navLink} />))}
            </ul>
        </header>
    )
}

type NavLinkProps = { navLink: NavLinkType; }

const NavLink = ({ navLink: { label, href } }: NavLinkProps) => {
    return (
        <li>
            <Link href={href} className='hover:font-bold'>
                {label}
            </Link>
        </li>
    );
}

export default NavBar