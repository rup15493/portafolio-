import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
type Props = {}
import Link from 'next/link'

export default function Heroe({}: Props) {

const [text,count] = useTypewriter ({
    words: [ 
        "Hi, My name is Roberto!",
        " Guy who loves Develpment",
        "Let me help you grow your bussness",
       ],
       loop: true,
       delaySpeed: 2000
})


  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
  <Image 
  src="/image/roberto.jpg"
  alt= "foto de perfil"
  width={100} 
  height={100}
  className='relative rounded-full mx-auto object-cover'
  
  /> 
        <div className='z-2'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px] '>Softwer Engenire</h2>
        <h1 className='text-5xl lg:6xl font-semibold px-10'>
        <span className='mr-3'>{text}</span>
        <Cursor cursorColor='#f7ab0a' />
     </h1>
     <div className='pt-5'>

        <Link href="#about">
        <button className='px-6 py-6 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#f7ab0a]/40 hover:text-[#f7ab0a]/40'>About</button>
            
        </Link>
       <Link href= "#experience">
       <button className='px-6 py-6 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#f7ab0a]/40 hover:text-[#f7ab0a]/40'>experience</button>

       </Link>
       <Link href="#skilss">
       <button className='px-6 py-6 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#f7ab0a]/40 hover:text-[#f7ab0a]/40'>skills</button>

       </Link>
       <Link href= "#projects">
       <button className='px-6 py-6 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#f7ab0a]/40 hover:text-[#f7ab0a]/40'>projects</button>

       </Link>

     </div>
        </div>
        </div>
  )
}