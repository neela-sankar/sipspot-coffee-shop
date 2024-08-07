import React, { useLayoutEffect, useRef } from 'react'
import Badge from './Badge'
import Separator from './Separator'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Bodoni_Moda} from "next/font/google";
import Image from 'next/image';
import gsap from 'gsap';

const bodoni = Bodoni_Moda({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-bodoni_moda" });


const data = [
    {
        imgSrc: "/assets/about/photo-1.jpg",
        title: "Our Journey",
        desc: "Founded in 2000, SipSpot Coffee Shop started as a small café with a vision for exceptional coffee. Now a beloved brand, we're known for quality and sustainability. Driven by passion, we create memorable coffee experiences. Join us in exploring coffee, one cup at a time."
    },
    {
        imgSrc: "/assets/about/photo-2.jpg",
        title: "Our Promise",
        desc: "At SipSpot Coffee Shop, we promise the finest coffee with a positive impact. We source beans from sustainable farms, respecting people and the planet. Our meticulous roasting ensures a rich, satisfying experience. We are committed to quality, sustainability, and community."
    },
    {
        imgSrc: "/assets/about/photo-3.jpg",
        title: "Our Team",
        desc: "At SipSpot Coffee Shop, our dedicated team is behind every great cup. Our skilled baristas and expert roasters work with passion and precision, making each coffee experience special. Meet the people who bring creativity and care to every cup and learn their unique stories."
    },

]

const About = () => {
    const scrollableSectionRef = useRef(null)
    const scrollTriggerRef = useRef(null)

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const animation = gsap.fromTo(
            scrollableSectionRef.current,
            {translateX: 0},
            {
                translateX: "-200vw",
                ease: "none",
                duration: 1,
                scrollTrigger: {
                    trigger: scrollTriggerRef.current,
                    start: "top top",
                    end: "1800vw top",
                    scrub: 0.6,
                    pin: true,
                }
            }
        )

        return () => {
            animation.kill()
        }
    }, [])

  return (
    <section className='overflow-hidden bg-secondary'>
        <div ref={scrollTriggerRef}>
            <div ref={scrollableSectionRef} className='h-screen w-[300vw] flex relative'>
                {data.map((item,index) => {
                    return (
                        <div key={index} className='w-screen h-screen flex flex-col justify-center items-center relative'>
                            <div className='container mx-auto'>
                                <div className='flex gap-[30px] relative'>
                                    {/* text */}
                                    <div className='flex-1 flex flex-col justify-center items-center'>
                                     <Badge containerStyles="w-[180px] h-[180px]" />
                                     <div className='max-w-[560px] text-center'>
                                        {/* title */}
                                        <h2 className={`h2 text-accent mb-4 ${bodoni.variable}`}>
                                            <span className='mr-4'>{item.title.split(" ")[0]}</span>
                                            <span className='text-primary'>{item.title.split(" ")[1]}</span>
                                        </h2>
                                        {/* separator */}
                                        <div className='mb-8'>
                                        <Separator />
                                        </div>
                                        {/* decription */}
                                        <p className='leading-relaxed mb-16 px-8 xl:px-0 text-white'>
                                            {item.desc}
                                        </p>
                                        {/* btn */}
                                        <button className='btn'>See More</button>
                                     </div>
                                    </div>
                                    {/* image */}
                                    <div className='hidden xl:flex flex-1 w-full h-[70vh] relative'>
                                        <Image src={item.imgSrc} fill className='object-cover rounded-2xl ' quality={100} priority alt='about' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default About