import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const links = [
    {href: "/", name: "Home"},
    {href: "/", name: "Explore"},
    {href: "/", name: "About"},
    {href: "/", name: "Menu"},
    {href: "/", name: "Contact"},
]

import {FaYoutube, FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-footer bg-cover bg-no-repeat pt-16 relative'>
        {/* overlay */}
        <div className='absolute w-full h-full bg-secondary/[0.90] z-10 top-0'></div>
        <div className='container mx-auto z-20 relative'>
            <div className='flex flex-col items-center justify-center gap-4'>
                {/* logo */}
                <Link href={"/"} className='relative w-[120px] h-[150px] mx-auto'>
                    <Image src={"/assets/logo.png"} fill alt='logo' className='object-contain' />
                </Link>
                {/* nav */}
                <nav className='flex flex-col xl:flex-row gap-8 xl:gap-12 justify-center items-center'>
                    {links.map((link,index) => {
                        return (
                            <Link href={link.href} key={index} className='uppercase text-accent tracking-widest hover:text-primary transition-all'>
                                {link.name}
                            </Link>
                        )
                    })}
                </nav>
                {/* social */}
                <ul className='flex gap-10 text-xl text-white'>
                    <Link href={"/"} className='w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-primary transition-all'>
                    <FaYoutube />
                    </Link>
                    <Link href={"/"} className='w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-primary transition-all'>
                    <FaFacebookF />
                    </Link>
                    <Link href={"/"} className='w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-primary transition-all'>
                    <FaTwitter />
                    </Link>
                    <Link href={"/"} className='w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-primary transition-all'>
                    <FaInstagram />
                    </Link>
                </ul>
                {/* copyright */}
                <div className='border-t border-white/10 text-[15px] text-accent/70 font-light w-full flex items-center justify-center py-6'>
                    <p>&copy; Copyright 2024 - SipSpot Coffee Shop. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer