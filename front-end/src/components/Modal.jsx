// import React from 'react'
import incorrect from '../assets/remove.png'
import correct from '../assets/correct.png'
// eslint-disable-next-line react/prop-types
export const Modal = ( {visible, onclocse, children, ERR}) => {

    if(!visible) return null;
  return (
     <div className='fixed z-50 inset-0 bg-black/50  p-5 backdrop-blur-none bg-opacity-0 flex   flex-col items-center '>
       <div className="flex flex-col justify-center items-center bg-white p-4 border-[2px] border-none mt-24 shadow-lg rounded-[6px] w-[350px]">
        <img src={!ERR?correct:incorrect} className='mt-[-45px] w-[70px] ' /> 
        {children}
        <button onClick={onclocse} className="w-[80%] px-[10px] py-[5px] shadow-lg   mt-5 bg-green text-white rounded-[5px] outline-none border-0">ok</button>
       </div>
    </div>
  )
}
