import React from 'react'
import Layout from './Layout'
import Link from 'next/link'
import useThemeSwitcher from '../components/hooks/useThemeSwitcher'

const Footer = () => {

  const [mode] = useThemeSwitcher(); // Get the current theme (light or dark)

  return (
    <footer className={`w-full font-medium text-lg sm:text-base  dark:bg-gradient-to-t dark:from-black dark:via-black/70 dark:to-transparent bg-gradient-to-t from-white via-white/50 to-transparent dark:text-light text-dark`}>
        <Layout className="py-12 flex items-center justify-between lg:flex-col lg:py-6">
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className="flex items-center lg:py-2">
                Built by <span className="text-primary text-2xl px-1">&#9825;</span>by&nbsp;<Link href="https://www.linkedin.com/in/srinjan-mukherjee/" target={"_blank"} className="underline underline-offset-2">Srinjan</Link>
            </div>
            <Link href="mailto:rituparnasaha75@gmail.com" target={"_blank"} className="underline underline-offset-2">Say Hello &#128075;</Link>
        </Layout>
    </footer>
  )
}

export default Footer