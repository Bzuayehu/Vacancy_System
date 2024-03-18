// import { useState } from 'react'
import "../App.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png" 
// import DrawerNavigator from "re"
var navBar = document.querySelector(".navBar");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 50 && window.scrollY <=700) {
        navBar.classList.add("menu");
    } else {
        navBar.classList.remove("menu");
    }
});
function NavBar() {
    // const [count, setCount] = useState(0)
    //   const menu = ["organization","Job seeker","Log in"]
    return (
        <div className="navBar lg:flex-row md:flex-col md:w-full sm:flex-col sm:w-full flex top-0 left-0 fixed justify-between nav items-center p-[1rem] lg:w-[100%] z-40 shadow-lg">
            <div className="logoDiv">
                <h1 className="logo text-[25px] text-orangeColor flex-col">
                    <img src= {logo} alt="logo"  width="80px" className="m-auto" />
                     
                </h1>
            </div>
            <div className="menu lg:flex  gap-8 sm:flex-none md:lock ">
                <li className="menuList text-textColor hover:text-orangeColor">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className="menuList text-textColor hover:text-orangeColor">
                    <NavLink to="/jobs">jobs</NavLink>
                </li>
                {/* <li className="menuList text-textColor hover:text-orangeColor">
                    
                    <NavLink to="/adminpage2">Companies</NavLink>

                </li> */}
                <li className="menuList text-textColor hover:text-orangeColor">
                    <NavLink to="/contact">Contact</NavLink>
                </li>
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

export default NavBar;
