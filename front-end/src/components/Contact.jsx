// import React from 'react'
// import { useState } from 'react' 
import '../App.css'
import im1 from '../assets/call center.gif' 
import Footer from './Footer'
import NavBar from './NavBar'
// import { Link, } from 'react-router-dom'
// import axios from "axios"
const Contact = () => {
  return (
    <> 
    <NavBar/>
    <div className="container flex mt-[100px] mb-[150px] m-auto h-[600px] w-[1500px]  ">
        
        <div className="formDiv ml-4   p-10 w-[60%] flex flex-col m-auto bg-gradient-to-b to-transparent from-white/10 ">
          <h1 className=''>Contact</h1>
          <form action=""     className='mt-6 mb-6'>
            <div>
            {/* <label htmlFor="password" className='block'>Password</label> */}
            <input type="email" className='border-[1px] rounded-[5px] border-black/60 focus:border-blueColor w-[100%] mt-3 py-2 outline-none text-center'     placeholder='Enter your email'/>
            <textarea name="" id="" cols="60" rows="10"  className='mt-10 border-[1px] border-black/40 outline-0 focus:border-blueColor text-black P-10' placeholder='write your comments here ...'></textarea>
            </div> 
            {/* {error && <div className='text-[#f03e3e] mt-3'>{error}</div>} */}
            <button type="submit" className=' ml-[150px] p-[10px] px-[50px] bg-orangeColor mt-4  hover:bg-orangeColor/95 text-white rounded-[10px] '>submit</button>
          </form> 
        </div>
        <div className="imgDiv ml-0 w-[150%] m-auto h-[570px]">
          <img src={im1} alt="log in" className='h-[100%] w-[100%]'  />
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Contact