import React, {useRef, useEffect} from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Profile from "../../public/images/profile/profile2.png"
import Image from 'next/image'
import { useMotionValue, useSpring, useInView } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null)

    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, { duration: 5000})
    const isInView = useInView(ref)

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])

    return <span ref={ref}></span>
}


export default function About() {
  return (
    <>
        <Head>
            <title>Brian Khoo | About Page</title>
            <meta name="description" content="any description you want" />
        </Head>

        <TransitionEffect />
        <main className="flex w-full flex-col items-center justify-center">
            <Layout className="pt-16">
            <AnimatedText text="Passion Fuels Purpose! " className="mb-16" />
            <div className="grid w-full grid-cols-8 gap-16">
                <div className="col-span-3 flex flex-col items-start justify-start">
                    <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">About Me</h2>
                    <p className="font-medium"> 
                    Hello! I'm Brian, a versatile full-stack web and app developer with a passion for crafting stunning web applications and intuitive user interfaces. Driven by innovation, I'm constantly seeking new ways to transform my clients' visions into reality.
                    </p>

                    <p className="font-medium my-4"> 
                    I firmly believe that software has the potential to address and efficiently solve our clients' challenges by creating intuitive and delightful user experiences. To me, design is more than just aesthetics; it's about streamlining the user experience and making it as seamless as possible. I am dedicated to harnessing the power of software to maximize efficiency and bridge the gap between technology and its users.                    </p>

                    <p className="font-medium"> 
                    Whether I'm developing a website, mobile app, or any other digital product, I bring my unwavering commitment to design excellence and user-centric thinking to every project I undertake. I eagerly anticipate the opportunity to apply my skills and enthusiasm to your next venture.
                    </p>
                </div>
                <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light ">   
                <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
                        <Image src={Profile} className="w-full h-auto rounded-2xl" priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>

                <div className="col-span-2 flex flex-col items-end justify-between">

                    <div className="flex flex-col items-end justify-center">
                        <span className="inline-block text-7xl font-bold">
                            <AnimatedNumbers value={20} />+ 
                        </span>
                        <h2 className="text-xl font-medium capitalize text-dark/75">Technologies Learned</h2>
                    </div>

                    <div className="flex flex-col items-end justify-center">
                        <span className="inline-block text-7xl font-bold">
                        <AnimatedNumbers value={5} />+ 
                        </span>
                        <h2 className="text-xl font-medium capitalize text-dark/75">Projects Completed</h2>
                    </div>


                    <div className="flex flex-col items-end justify-center">
                        <span className="inline-block text-7xl font-bold">
                        <AnimatedNumbers value={1} />+ 
                        </span>
                        <h2 className="text-xl font-medium capitalize text-dark/75">Years of Experience</h2>
                    </div>
                </div>

                    

            </div>
            <Skills />
            <Experience />
            <Education />
            </Layout>
        </main>
    </>
    )
}