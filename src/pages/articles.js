// Some changes are being made in this file

// Changes - Dynamically adding articles and their info as provided in the articles.json file

// Featured Articles must to be hard coded

import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import article2 from "../../public/images/articles/create loading screen in react js.jpg"
import article1 from "../../public/images/articles/pagination component in reactjs.jpg"
import articlesData from '../../public/articles.json'; // Import the JSON data
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'

const Article = ({title, date, link}) => {
    return(
        <div className='transition duration-300 ease-in-out hover:scale-105'>
        <motion.li 
        initial={{y:200}}
        whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}}
        viewport={{once:true}}
        className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light dark:bg-dark text-dark dark:text-light first:mt-0 border border-solid border-dark dark:border-light border-r-4 border-b-4 sm:flex-col '>
            <Link href={link} target="_blank">
                <h2 className='capitalize text-xl font-semibold hover:underline xs:text-base'>{title}</h2>
            </Link>
            <span className='text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
        </motion.li>
        </div>
    );
 }

const FeaturedArticle = ({img, title, time, summary, link}) => {
    return(
        <div className='transition duration-300 ease-in-out hover:scale-105'>
        <li className='relative col-span-1 w-full p-4 bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-2xl'>
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] rounded-br-2xl bg-dark dark:bg-light" />
            <Link href={link} target="_blank"
                className='w-full cursor-pointer overflow-hidden rounded-lg'
                >
                    <Image src={img} alt={title} className='w-full h-auto rounded-lg' 
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
            </Link>
            <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                <h2 className='capitalize text-2xl mt-4 font-bold my-2 xs:text-lg'>{title}</h2>
            </Link>
            <p className='text-sm mb-2 sm:hidden'>{summary}</p>
            <span className='text-primary dark:text-primaryDark font-semibold'>{time}</span>
        </li>
        </div>
    )
}

const Articles = ({ articles }) => {
  return (
    <>
         <Head>
            <title>CodeBucks | Articles Page</title>
            <meta name="description" content="any description"></meta>
        </Head>
        <TransitionEffect />
        <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="Words Can Change The World!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
                <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'>
                    <FeaturedArticle title="Build A Custom Pagination Component In Reactjs From Scratch" summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                    Follow this step-by-step guide to integrate Pagination component in your ReactJS project." time="9 min read" link="/" img={article1}/>
                    <FeaturedArticle title="Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens" summary="Learn how to create stunning loading screens in React with 3 different methods. 
                    Discover how to use React-Loading, React-Lottie & build a custom loading screen. 
                    Improve the user experience." time="10 min read" link="/" img={article2}/>
                </ul>
                <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Articles</h2>
                <ul>
                    {articles.map((article, index) => (
                        <Article 
                        key={index}
                        title= {article.title}
                        date= {article.date}
                        link= {article.link}
                        />
                    ))}

                    
                </ul>
            </Layout>
        </main>
    </>
  )
}

// Fetch data from JSON file during build time
export const getStaticProps = async () => {
    const articles = articlesData; // Importing JSON data
    return {
        props: {
            articles, // Pass the projects data as props
        },
    };
};

export default Articles;