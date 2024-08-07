import React from 'react'
import Separator from './Separator'
import { Bodoni_Moda} from "next/font/google";
import MenuItem from './MenuItem';

const bodoni = Bodoni_Moda({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-bodoni_moda" });


const menuItems = [
    {
        imgSrc: "/assets/menu/coffee-1.png",
        name: "Espresso",
        desc: "Rich and bold shot of coffee",
        price: 3.3,
    },
    {
        imgSrc: "/assets/menu/coffee-2.png",
        name: "Cappuccino",
        desc: "Espresso with steamed milk and foam",
        price: 4.5,
    },
    {
        imgSrc: "/assets/menu/coffee-3.png",
        name: "Latte",
        desc: "Rich and steamed milk",
        price: 3.3,
    },
    {
        imgSrc: "/assets/menu/coffee-4.png",
        name: "Americano",
        desc: "Espresso with hot water",
        price: 3.5,
    },
    {
        imgSrc: "/assets/menu/coffee-5.png",
        name: "Mocha",
        desc: "Espresso with chocolate and steamed milk",
        price: 5.4,
    },
    {
        imgSrc: "/assets/menu/coffee-6.png",
        name: "Macchiato",
        desc: "Espresso with a dollop of foam",
        price: 3.75,
    },
    {
        imgSrc: "/assets/menu/coffee-7.png",
        name: "Flat White",
        desc: "Espresso with microfoam milk",
        price: 4.25,
    },
    {
        imgSrc: "/assets/menu/coffee-8.png",
        name: "Iced Coffee",
        desc: "Chilled Coffee over ice",
        price: 3.75,
    },
    {
        imgSrc: "/assets/menu/coffee-9.png",
        name: "Affogato",
        desc: "Espresso shot over vanilla ice cream",
        price: 5.5,
    },
    {
        imgSrc: "/assets/menu/coffee-10.png",
        name: "Irish Coffee",
        desc: "Coffee with Irish whiskey and cream",
        price: 6.5,
    },
]

const Menu = () => {
  return (
    <section className='pt-12 pb-16 xl:pt-16 xl:pb-36'>
        <div className='container mx-auto'>
            <div className='flex flex-col gap-4 mb-12 xl:mb-24'>
                <h2 className={`h2 text-center ${bodoni.variable}`}>Our Menu</h2>
                <div className='mb-4'>
                    <Separator bg='accent' />
                </div>
                <p className='text-center max-w-[620px] mx-auto text-secondary'>Explore a curated selection of gourmet coffee, artisan pastries, and hearty breakfast options, crafted to perfection.</p>
            </div>
            {/* menu & btn */}
            <div className='flex flex-col items-center gap-12 xl:gap-24'>
                {/* menu grid */}
                <div className='w-full grid grid-cols-1 xl:grid-cols-2 gap-y-8 gap-x-16 place-content-center'>
                    {menuItems.map((menu, index) => {
                        const {name, desc, price, imgSrc} = menu
                        return <MenuItem name={name} price={price} desc={desc} imgSrc={imgSrc} key={index} />
                    })}
                </div>
                <button className="btn hover:bg-secondary hover:text-white">View Full Menu</button>
            </div>
        </div>
    </section>
  )
}

export default Menu