import React from 'react'
import { motion } from "framer-motion"


type Props = {}

export default function About({}: Props) {
  return (
    
    <motion.div 
    initial = {{ opacity:0   }}
    whileInView={{opacity:1}}
    transition={{duration: 1.5}}
    className='flex flex-col h-screen relative text-center md:text-left md:flex-row mx-w-7xl px-10 justify-evenly mx-auto items-center'>

        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>


        <motion.img 
        initial= {{
            x:-200,
            opacity:0,
        }}
        transition={{
            duration:1.2
        }}
        whileInView={{opacity:1, x:0}}
        viewport={{once:true}}
        src='/image/roberto.jpg'
        className='mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 h-95 xl:h-[600] xl:w-[600px]'
        
        
        />

<div className='space-y-10 px-0 md:px-10'>
    <h4 className='text-4xl font-semibold'>
        here is a <span className='underline decoration-[#f7ab0a]' >little</span> background ;
    </h4>
    <p className='text-base'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et quas inventore, natus sunt nulla at nostrum officia ullam voluptas maxime aut cumque saepe vitae ab qui aperiam expedita sapiente doloremque.
    </p>

</div>

        </motion.div>
         
  )
}