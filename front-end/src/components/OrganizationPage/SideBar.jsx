// import React from 'react'
import { Menu } from "antd"
import { useNavigate } from "react-router"
const SideBar = () => {
    const navigate = useNavigate()
  return (
    <div className="sidebar">
        <Menu
        onClick={(item)=>{
            navigate(item.key)
        }}
        items={[
            {
                label:"DashBoard",
                // icon:
                key:"/organizationpage"
            },
            {
                label:"Profile",
                // icon:
                key:"/organizationpage/profile"
            },
            {
                label:"Create Job",
                // icon:
                key:"/organizationpage/createJob"
            },
        ]}
        />
    </div>
  )
}

export default SideBar