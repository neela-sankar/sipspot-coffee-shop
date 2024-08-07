import Image from 'next/image'
import React from 'react'
import Badge from './Badge'
import Separator from './Separator'
import { Bodoni_Moda} from "next/font/google";

const bodoni = Bodoni_Moda({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-bodoni_moda" });


const OpenHours = () => {
  return (
    <section className='flex bg-secondary h-[60vh] xl:h-[80vh]'>
        {/* 1 */}
        <div className='hidden relative xl:flex flex-1 justify-center items-center'>
            {/* overlay */}
            <div className='w-full h-full absolute z-40 top-0 bg-secondary/60'></div>
            <Image src={"/assets/opening-hours/img.jpeg"} fill priority alt='openinghours' quality={100} className='object-cover' />
            <Badge containerStyles="w-[320px] h-[320px] absolute z-40" />
        </div>
        {/* 2 */}
        <div style={{ backgroundImage: "url('/assets/opening-hours/bg.png')" }} className='flex-1 bg-opening_hours bg-cover bg-no-repeat flex flex-col justify-center items-center relative'>
            {/* overlay */}
            <div className='w-full h-full absolute top-0 bg-secondary/[0.80] z-10'></div>
            {/* text & images */}
            <div className='z-20 flex flex-col items-center justify-center'>
                <h2 className={`h2 text-white mb-4 ${bodoni.variable}`}>Opening Hours</h2>
                <Separator bg='accent' />
                <div className='mt-12 relative w-[300px] h-[200px] xl:w-[470px] xl:h-[280px]'>
                    <Image src={'/assets/opening-hours/program-badge.svg'} fill className='object-contain' quality={100} priority alt='openinghours' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default OpenHours