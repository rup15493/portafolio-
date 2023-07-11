import React from 'react'
import {PhoneIcon, MapIcon, EnvelopeIcon} from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
  

type Props = {}

export default function Contact({}: Props) {
    const { register, handleSubmit} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => 
    window.location.href=`mailto:boss15493@gmail?subject=${formData.subject}&boddy= Hi my name is ${formData.name} ${formData.message}`;
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row ma-w-7xl justify-evenly mx-auto items-center'>
 <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                    Contact 
                    </h3>       
                    
                    
                    
                    <div className='flex flex-col space-y-10'>
                        <h4 className='text-4xl  font-semibold text-center '>

                             i have got just  what you need  lest talk 

                        </h4>
                        <div className="space-y-10">
                        <div className='flex items-center space-x-5 justify-center'>
                            <PhoneIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
                            <p className='text-2xl'>12213123123</p>
                        </div>
                        <div className='flex items-center space-x-5 justify-center'>
                            <EnvelopeIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
                            <p className='text-2xl'>Developer@gmail.com</p>
                        </div>
                        <div className='flex items-center space-x-5 justify-center'>
                        < MapIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
                            <p className='text-2xl'>DeveloperxD</p>
                        </div>
                       
                        </div>
                     
                            <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col space-y-2 w-fit mx-auto'>
                                <div className='flex space-x-2'>
                                <input 
                                {...register("name")} 
                                 placeholder="Name"
                                className='outline-none bg-slate-400/10 roundend-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#f7ab0a]/40
                                    focus:text-[#f7ab0a]/40 hover:border-[#f7ab0a]/40'type="text" />
                                    <input  
                                     {...register("email")} 
                                    placeholder="Email"
                                    className='outline-none bg-slate-400/10 roundend-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#f7ab0a]/40
                                    focus:text-[#f7ab0a]/40 hover:border-[#f7ab0a]/40'type="email" />
                                </div>
                                <input 
                                 {...register("subject")} 
                                placeholder="Subject"
                                className='outline-none bg-slate-400/10 roundend-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#f7ab0a]/40
                                    focus:text-[#f7ab0a]/40' type='text' />
                                <textarea 
                                 {...register("message")} 
                                placeholder="Message"
                                className='outline-none bg-slate-400/10 roundend-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#f7ab0a]/40
                                    focus:text-[#f7ab0a]/40' />
                                <button 
                                type="submit"
                                className='bg-[#f7ab0a] py-5 rounded-md text-black font-bold'>Submit</button>

                            </form>
                        
                    </div>
                    
                    
                     </div>
  )
}