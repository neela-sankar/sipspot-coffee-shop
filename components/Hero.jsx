"use client"
import React from 'react'
import Badge from './Badge'
import { Bodoni_Moda} from "next/font/google";
import Separator from './Separator';


const bodoni = Bodoni_Moda({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-bodoni_moda" });


const Hero = () => {
  return (
    <section className='h-[80vh] xl:h-screen relative text-accent'>
        {/* overlay */}
        <div className='bg-hero_overlay absolute w-full h-full z-10 bg-secondary/[0.93]'></div>
        {/* video */}
        <video autoPlay loop muted className='absolute top-0 left-0 w-full h-full object-cover' src="/assets/hero/video.mp4" type="video/mp4">
        Your browser does not support the video tag.
        </video>
        <div className='container mx-auto h-full flex flex-col xl:flex-row items-center z-30 relative'>
            {/* text */}
            <div data-scroll data-scroll-speed="0.4" className='flex-1 flex flex-col text-center justify-center items-center xl:pb-12 gap-10 h-full pt-32 md:pt-24 lg:pt-32 xl:pt-0'>
                {/* badge & h1 */}
                <div className='flex flex-col items-center '>
                    <Badge containerStyles="hidden xl:flex xl:w-[180px] xl:h-[180px]" />
                    <h1 className={`h1 text-white ${bodoni.variable}`}>
                        <span className='text-primary'>Coffee</span> & Delight
                    </h1>
                </div>
                {/* separator */}
                <Separator />
                <p className='lead font-light max-w-[300px] sm:max-w-[430px] xl:max-w-[560px] mb-4'>
                    Experience the joy of exceptional coffee in our cozy space, where every cup is crafted with passion and warmth
                </p>
                <button className="btn">Our Menu</button>
            </div>
        </div>
    </section>
  )
}

export default Hero