import { useState } from 'react' 
import '../App.css'
import im1 from '../assets/login_image.jpg' 
import { Link, useNavigate, } from 'react-router-dom'
import axios from "axios"
import Footer from './Footer'
import NavBar from './NavBar'

function LogIn() {
  const navigate = useNavigate()
  const [error, setError] = useState("")
  const [data, setData] = useState({
    email:'',
    password:''
  })
  const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
      const url = "http://localhost:3001/api/auth/login";
      const {data:res} = await axios.post(url,data).then(res=>{
       if(res.data.Role == 'Job seeker'){
        navigate('/userpage')
       }
       else if(res.data.Role == 'Organization'){
        navigate('/organizationpage')
        // 
       }
       else if(res.data.Role == 'Admin'){
        navigate('/adminpage')
       }
      })
      console.log(data)
      // const url2 = "http://localhost:3001/api/user/getUser";
      // await axios.get(url2).then(res2=>{
      //  console.log(res2)
      // })
      localStorage.setItem("token", res.data)
  // window.location = "/"
     
  
    } catch (error) {
      if (error.response && error.response.status >=400 && error.response.status <=500){
        setError(error.response.data.message)
      }
    }

  }
  return (
  <> 
  <NavBar/>
    <div className="container flex mt-[100px] mb-[150px] m-auto h-[400px] w-[900px] ">
        <div className="imgDiv ml-0 w-[120%] ">
          <img src={im1} alt="log in" className='h-[100%] w-[100%]'  />
        </div>
        <div className="formDiv ml-4 bg-[#faffff] p-10 w-[100%] flex flex-col m-auto ">
          <h1 className=''>Log in</h1>
          {/* {error && <div className='bg-[#ff0000] text-white p-1 rounded-[5px] mt-3'>{error}</div>} */}
          <form action=""   onSubmit={handleSubmit} className='mt-6 mb-6'>
            <div>
            {/* <label htmlFor="email"className='block justify-center'>Email</label> */}
            <input type="email" className='border-b-[1px] w-[100%] py-2 overflow-none outline-none text-center focus:border-blueColor' value={data.email} onChange={(e)=>setData({...data,email:e.target.value})}placeholder='Enter your email' />
            {/* <label htmlFor="password" className='block'>Password</label> */}
            <input type="password" className='border-b-[1px] w-[100%] mt-3 py-2 outline-none text-center focus:border-blueColor' value={data.password} onChange={(e)=>setData({...data,password:e.target.value})} placeholder='Enter your password'/>
            </div> 
            {error && <div className='text-[#ff0000] mt-3'>{error}</div>}
            <button type="submit" className='p-[10px] bg-orangeColor mt-4  hover:bg-orangeColor/95 text-white rounded-[10px] '>Sign In</button>
          </form>
          <h3 className='pl-8'>Donot have an account? <Link to="/register" className='text-[#434ff1]  '>create an account</Link></h3>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default LogIn
