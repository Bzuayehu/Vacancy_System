// import React from 'react' 
import arrow from '../assets/leftArrow2.png'
import user from '../assets/user-gear.png'
import Setting from '../assets/cogwheel.png'
import inbox from '../assets/mail.png'
import profile from '../assets/group.png'
import Dashboard from '../assets/line-chart.png'
import Analytics from '../assets/analysis.png'

import { useState } from "react"
import AdminNavBar from './AdminPage/adminNavBar'
import AdminFooter from './AdminPage/AdminFooter'

const AdminPage = () => {
  const [extend, setExtend] = useState(true)
  // const  [active, setActive] = useState(true)
  const menus = [
    { title: "Dashboard", src: Dashboard },
    { title: "Inbox", src: inbox },
    { title: "Accounts", src: profile },
    { title: "Analytics", src: Analytics },
    { title: "Settings", src: Setting },
  ]
  return (
  <>
  {/* <AdminNavBar/> */}
    <div className="flex mt-16 mb-[-10px] h-[100vh]">
      <div className={`${extend ? 'w-72' : 'w-20'} bg-[#172a81] text-white h-screen p-5 pt-10 duration-300 relative`}>
        <img onClick={() => setExtend(!extend)} src={arrow} alt="" className={`w-7 rounded-full border-2 border-[#172a81] absolute cursor-pointer -right-3 top-9 ${!extend && 'rotate-180'}`} />
        <div className='flex items-center gap-x-4'>
          <img src={user} alt="" className={`cursor-pointer duration-500 w-10 ${!extend && 'rotate-[360deg]'}`} />
          <h1 className={` text-white text-xl origin-left font-medium duration-300 ${!extend && 'scale-0'}`}>Admin</h1>
        </div>
        <ul className='pt-6'>
          {menus.map((menu, index) => (
            <li key={index} className={` text-gray-300 text-sm mt-2 flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#d8d1d14d] rounded-md ${index === 0 && 'bg-[#d8d1d14d]'}`}>
              <img className='w-6' src={menu.src} alt="" />
              <span className={`${!extend && 'hidden'} origin-left duration-200`}>{menu.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex-1 text-2x1 font-semibold h-screen p-5'>
        <h1>Page Details</h1>
      </div>
    </div>
    {/* <AdminFooter/> */}
    </>
  )
}
export default AdminPage