import Image from 'next/image'
import React from 'react'
import { Bodoni_Moda} from "next/font/google";

const bodoni = Bodoni_Moda({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-bodoni_moda" });

const MenuItem = ({imgSrc, name, desc, price}) => {
  return (
    <div className='flex items-center gap-4'>
        {/* img */}
        <div className='relative w-[60px] h-[60px] xl:w-[72px] xl:h-[72px] rounded-full'>
         <Image src={imgSrc} fill priority alt='menu' quality={100} className='object-cover' />
        </div>
        {/* text */}
        <div className='flex flex-col flex-1 gap-2'>
            <div className='flex justify-between gap-4 items-baseline'>
                {/* name */}
                <p className={`${bodoni.variable} uppercase font-semibold text-[20px] leading-none text-secondary`}>{name}</p>
                {/* border */}
                <div className='flex-1 border-b border-dashed border-secondary'></div>
                {/* price */}
                <p className='leading-none font-semibold text-[20px] text-secondary'>{price.toFixed(2)}</p>
                {/* description */}
            </div>
                <p className='text-primary'>{desc}</p>
        </div>
    </div>
  )
}

export default MenuItem