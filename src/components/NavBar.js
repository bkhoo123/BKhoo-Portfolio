import React from 'react'
import a from 'next/link'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { GithubIcon } from './Icons'
import { LinkedInIcon } from './Icons'
import {motion} from "framer-motion"

const CustomLink=({href, title, className=""}) => {
    const router = useRouter();


    return (
        <a href={href} className={`${className} relative group`}>
            {title}

            <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 
            group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full': 'w-0'}`}
            >&nbsp;</span>
        </a>
    )
}

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
        <nav>
            <CustomLink href="/" title="Home" className="mr-4" />
            <CustomLink href="/about" title="Experience" className="mx-4"  />
            <CustomLink href="/projects" title="Projects" className="mx-4"   />
            {/* <CustomLink href="/articles" title="Articles" className="ml-4"   /> */}
        </nav>
        

        <nav className="flex items-center justify-center flex-wrap">
            <motion.a href="https://github.com/bkhoo123" target={"_blank"}
            whileHover={{y:-2}}
            className="w-6 mr-3"
            whileTap={{scale:0.9}}
            >
                <GithubIcon />
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/brian-khoo-4121b087/" target={"_blank"}
            whileHover={{y:-2}}
            className="w-6 mr-3 "
            whileTap={{scale:0.9}}
            >
                <LinkedInIcon />
            </motion.a>

        </nav>


        <div className="absolute left-[50%] top-2 translates-x-[-50%]">
        <Logo />
        </div>

    </header>
  )
}

export default NavBar