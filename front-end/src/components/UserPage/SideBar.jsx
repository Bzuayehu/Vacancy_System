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
                key:"/userpage"
            },
            {
                label:"Profile",
                // icon:
                key:"/userpage/profile"
            },
            {
                label:"myapplication",
                // icon:
                key:"/userpage/myapplication"
            },
        ]}
        />
    </div>
  )
}

export default SideBar