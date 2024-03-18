// import { useState } from 'react'
import "../App.css";
// import { registerController } from '../../server/controller/authcontroller'
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
function Footer() {
  // const [count, setCount] = useState(0)
  return (
    <div className=" w-full footer sticky  mb-4 bg-orangeColor flex items-center  flex-col">
      <div className="lg:gap-[8] lg:grid lg:grid-cols-5  sm:flex sm:w-full m-auto items-center justify-center p-[5rem]">
        <div>
          <div className="logoDiv">
            <h1 className="logo text-[25px] text-white pb-[1.5rem]  ">
              <strong>Job</strong>Portal
            </h1>
          </div>
          <p className=" text-white pb-[13px] opacity-70 leading-7 ">
            we may always make our seekers and companies find the best jobs and
            employers find the best candidate
          </p>
        </div>
        <div className="grid ml-4">
          <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white ">
            Company
          </span>
          <div className="grid gap-3">
            <li className="text-white opacity-[0.7] hover:opacity-[1] ">About Us</li>
            <li className="text-white opacity-[0.7] hover:opacity-[1] ">Feature </li>
            <li className="text-white opacity-[0.7] hover:opacity-[1] ">News</li>
            <li className="text-white opacity-[0.7] hover:opacity-[1] ">FAQ</li>
          </div>
        </div>
        <div className="grid">
          <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white ">
            Resources
          </span>
          <div className="grid gap-3">
            <li className="text-white opacity-[0.7] hover:opacity-[1] ">Account</li>
            <li className="text-white opacity-[0.7] hover:opacity-[1] ">Support Center </li>
            <li className="text-white opacity-[0.7] hover:opacity-[1] ">Feed Back</li>
            <li className="text-white opacity-[0.7] hover:opacity-[1] ">Contact Us</li>
          </div>
        </div>
        <div className="grid">
          <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white ">
            Support
          </span>
          <div className="grid gap-3">
            <li className="text-white opacity-[0.7] hover:opacity-[1] ">Events</li>
            <li className="text-white opacity-[0.7] hover:opacity-[1] ">Promo </li>
            <li className="text-white opacity-[0.7] hover:opacity-[1] ">Req Demo</li>
            <li className="text-white opacity-[0.7] hover:opacity-[1] ">Careers</li>
          </div>
        </div>
        <div className="grid">
          <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white ">
            Contact Info
          </span>
          <div className="">
            <small className="text-[14px] text-white">
              bizuayehuagide@gmail.com
            </small>
            <div className="icons flex gap-4 py-[1rem]">
              <AiFillInstagram className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-orangeColor  " />
              <AiFillFacebook className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-orangeColor  " />
              <AiFillLinkedin className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-orangeColor  " />
              <AiFillGithub className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-orangeColor  " />
            </div>

          </div>
        </div>
      </div>
      <div className="flex items-center mb-4 mt-3">
        <h6 className="text-white">&copy; copyright 2015 job vacancy management system</h6>
      </div>
    </div>
  );
}

export default Footer;
