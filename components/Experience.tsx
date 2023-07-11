
import React from 'react'
import { motion } from "framer-motion"


type Props = {}

export default function Experience({}: Props) {
  return (
    <div>
 <article className='flex flex-col roundend-lg items-center  space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[]900px snap-center bg-[#292929]
 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
    <motion.img
    initial={{
        y:-200,
        opacity:0
    }}
    transition={{
        duration: 1.2
    }}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
    src='/image/roberto.jpg'
    className='w-32 h-32 rounded-full xl:h-[200px] object-cover object-center'
    
    />

    <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'> Ceo of mi casa</h4>
        <p className='font-bold text-2xl mt-1'>CASA</p>
        <div className='h-10 w-10 roundend-full'>
            {/* test icons  */}
        </div>
        <p className='uppercase py-5 text-gray-300'> fecha de trabjo </p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
            <li>Summary Poitns</li>
            <li>Summary Poitns</li>
            <li>Summary Poitns</li>
            <li>Summary Poitns</li>
            <li>Summary Poitns</li>
        </ul>
    </div>
    
 </article>
        
        
        </div>
  )
}