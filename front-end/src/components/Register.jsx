import { useEffect, useState } from "react";
import "../App.css";
import im1 from "../assets/3567818.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Modal } from "./modal";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Register() {
  // const [count, setCount] = useState(0)
  const [error, setError] = useState("");
  // const [role, setRole] = useState("Job seeke");
  const [modal, setmodal] = useState(false);
  const handleColoseModal = () => {
    setmodal(false);
    if (!error) navigate("/login");
  };
  const handleForm = ({ currentTarget: input }) => { 
    setData({ ...data, [input.name]: input.value });
    // setRole(data.role)
  };
  // const handleForm = (e) => {
  //   const {value, name, type, checked} = e.target.
  //   setData((data)=>{ ...data, [name]: type == "radio"?checked:value });
  // };
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    role:""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:3001/api/auth/register";
      const { data: res } = await axios.post(url, data);

      console.log(res.message);
      // console.log(data)
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  }
  // const organization = (
  //   <>
    
  //   </>
  // )
  useEffect(() => {
    handleForm;
  }, []);
  return (
    <>
    <NavBar/>
      <div className="container flex mt-[100px] mb-[400px] m-auto h-[600px] w-[900px] ">
        <div className="imgDiv ml-0 w-[120%] m-auto h-[500px]">
          <img src={im1} alt="log in" className="h-[100%] w-[100%]" />
        </div>
        <form action="" onSubmit={handleSubmit} className="formDiv ml-4 bg-[#faffff] p-10 w-[100%] flex flex-col m-auto ">
          <div className="flex  items-center justify-between">
            <h1 className="">Register</h1>
            <div>
              <input type="radio" name="role" id="" className="mr-2" value="Job seeker"   onChange={handleForm}/>
              <label htmlFor="Job seeker">Job seeker</label>
            </div>
            <div>
              <input type="radio" name="role" id="" className="mr-2" value="Organization"  onChange={handleForm}/>
              <label htmlFor="Organization">Organization</label>
            </div>
          </div> 
          <div  className="mt-6 mb-6">
            <div>
              {/* {role =='Job seeker'? <> */}
              <label htmlFor="Name" className="block justify-center">
                Name
              </label>
              <input
                type="text"
                className="border-b-[1px] w-[100%] py-2 overflow-none outline-none text-center focus:border-blueColor"
                name="name"
                value={data.name}
                onChange={handleForm}
                placeholder="Enter your Name"
              />
               {/* </>:<>
              <label htmlFor="organizationName" className="block justify-center">
                Organization Name
              </label>
              <input
                type="text"
                className="border-b-[1px] w-[100%] py-2 overflow-none outline-none text-center"
                name="organizationName"
                value={data.organizationName}
                onChange={handleForm}
                placeholder="Enter your organization name"
              />
              </>}  */}
            
              <label htmlFor="Last Name" className="block justify-center">
                Last Name
              </label>
              <input
                type="text"
                className="border-b-[1px] w-[100%] py-2 overflow-none outline-none text-center focus:border-blueColor"
                name="lastName"
                value={data.lastName}
                onChange={handleForm}
                placeholder="Enter your Last Name"
              />
              <label htmlFor="email" className="block justify-center">
                Email
              </label>
              <input
                type="email"
                className="border-b-[1px] w-[100%] py-2 overflow-none outline-none text-center focus:border-blueColor"
                name="email"
                value={data.email}
                onChange={handleForm}
                placeholder="Enter your email"
              />
              <label htmlFor="password" className="block">
                Password
              </label>
              <input
                type="password"
                className="border-b-[1px] w-[100%] mt-3 py-2 outline-none text-center focus:border-blueColor"
                name="password"
                value={data.password}
                onChange={handleForm}
                placeholder="Enter your password"
              />
              <label htmlFor="Adrrss" className="block">
                Address
              </label>
              <input
                type="text"
                className="border-b-[1px] w-[100%] mt-3 py-2 outline-none text-center  focus:border-blueColor"
                name="address"
                value={data.address}
                onChange={handleForm}
                placeholder="Enter your address"
              />
            </div>
            {error && <div className="text-[#f03e3e] mt-3">{error}</div>}
            <button
              onClick={() => {
                setmodal(true)
                setError("")
                
              }
              }
              type="submit"
              className="p-[10px] bg-orangeColor mt-4  hover:bg-orangeColor/95 text-white rounded-[10px] "
            >
              Sign Up
            </button>
          </div>
          <h3 className="pl-8">
            have an account?
            <Link to="/login" className="text-[#434ff1]  ">
              sign in
            </Link>
          </h3>
          <Modal ERR={error} visible={modal} onclocse={handleColoseModal}>
            {!error ? (
              <>
                <h1 className="text-green2 font-medium">
                  {" "}
                  registered succesfully
                </h1>
                <h1>
                  use your email:{" "}
                  <span className="text-green2">{data.email}</span> and your
                  password: <span className="text-green2">{data.password}</span>{" "}
                  to sign in
                </h1>
              </>
            ) : (
              <h1 className="text-red font-medium"> Something went wrong</h1>
            )}
          </Modal>
        </form>
      </div>
      <Footer/>
    </>
  );
}

export default Register;
