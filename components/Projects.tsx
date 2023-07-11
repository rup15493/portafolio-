import React from 'react'
import { motion } from "framer-motion"


type Props = {}

export default function Projects({}: Props) {
    const projetcs = [1,2,3,4,5];
  return (
    <motion.div
    
    initial = {{ opacity:0   }}
    whileInView={{opacity:1}}
    transition={{duration: 1.5}}
    
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>

<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                    Projects
                    </h3>

                    <div className='relative w-full flex overflor-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
                        {projetcs.map((project) =>  
                        <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 p-20 md:p-44 h-screen '>
                                <motion.img
                                  initial = {{ 
                                    y: -300,
                                    opacity:0   }}
                                  whileInView={{opacity:1, y:0}}
                                  transition={{duration: 1.2}}
                                  viewport={{once:true}}
                                  

                                src='/image/roberto.jpg'
                                className='w-14 h-14'
                                />
                                
                            </div>)}
                            <div className='space-y10 px-0 md:px-10 max-w-6xl'>
                                <h4 className='tex-4xl font-semibold text-center'
                                > Case Study of : netflix clone </h4>
                                <p className='text-lg text-center md:text-left'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. In perferendis corporis doloremque officia magnam voluptatem! Nostrum iure dolores minus, ab dolor officiis vitae sequi velit amet maiores eligendi molestias excepturi?
                                </p>
                            </div>
                    </div>

                    <div className=' w-full absolute top[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12'>

                    </div>

    </motion.div>
  )
}