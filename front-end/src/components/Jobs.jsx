// import { useState } from 'react'
import axios from "axios";
import "../App.css";
// import { registerController } from '../../server/controller/authcontroller'
import { BiTimeFive } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Data = [{
  id: 1,
  // image:logo1,
  title: "Web Developer",
  time: "Now",
  location: "Addis Ababa",
  desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit asperiores ex quidem aut eveniet veniam repudiandae optio amet deserunt. Illum doloremque accusamus harum iusto reprehenderit eum ad. Omnis, vero quis!",
  company: "commercial Bank of Ethiopia",
},
{
  id: 2,
  // image:logo1,
  title: "UI designer",
  time: "jan 14",
  location: "Bahir Dar",
  desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit asperiores ex quidem aut eveniet veniam repudiandae optio amet deserunt. Illum doloremque accusamus harum iusto reprehenderit eum ad. Omnis, vero quis!",
  company: "commercial Bank of Ethiopia",
},
{
  id: 2,
  // image:logo1,
  title: "UI designer",
  time: "jan 14",
  location: "Bahir Dar",
  desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit asperiores ex quidem aut eveniet veniam repudiandae optio amet deserunt. Illum doloremque accusamus harum iusto reprehenderit eum ad. Omnis, vero quis!",
  company: "commercial Bank of Ethiopia",
},
{
  id: 2,
  // image:logo1,
  title: "UI designer",
  time: "jan 14",
  location: "Bahir Dar",
  desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit asperiores ex quidem aut eveniet veniam repudiandae optio amet deserunt. Illum doloremque accusamus harum iusto reprehenderit eum ad. Omnis, vero quis!",
  company: "commercial Bank of Ethiopia",
},
{
  id: 2,
  // image:logo1,
  title: "UI designer",
  time: "jan 14",
  location: "Bahir Dar",
  desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit asperiores ex quidem aut eveniet veniam repudiandae optio amet deserunt. Illum doloremque accusamus harum iusto reprehenderit eum ad. Omnis, vero quis!",
  company: "commercial Bank of Ethiopia",
},
{
  id: 2,
  // image:logo1,
  title: "UI designer",
  time: "jan 14",
  location: "Bahir Dar",
  desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit asperiores ex quidem aut eveniet veniam repudiandae optio amet deserunt. Illum doloremque accusamus harum iusto reprehenderit eum ad. Omnis, vero quis!",
  company: "commercial Bank of Ethiopia",
},
{
  id: 2,
  // image:logo1,
  title: "UI designer",
  time: "jan 14",
  location: "Bahir Dar",
  desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit asperiores ex quidem aut eveniet veniam repudiandae optio amet deserunt. Illum doloremque accusamus harum iusto reprehenderit eum ad. Omnis, vero quis!",
  company: "commercial Bank of Ethiopia",
},
{
  id: 2,
  // image:logo1,
  title: "UI designer",
  time: "jan 14",
  location: "Bahir Dar",
  desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit asperiores ex quidem aut eveniet veniam repudiandae optio amet deserunt. Illum doloremque accusamus harum iusto reprehenderit eum ad. Omnis, vero quis!",
  company: "commercial Bank of Ethiopia",
},
{
  id: 2,
  // image:logo1,
  title: "UI designer",
  time: "jan 14",
  location: "Bahir Dar",
  desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit asperiores ex quidem aut eveniet veniam repudiandae optio amet deserunt. Illum doloremque accusamus harum iusto reprehenderit eum ad. Omnis, vero quis!",
  company: "commercial Bank of Ethiopia",
},
{
  id: 2,
  // image:logo1,
  title: "UI designer",
  time: "jan 14",
  location: "Bahir Dar",
  desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit asperiores ex quidem aut eveniet veniam repudiandae optio amet deserunt. Illum doloremque accusamus harum iusto reprehenderit eum ad. Omnis, vero quis!",
  company: "commercial Bank of Ethiopia",
},
{
  id: 2,
  // image:logo1,
  title: "UI designer",
  time: "jan 14",
  location: "Bahir Dar",
  desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit asperiores ex quidem aut eveniet veniam repudiandae optio amet deserunt. Illum doloremque accusamus harum iusto reprehenderit eum ad. Omnis, vero quis!",
  company: "commercial Bank of Ethiopia",
},
{
  id: 4,
  // image:logo1,
  title: "software Developer",
  time: "Now",
  location: "Jimma",
  desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit asperiores ex quidem aut eveniet veniam repudiandae optio amet deserunt. Illum doloremque accusamus harum iusto reprehenderit eum ad. Omnis, vero quis!",
  company: "Ab Software company",
},
{
  id: 4,
  // image:logo1,
  title: "software Developer",
  time: "Now",
  location: "Jimma",
  desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit asperiores ex quidem aut eveniet veniam repudiandae optio amet deserunt. Illum doloremque accusamus harum iusto reprehenderit eum ad. Omnis, vero quis!",
  company: "Ab Software company",
}

]
function Jobs() {
  // const [count, setCount] = useState(0)
  return (
    <>
    <NavBar/>
    <div className="jobContainer flex gap-10 justify-start flex-wrap items-center w-[90%] pt-28  ml-20 py-10 pl-7">
      {
      Data.map((data)=>(
        <div key={data.id} className="group group/item singleJob w-[250px] h-[300px] p-[20px] bg-[#f0f8ff] rounded-[10px] hover:bg-[#f0f8ff]  shadow-lg shadow-gray hover:shadow-lg    ">
        <span className="flex justify-between items-center gap-4  h-14">
          <h1 className="text-[16px] font-semibold text-black">
          {/* group-hover:text-white */}
            {data.title}
          </h1>
          <span className="flex items-center text-[#535151] gap-1">
            <BiTimeFive />  {data.time}
          </span>
        </span>
        <h6 className="text-orangeColor"> {data.location} </h6>
        <p className="text-[13px] text-textColor pt-[20px] border-t-[2px] mt-[20px] border-orangeColor">
        {/* group-hover:text-white  */}
      {data.desc.slice(0,45)}...  <a className="text-gray" href="">see more</a> 
        </p>
        <div className="company flex items-center gap-2">
          <img src="" alt="" className="w-[10%]" />
          <span className="text-[12px] py-[1rem] block text-orangeColor font-semibold">
          {/* group-hover:text-white */}
            {data.company}
          </span>
        </div>
        <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-orangeColor hover:bg-orangeColor  group-hover:border-orangeColor hover:text-white ">
        {/* group-hover/item:text-white */}
          
          <NavLink to="/jobs/:id">Apply Now</NavLink>
        </button>
      </div>
        )
        )
      }
      
    </div>
    <Footer/>
    </>
  );
}
const getJobs = async()=>{
  const url = "http://localhost:3001/api/job/getJob";
   return await axios.get(url)
   
}

export default Jobs;
