import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/developer-pic-1.png"
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import TransitionEffect from '@/components/TransitionEffect'


export default function Home() {
  return (
    <>
      <Head>
        <title>Rituparna Saha</title>
        <meta name="description" content="Created by Srinjan Mukherjee" />
        
      </Head>
      <TransitionEffect/>
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className="pt-0 md:p-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className='w-1/2 md:w-full'>
              <Image src={profilePic} alt="CodeBucks" className='w-full h-auto lg:hidden md:inline-block md:w-full' 
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text="Transforming Vision into Reality Through Design and Innovation" className="!text-6xl !text-left *:
              xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl
              "/>
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
              As a skilled architect, I am dedicated to designing innovative and sustainable spaces that bring ideas to life. Explore my portfolio to see my latest projects, highlighting my expertise in architectural design, 3D modeling, and project coordination.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center ">
                <Link href="/RituparnaSaha_CV.pdf" target={"_blank"}
                className="flex items-center bg-dark text-light dark:bg-light dark:text-dark p-2.5 px-6 rounded-lg text-base font-semibold hover:bg-light hover:text-dark dark:hover:bg-dark dark:hover:text-light border-2 border-solid border-transparent hover:border-dark dark:hover:border-light md:p-2 md:px-4 md:text-lg"
                download={true}>
                  Download CV 
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
