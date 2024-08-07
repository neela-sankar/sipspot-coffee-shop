'use client'
import About from '@/components/About'
import Explorer from '@/components/Explorer'
import Hero from '@/components/Hero'
import Menu from '@/components/Menu'
import OpenHours from '@/components/OpenHours'
import Testimonials from '@/components/Testimonials'
import React, { useEffect } from 'react'

const Home = () => {

  /* locomotive scroll */
  useEffect (() => {
    const loeadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import ("locomotive-scroll")).default
      new LocomotiveScroll()
    }

    loeadLocomotiveScroll()
  }, [])

  return (
    <div className='h-full overflow-x-hidden'>
      <Hero />
      <Explorer />
      <About />
      <Menu />
      <OpenHours />
      <Testimonials />
      {/* temp div */}
{/*       <div className='h-[4000px]'></div> */}
    </div>
  )
}

export default Home