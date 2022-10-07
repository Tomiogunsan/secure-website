import React from 'react'
import { BsClock } from 'react-icons/bs'
import { FaEnvelope, FaFacebook, FaInstagramSquare, FaPinterest, FaTwitterSquare } from 'react-icons/fa'
import { FiPhoneCall, FiSend } from 'react-icons/fi'
import { HiLocationMarker } from 'react-icons/hi'

function Footer() {
  return (
    <div className='w-full md:h-[600px] bg-blue-100/30'>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 py-10 px-4'>
            <div className=''>
                <p className='font-bold py-4 text-xl'>DSECURE.</p>
                <p className='py-2'>Leading Software Company in Nigeria</p>
                <div className='flex '>
                    <FaFacebook size={20} className='mr-2 text-blue-900  '/>
                    <FaTwitterSquare size={20} className='mr-2 text-blue-900  ' />
                    <FaPinterest size={20} className='mr-2 text-blue-900  '/>
                    <FaInstagramSquare size={20} className='mr-2 text-blue-900 ' />
                </div>
            </div>
            
            <div>
                <p className='font-bold py-4 text-xl'>IT Services</p>
                <p className='py-2'>Software Development</p>
                <p className='py-2'>Web Development</p>
                <p className='py-2'>Analytic Solutions</p>
                <p className='py-2'>Cloud Server</p>
                <p className='py-2'>Product Design</p>
            </div>

            <div>
                <p className='font-bold py-4 text-xl'>Contact Info</p>
                <p className='flex py-2'><HiLocationMarker className='mr-2'/> Ranka Close Abuja</p>
                <p className='flex py-2'><FiPhoneCall className='mr-2'/>+2347034567890</p>
                <p className='flex py-2'><FaEnvelope className='mr-2'/>info@dsecure.technology</p>
                <p className='flex py-2'><BsClock className='mr-2'/>Opening Hours: 10:00AM - 05:00PM</p>
            </div>

            <div>
                <p className='font-bold py-4 text-xl'>Newsletter</p>
                <p className='py-2'>Please provide your email below to send a newsletter's copy.</p>
                <div className='p-2 border-2 rounded-full bg-white flex justify-between'>
                    <input placeholder='Your email address' />
                    <button className='bg-blue-900 text-white p-2 rounded-full '><FiSend size={20}/></button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
