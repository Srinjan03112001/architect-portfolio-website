import React, { useRef } from 'react'
import {motion,  useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({position, company, companyLink, time, address, work}) => {
    const ref= useRef(null);
    return(
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]'>
        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={companyLink} target='_blank' className='text-primary dark:text-primaryDark capitalize'>@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75  xs:text-sm'>
                {time} | {address}
            </span>
            <p className='font-medium w-full ms:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>
    );
};

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end","center start"]
        }
    )
  return (
    <div className='my-64 '>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Experience</h2>

        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

            <motion.div 
            style={{scaleY: scrollYProgress}}
            className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-primaryDark md:w-[2px] md:left-[30px] xs:left-[20px]'/>
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details 
                position="Assistant Engineering Manager (Architect)" company= "L&T (MM)" time ="April 2023-Present" address="3B Shakespeare Sarani, Kolkata" work="I have worked on tender, approval, and construction drawings for factory projects across Gujarat, Odisha, and other states in India, ensuring compliance with green building rules, creating 3D models for client approval, coordinating with other disciplines, and performing quantity checks for architectural needs."
                companyLink="https://www.larsentoubro.com/"
                />
                <Details 
                position="Architect" company= "AECOM" time ="February 2021 - April,2023" address="New Town, Kolkata" work="I have prepared tender, working, and detailed design drawings for the Patna Metro project, coordinated with other teams, and created land plans. My work includes 3D modeling for the Patna Metro and DAMMAM projects, clash detection with Navisworks, schematic drawings for a snow park, and detailed drawings for a high-speed metro in the NEOM project."
                companyLink="https://aecom.com/"
                />
                <Details 
                position="Architect" company= "Integra Ventures" time ="January 2020 - January 2021" address="Sector III, Salt lake, Kolkata" work="I have worked on Detailed Project Reports (DPR), Preliminary Project Reports (PPR), detailed interior drawings, sanction drawings, and working drawings for hospitals (200-500 beds) and college campuses."
                companyLink="https://www.integra-ventures.com/"
                />
                <Details 
                position="Architect" company= "Coordinate Techno Consultants" time ="September 2018 - December 2019" address="10/2, C.N. Roy Road, Kolkata" work="I have worked on Preliminary and Detailed Project Reports (PPR, DPR), as well as sanction, working, and as-built drawings for a variety of projects, including residential buildings, mixed-use developments, office spaces, hotels, and renovation projects. "
                companyLink="https://ctcpl-architects.com/"
                />
                <Details 
                position="Junior Architect" company="The Appropriate Alternative" time="March 2018 - August 2018" address="8, Central Road, Jadavpur, Kolkata" work="I have worked on Detailed Project Reports (DPR), sanction drawings, working drawings, and as-built drawings for universities, residential projects, and heritage restoration works, ensuring precision and adherence to project requirements."
                companyLink="https://appropriatealternative.in/"
                />
                <Details 
                position="Architect" company="Simoco Systems & Infrastructure Solutions Limited" time="June 2017 - March 2018" address="Sector- V Salt Lake, Bidhan Nagar, Kolkata" work="I have coordinated extensively with clients and consultants to ensure seamless communication and project alignment, while managing the documentation of all project phases to maintain accurate records and support decision-making throughout the process."
                companyLink="https://simocosystem.net/"
                />
            </ul>
        </div>

    </div>
  )
}

export default Experience