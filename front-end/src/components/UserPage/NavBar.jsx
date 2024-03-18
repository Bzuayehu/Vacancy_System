// import React from 'react'
import { Badge, Space, Typography } from "antd"
import { FiBell, FiLogOut, FiMessageCircle } from 'react-icons/fi';
import { NavLink } from "react-router-dom";
// import user from '../images/user-gear.png'
const NavBar = () => {
  return (
    <div className=" AdminNavBar flex flex-row justify-between w-full h-[80px] items-center">
        {/* <Image width={50} src={user}></Image> */}
        <Typography.Title>User Dashboard</Typography.Title>
        <Space>
        
        <li className="menuList text-textColor hover:text-orangeColor">
                    <NavLink to="/jobs">jobs</NavLink>
        </li>
            <Badge count={5} dot>
                <FiMessageCircle style={{fontSize:24}}/>
            </Badge>
            <Badge count={10}>
                <FiBell style={{fontSize:24}}/>
            </Badge>
            <FiLogOut style={{fontSize:24}}/>

        </Space>
    </div>
  )
}

export default NavBar