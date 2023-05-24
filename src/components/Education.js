import React, {useRef} from 'react'
import {motion,  useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({type, time, place, info}) => {
    const ref = useRef(null)
    return <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
        <LiIcon reference={ref} />
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration: 0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                {type}
            </h3>
            <div className=' font-bold text-2xl'>
            @&nbsp; {place}
            </div>

            <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                {time} | {place}
            </span>

            <p className="font-medium w-full md:text-sm">
                {info}
            </p>
        </motion.div>
    </li>
}

export default function Education() {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )

  return (
    <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
            Education
        </h2>

        <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
            
            <motion.div
            style={{scaleY: scrollYProgress}}
            className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
            md-w-[2px] md:left-[30px] xs:left-[20px]
            " />

            <ul className="w-full flex flex-col items-start justify-between ml-4">

                <Details 
                    type="Software Engineering Full-Stack Immersion Program"
                    time="2022-2023"
                    place="App Academy"
                    info="Completed a full-time software engineering curriculum, including training in Python, Javascript, and SQL. Developed web applications using frameworks like Express, React, and Redux. Learned best practices for software engineering, including Agile methodologies, test-driven development, and Git version control."
                />

                <Details 
                    type="Bachelor of Science in Finance"
                    time="2016-2020"
                    place="Southern New Hampshire University"
                    info="Studied financial modeling, investment strategies, and portfolio management. Applied financial and market theories to make informed investment decisions. Developed strong analytical skills and gained practical experience in conducting market research, evaluating financial statements, and forecasting market trends."
                />

                



            </ul>
        </div>

    </div>
  )
}
