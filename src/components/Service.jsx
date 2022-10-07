import React from 'react'
import {FcIdea} from 'react-icons/fc'
import {GrCloudComputer} from 'react-icons/gr'
import { FaReacteurope } from 'react-icons/fa'

function Service() {
  return (
    <div className='w-full md:h-screen bg-slate-200/20 py-8'>
    <div className='flex flex-col justify-center items-center px-2'>
        <p className='text-5xl font-bold inline border-b-4 text-blue-900 border-blue-500'>Services</p>
        <p className='font-bold text-3xl py-4'>We are offering all kinds of IT solutions services</p>

        <div className='grid md:grid-cols-3 w-full gap-8 py-12 '>
            <div className='border-2 border-white shadow-2xl rounded-xl  px-4 bg-white'>
            < FaReacteurope  size={40} className='text-blue-900 font-bold mt-4'/>
            <h3 className='font-bold py-4 text-xl'>Software Development</h3>
            <p className='py-4'>We offers a wide range of custom IT programming services. We have outstanding experience in custom database development, desktop and distributed application design as well as various custom software components and web-project programming.We collaborate closely with our clients from the beginning of the project.</p>
            </div>

            <div className='border-2 border-white shadow-2xl rounded-xl  px-4 bg-white'>
            < GrCloudComputer size={40} className='text-blue-900 font-bold mt-4 '/>
            <h3 className='font-bold py-4 text-xl'>Web Development</h3>
            <p className='py-4'>We offers a complete package of affordable website design and development. From the initial process of taking inputs from clients, planning on the basis of such inputs to final implementation and testing – all are done using latest web site designing technique and skills. We also helps its client to integrate and implement payment gateway systems.</p>
            </div>

            <div className='border-2 border-white shadow-2xl rounded-xl  px-4 bg-white'>
            <FcIdea  size={40} className='text-blue-900 font-bold '/>
            <h3 className='font-bold py-4 text-xl'>Analytic Solutions</h3>
            <p className='py-4'> We collect and gather raw and unstructured data from various different sources like excel, databases, cloud and others, analyze and turn it to useful information.If your website is growing very rapidely, then there will be a time when shared hosting will not be enough for your website.Then cloud hosting is here to give you the best power and reliability.</p>
            </div>

        </div>
    </div>
    </div>
  )
}

export default Service
