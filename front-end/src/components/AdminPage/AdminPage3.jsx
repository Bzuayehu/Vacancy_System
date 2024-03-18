// import React from 'react'
import { Outlet } from "react-router"
import Footer from "./Footer"
import NavBar from "./NavBar"
import SideBar from "./sideBar"
import { Space } from "antd"
const AdminPage3 = () => {
  return (
    <div className="w-full flex flex-col h-[100vh] justify-between">
        <NavBar/>
        <Space className="flex flex-1 items-start justify-start">
          <SideBar />
          <Outlet />
        </Space>
        <Footer/>

    </div>
  )
}

export default AdminPage3