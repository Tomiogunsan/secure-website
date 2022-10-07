import React from 'react'
import about from '../assets/service.jpg'

function About() {
  return (
    <div name='about' className='w-full md:h-screen'>
        <div className='flex flex-col justify-center items-center w-full h-full '>
            <div className='max-w-[1000px] py-10'>
                
                    <p className='text-5xl font-bold inline border-b-4 text-blue-900 border-blue-500'>About</p>
                
            </div>

            <div className='max-w-[1000px] w-full grid md:grid-cols-2 gap-8 py-10 px-4'>
                <img className='object-cover w-full h-full' src={about} alt='/' />
                <div>
                    <p className='font-bold text-3xl py-4'> We render services that guarantees business success with technology</p>
                    <p className='text-lg'>Over 5+ years working in IT services developing software applications and mobile apps for clients all over the world.</p>
                    <div className='py-4'>
                        <button className=' bg-gradient-to-r from-blue-900 to-blue-500 p-3 rounded-tl-lg rounded-br-lg font-bold text-[#f4f4f4]'>Learn More</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default About