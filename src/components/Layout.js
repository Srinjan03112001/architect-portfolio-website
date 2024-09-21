import React from 'react'
import bgLight from "../../public/images/bg/bg-2.jpg"
import bgDark from "../../public/images/bg/bg-3.jpg"
import Image from 'next/image'
import useThemeSwitcher from '../components/hooks/useThemeSwitcher'
import { SunIcon, MoonIcon } from './Icons'


const Layout = ({children, className="", style = {}}) => {
// Check if dark mode is active using the 'dark' class on the document element
const [mode, setMode] = useThemeSwitcher(); // Get the current theme (light or dark)


  return (
    <> 
    <Image
            alt="Background"
            src={mode === 'dark' ? bgDark : bgLight} // Dynamically load the image
            placeholder="blur"
            quality={100}
            sizes="100vw"
            style={{
              position: 'fixed', // This will make the image stay in place while scrolling
              top: 0, // Pin the image to the top
              left: 0, // Pin the image to the left
              width: '100vw', // Ensures the image spans the full width
              height: '100vh', // Ensures the image spans the full height of the viewport
              objectFit: 'cover', // Ensures the image covers the entire viewport
              zIndex: -1, // Ensure the background stays behind other content
            }}
          />
    <div className={`w-full h-full inline-block  z-0 p-32 xl:p-24 lg:p-16 md:p-12 sm:p-8 ${className} `}>
      
        {children}
          <div className="fixed  left-10 bottom-10 md:right-6 md:top-6 md:left-auto md:bottom-auto sm:right-6 sm:top-6 sm:left-auto sm:bottom-auto flex items-center justify-center overflow-hidden z-50">
          <div className='w-46 h-auto flex items-center justify-center relative'>
          <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-3 flex items-center justify-center rounded-full p-2 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
              >
                  {
                      mode === "dark"?
                      <SunIcon className={"fill-dark h-6 sm:h-8 md:h-10 lg:h-16 xl:h-20 z-10"} />
                      : <MoonIcon className={"fill-dark h-6 sm:h-8 md:h-10 lg:h-16 xl:h-20 z-10"} />
                  }
              </button>
          </div>
      </div>
    </div>
    </>
  )
}

export default Layout