// Some changes are being made in this file

// Changes - Images are dynamically added into pages by adding the jpg into the public/images folder and adding the image metadata into a JSON file

// Featured Projects must to be hard coded

import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg"
import projectsData from '../../public/projects.json'; // Import the JSON data
import TransitionEffect from '@/components/TransitionEffect'


const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return(
        <div className='transition duration-300 ease-in-out hover:scale-105'>
        <article className='relative w-full flex items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light dark:border-light dark:bg-dark dark:text-light p-12 lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-2xl bg-dark dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
                <Link href={link} target="_blank"
                className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full '
                >
                    <Image src={img} alt={title} className='w-full h-auto' />
                </Link>

                <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                    <span className='text-primary dark:text-primaryDark font-medium text-xl xs:text-base'>{type}</span>
                    <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                        <h2 className='my-2 w-full text-left text-4xl font-bold sm:text-sm xs:text-lg'>{title}</h2>
                    </Link>
                    <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                    <div className='mt-2 flex items-center'>
                        <Link href={github} target="_blank" className='w-10'> <GithubIcon /></Link>
                        <Link href={link} target="_blank" className='ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px6 text-lg font-semibold hover:bg-light hover:text-dark dark:hover:bg-dark dark:hover:text-light border-2 border-solid border-transparent hover:border-dark dark:hover:border-light sm:px-4 sm:text-base'> Visit Project</Link>
                    </div>
                </div>
        </article>
        </div>
    )
}

const Project = ({title, img, link}) => {
    return(
        <div className='transition duration-300 ease-in-out hover:scale-105'>
        <article className='w-full flex-col items-center justify-center rounded-2xl rounded-br-2xl border-2 border-solid border-dark bg-light dark:border-light dark:bg-dark p-6 relative xs:p-4'>
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] rounded-br-2xl bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
            <Link href={link} target="_blank"
                className='w-full cursor-pointer overflow-hidden rounded-lg'
                >
                    <Image src={img} alt={title} className='w-full h-auto rounded-lg' 
                    layout="responsive"
                    width={800} // You can still provide a width
                   height={600} // You can still provide a height to maintain aspect ratio 
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </Link>

                <div className='w-full flex flex-col items-start justify-between mt-4'>
                    <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                        <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl xs:text-lg  '>{title}</h2>
                    </Link>
                </div>
        </article>
        </div>

    )
}

const Projects = ({ projects }) => {
  return (
    <>
        <Head>
            <title>Rituparna Saha | Projects Page</title>
            <meta name="description" content="any description"></meta>
        </Head>
        <TransitionEffect />
        <main className="w-full mb-16 flex flex-col items-center justify-center">
            <Layout className='pt-16'>
                <AnimatedText text="Imagination Trumps Knowledge!" 
                className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
                />
                <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-12 sm:gap-x-0'>
                    <div className='col-span-12'>
                        <FeaturedProject
                        title="Crypto Screener Application" summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency."
                        link="/" type="Featured Project" img={project1} github="/"
                        />
                    </div>
                   {projects.map((project, index) => (
                        <div key={index} className='col-span-6 sm:col-span-12'>
                            <Project title={project.title} img={project.img} link={project.link} />
                        </div>
                   ))}
                </div>
            </Layout>
        </main>
    </>
  )
}

// Fetch data from JSON file during build time
export const getStaticProps = async () => {
    const projects = projectsData; // Importing JSON data
    return {
        props: {
            projects, // Pass the projects data as props
        },
    };
};

export default Projects;