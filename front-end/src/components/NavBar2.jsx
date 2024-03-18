import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png" 


export const NavBar2 = () => {
    return (
        <div className="navBar lg:flex-row md:flex-col md:w-full sm:flex-col sm:w-full flex top-0 left-0 fixed justify-between nav items-center p-[1rem] lg:w-[100%] z-40 shadow-lg">
            <div className="logoDiv">
                <h1 className="logo text-[25px] text-orangeColor flex-col">
                    <img src= {logo} alt="logo"  width="80px" className="m-auto" />
                     
                </h1>
            </div>
            <div className="menu lg:flex  gap-8 sm:flex-none md:lock ">
               
                {/* <li className="menuList text-textColor hover:text-orangeColor">
                    
                    <NavLink to="/adminpage2">Companies</NavLink>

                </li> */}
                
                {/* <li className="menuList text-textColor hover:text-orangeColor"> */}
                    {/* <NavLink to="/adminPage">Create resume</NavLink> */}
                    {/* <NavLink to="/adminPage">Admin</NavLink> */}
                {/* </li> */}
                <li className="menuList text-textColor hover:text-orangeColor">
                    {" "}
                    <NavLink to="/login">log in</NavLink>{" "}
                </li>
                <li className="menuList text-textColor hover:text-orangeColor">
                    <NavLink to="/register">Register</NavLink>
                </li>
            </div>  
        </div>
    );
}
