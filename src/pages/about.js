import AnimatedText from '@/components/AnimatedText'
import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from "../../public/images/profile/ProfilePhoto.png";
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration: 3000})
    const isInView = useInView(ref, {once: true});

    useEffect(() => {
        if(isInView){
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])

    return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
        <Head>
            <title>Rituparna Saha | About Page</title>
            <meta name="description" content="any description"></meta>
        </Head>
        <TransitionEffect />
        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <Layout className="pt-16">
            <AnimatedText text="Passion Fuels Purpose!" className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
            <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 ">
                <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
                    <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-gray-300">About Me</h2>
                    <p className="font-medium ">
                    I am an architect with a diverse range of experience in designing and managing projects across various sectors, including infrastructure, industrial, and healthcare. My work focuses on creating innovative, sustainable designs while ensuring smooth project coordination. From conceptualizing designs to delivering detailed construction drawings, I am passionate about bringing ideas to life.
                    </p>
                    <p className="my-4 font-medium ">
                    I hold a degree in architecture and have honed my skills in tools like AutoCAD, Revit, and 3D modeling. I am always looking for ways to integrate sustainable practices into my designs to create efficient and eco-friendly spaces.
                    </p>
                    <p className="font-medium ">
                    In my downtime, I love listening to music and watching films, both of which fuel my creativity. I thrive on problem-solving and collaboration, and I believe that teamwork is the key to achieving success in any project.
                    </p>
                </div>
                <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:border-light dark:bg-dark xl:col-span-4 md:order-1 md:col-span-8">
                    <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
                    <Image src={profilePic} alt="Codebucks" className="w-full h-auto rounded-2xl" 
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>

                <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
                    <div className='flex flex-col items-end justify-center xl:items-center'>
                        <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-3xl'>
                            <AnimatedNumbers value={50} />+
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-xs'>Satisfied Clients</h2>
                    </div>
                    <div className='flex flex-col items-end justify-center'>
                        <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-3xl'>
                        <AnimatedNumbers value={40} />+
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-xs'>Projects Completed</h2>
                    </div>
                    <div className='flex flex-col items-end justify-center'>
                        <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-3xl'>
                        <AnimatedNumbers value={7} />+
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-xs'>Years of experience</h2>
                    </div>
                </div>

            </div>

            <Experience />
            <Education />
            </Layout>
        </main>
        
    </>
  )
}

export default about