// import React from 'react'
import { Menu } from "antd"
import { useNavigate } from "react-router"
const SideBar = () => {
    const navigate = useNavigate()
  return (
    <div className="">
        <Menu
        onClick={(item)=>{
            navigate(item.key)
        }}
        items={[
            {
                label:"DashBoard",
                // icon:
                key:"/adminpage"
            },
            {
                label:"Job seekers",
                // icon:
                key:"/adminpage/Jobseekers"
            },
            {
                label:"Organizations",
                // icon:
                key:"/adminpage/Organizations"
            },
            {
                label:"Jobs",
                // icon:
                key:"/adminpage/job"
            },
        ]}
        />
    </div>
  )
}

export default SideBar