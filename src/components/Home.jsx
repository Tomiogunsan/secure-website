import React from 'react'
import data from '../assets/data8.jpg'

function Home() {
  return (
    <div className='w-full h-screen relative'>
        <img  className='w-full h-full object-cover' src={data} alt='/' />
        <div className='absolute w-full h-full bg-gray-900/50 top-0 left-0'></div>
        <div className='absolute w-full md:w-[550px] top-0 flex flex-col justify-center h-full  p-4 text-[#f4f4f4] text-center md:text-left'>
            <h1 className='text-5xl font-bold py-4'>Data Services</h1>
            <p className='text-lg md:text-xl'> We are leading technology solutions providing company all over the world doing over 3 years. We are increasing business success with technology, developing software applications and mobile apps fro clients all over the world</p>
            <div className='mt-6'>
            <button className='bg-gradient-to-r from-blue-900 to-blue-500 p-3  font-bold  rounded-tl-lg rounded-br-lg'>Read More</button>
            </div>
        </div>
    </div>
  )
}

export default Home