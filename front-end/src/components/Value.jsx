// import { useState } from 'react' 
import '../App.css'
// import { registerController } from '../../server/controller/authcontroller'

function Value() {
  // const [count, setCount] = useState(0)
  return (
     <div className='mb-[4rem] mt-[3rem] ml-10 mr-5'>
      <h1 className="text-textColor text-[25px] py-[2rem] pb-[3rem]  font-bold   block">
        Tha value that holds us true and to account
      </h1>
      <div className="grid gap-[10rem] grid-cols-3 pr-10 items-center">
        <div className="singleGrid rounded-[10px] hover:bg-slate-200 p-[1.5rem] ">
          <div className="flex items-center gap-3 ">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-slate-200 h-[40px] w-[40px] flex items-center justify center ">
              <img src="" alt=""  className='w-[70%]' />
            </div>
            <span className="font-semibold text-textColor text-[18px] ">
              Simplicity
            </span>
          </div>
          <p className='text-[13px] text-textColor opacity-[0.7] p-[1rem] font-semibold '>
            We believe in making things better for everyone, even if just by a little bit!
          </p>
        </div>
        <div className="singleGrid rounded-[10px] hover:bg-slate-200 p-[1.5rem] ">
          <div className="flex items-center gap-3 ">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-slate-200 h-[40px] w-[40px] flex items-center justify center ">
              <img src="" alt=""  className='w-[70%]' />
            </div>
            <span className="font-semibold text-textColor text-[18px] ">
              Easy Access
            </span>
          </div>
          <p className='text-[13px] text-textColor opacity-[0.7] p-[1rem] font-semibold '>
            We provide easily accesible features
          </p>
        </div>
        <div className="singleGrid rounded-[10px] hover:bg-slate-200 p-[1.5rem] ">
          <div className="flex items-center gap-3 ">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-slate-200 h-[40px] w-[40px] flex items-center justify center ">
              <img src="" alt=""  className='w-[70%]' />
            </div>
            <span className="font-semibold text-textColor text-[18px] ">
              Wide coverage
            </span>
          </div>
          <p className='text-[13px] text-textColor opacity-[0.7] p-[1rem] font-semibold '>
            We want to address every one issue
          </p>
        </div>
      </div>
      <div className="card mt-[2rem] flex justify-between bg-[#c7e4ff] p-[5rem] rounded-[10px] ">
        <div>
          <h1 className="text-orangeColor text-[30px] font-bold "> Ready to switch a career? </h1>
          <h2 className='text-textColor text-[25px] font-bold'>Lets get started</h2>
        </div>
        <button className='border-[2px] rounded-[10px] py-[4px] px-[40px] text-[18px] font-semibold text-orangeColor hover:bg-[#b8d7f5] hover:border-orangeColor/80 border-orangeColor  '>
          Get started 
        </button>
      </div>
     </div>
  )
}

export default Value
