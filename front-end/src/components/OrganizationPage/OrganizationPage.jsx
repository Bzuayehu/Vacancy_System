// import React from 'react'
import Footer from "./Footer"
import NavBar from "./NavBar"
import SideBar from "./SideBar"
import { Space } from "antd"
import { Outlet } from "react-router"
const OrganizationPage = () => {
  return (
    <div className="w-full flex flex-col h-[100vh] justify-between">
        <NavBar/>
        <Space className="flex flex-1 items-start justify-start">
            <SideBar></SideBar>
            <Outlet/>
        </Space>
        <Footer/>

    </div>
  )
}

export default OrganizationPage