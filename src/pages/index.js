import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import bg2 from "../../public/images/bg/bg-2.jpg"
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import TransitionEffect from '@/components/TransitionEffect'
import useThemeSwitcher from '../components/hooks/useThemeSwitcher'
import bgLight from "../../public/images/bg/bg-2.jpg"
import bgDark from "../../public/images/bg/bg-3.jpg"


export default function Home() {

  const [mode, setMode] = useThemeSwitcher(); // Get the current theme (light or dark)
  return (
    <>
      <Head>
        <title>Rituparna Saha</title>
        <meta name="description" content="Created by Srinjan Mukherjee" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center justify-center w-full h-max-screen text-dark dark:text-light" >
        <Layout className="flex flex-col items-center justify-center text-center w-full !xl:p-24 !lg:p-16 !md:p-12 !sm:p-8" 
       >
        
        
          <AnimatedText 
            text="Transforming Vision into Reality Through Design and Innovation" 
            className="!text-7xl xl:!text-5xl lg:!text-6xl md:!text-5xl sm:!text-3xl mb-4" 
          />
          <p className="my-4 text-lg font-medium md:text-sm sm:text-sm">
            As a skilled architect, I am dedicated to designing innovative and sustainable spaces that bring ideas to life. Explore my portfolio to see my latest projects, highlighting my expertise in architectural design, 3D modeling, and project coordination.
          </p>
          <Link href="/RituparnaSaha_CV.pdf" target={"_blank"}
            className="flex items-center bg-dark text-light dark:bg-light dark:text-dark mt-5 p-2.5 px-6 sm:p-1.5 sm:px-4 sm:text-sm rounded-lg text-base font-semibold hover:bg-light hover:text-dark dark:hover:bg-dark dark:hover:text-light border-2 border-solid border-transparent hover:border-dark dark:hover:border-light md:p-2 md:px-4 md:text-lg  whitespace-nowrap"
            download={true}>
            Download CV <LinkArrow className="pl-2 h-6"/>
          </Link>
        </Layout>
      </main>
    </>
  )
}
