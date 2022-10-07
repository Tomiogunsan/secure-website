import React, {useState} from 'react'
import {  AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import {Link } from 'react-scroll'




function Navbar() {

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className='flex justify-between text-center py-4 w-full h-20 px-4 absolute z-10 text-[#f4f4f4]'>
     
      <div>
        <p className='font-bold text-2xl md:text-3xl '>DSECURE.</p>
      </div>

      <ul className='hidden md:flex justify-between text-center'>
       <li>Home</li>
         <li>About</li>
        <li>Services</li>
       <li>Contact</li>
        
      </ul>

      <div className='hidden md:flex'>
        <AiOutlineSearch size={20} className='mr-2'/>
        <BsPerson size={20}/>
      </div>

      {/* mobile menu */}
      <div onClick={handleNav} className='md:hidden mt-2 z-10 '>
       {nav ? <AiOutlineClose size={20}/> :  < HiOutlineMenuAlt4  size={20}/>} 
        
      </div>

      <ul onClick={handleNav} className={nav ? 'absolute left-0 top-0 bg-indigo-900 flex flex-col w-full h-screen px-4 py-10 text-center': 'absolute left-[-100%]'}>
      <li className='py-2'>Home</li>
        <li className='py-2'>About</li>
        <li className='py-2'>Services</li>
        <li className='py-2'>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
