import Image from 'next/image'
import React from 'react'
import { Bodoni_Moda} from "next/font/google";

const bodoni = Bodoni_Moda({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-bodoni_moda" });


const Explorer = () => {
  return (
    <section className='py-12 xl:py-0 xl:h-[90vh] xl:w-screen'>
        <div className='container mx-auto xl:w-full xl:h-full flex xl:justify-center xl:items-center'>
            <div className='w-full flex flex-col lg:flex-row gap-12 xl:gap-20'>
                <div className='flex-1 flex flex-col justify-around text-center xl:text-left gap-12 xl:gap-0 max-w-[400px] mx-auto xl:max-w-none xl:mx-0'>
                    {/* item1 */}
                    <div className='relative flex items-start'>
                        <div className='xl:max-w-[420px] xl:text-right xl:flex xl:flex-col xl:items-end'>
                            <div className='mb-6 flex justify-center items-center'>
                                <Image src={'/assets/explore/coffees/coffee-1.svg'} width={56} height={56} alt='menu' />
                            </div>
                            <h3 className={`text-2xl xl:text-3xl font-bold mb-4 ${bodoni.variable}`}>Rich Espresso Blends</h3>
                            <p className='max-w-[400px] text-primary'>Indulge in the deep, robust flavors of our expertly crafted espresso blends. Perfect for a quick pick-me-up or a leisurely afternoon treat.</p>
                        </div>
                    </div>
                    {/* item2 */}
                    <div className='relative flex items-start'>
                        <div className='xl:max-w-[420px] xl:text-right xl:flex xl:flex-col xl:items-end'>
                            <div className='mb-6 flex justify-center items-center'>
                                <Image src={'/assets/explore/coffees/coffee-2.svg'} width={56} height={56} alt='menu' />
                            </div>
                            <h3 className={`text-2xl xl:text-3xl font-bold mb-4 ${bodoni.variable}`}>Classic Drip Coffee</h3>
                            <p className='max-w-[400px] text-primary'>Enjoy the comforting taste of our classic drip coffee, brewed to perfection. A timeless choice for coffee enthusiasts who appreciate simplicity.</p>
                        </div>
                    </div>
                </div>
                {/* image */}
                <div className='hidden xl:flex justify-center'>
                    <div className='relative w-[250px] h-[600px]'>
                    <Image
                    src='/assets/explore/sipcup.png'
                    alt='cup' fill className='object-cover' quality={100} priority data-scroll data-scroll-speed="0.1"
                    />
                    </div>
                </div>
                <div className='flex-1 flex flex-col justify-around items-end text-center xl:text-left gap-12 xl:gap-0 max-w-[400px] mx-auto xl:max-w-none xl:mx-0'>
                    {/* item3 */}
                    <div className='relative flex items-start'>
                        <div className='xl:max-w-[420px] xl:text-left xl:flex xl:flex-col xl:items-start'>
                            <div className='mb-6 flex justify-center items-center'>
                                <Image src={'/assets/explore/coffees/coffee-3.svg'} width={56} height={56} alt='menu' />
                            </div>
                            <h3 className={`text-2xl xl:text-3xl font-bold mb-4 ${bodoni.variable}`}>Smooth Cold Brews</h3>
                            <p className='max-w-[400px] text-primary'>Refresh yourself with our smooth and invigorating cold brew options. Ideal for those warm days when you need a cool, caffeinated boost.</p>
                        </div>
                    </div>
                    {/* item4 */}
                    <div className='relative flex items-start'>
                        <div className='xl:max-w-[420px] xl:text-left xl:flex xl:flex-col xl:items-start'>
                            <div className='mb-6 flex justify-center items-center'>
                                <Image src={'/assets/explore/coffees/coffee-4.svg'} width={56} height={56} alt='menu' />
                            </div>
                            <h3 className={`text-2xl xl:text-3xl font-bold mb-4 ${bodoni.variable}`}>Flavorful Latte Varieties</h3>
                            <p className='max-w-[400px] text-primary'>Experience the rich and creamy flavors of our diverse latte selections. From vanilla to caramel, we have a latte to suit every taste.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Explorer