import React from 'react'
import man from '../assets/man-removebg-preview.png' 
import {FiPhoneCall } from 'react-icons/fi'
function Contact() {
  return (
    <div className='w-full  bg-indigo-900 text-[#f4f4f4]'>
        <div className='grid md:grid-cols-2 gap-2 py-8'>
          
          <img  className='object-cover w-full' src={man} alt='/' />

          <div className='flex flex-col  justify-center items-center'>
          <p className='text-left text-3xl py-2'>Have an idea or project?</p>
         <FiPhoneCall size={30} className='' />
         <p className='text-2xl py-4 font-bold'>Call Us</p>
         <p className='text-4xl font-bold'>+2347034567890</p>
         <p className='py-4 text-xl text-center'>You can call us or schedule an appointment. Our representative will reply you shortly.</p>
          <button className=' bg-gradient-to-r from-blue-900 to-blue-500 p-3 rounded-tl-lg rounded-br-lg font-bold text-xl'>Let's Talk</button>
          </div>

        </div>
      
    </div>
  )
}

export default Contact
