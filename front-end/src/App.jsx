// import { useState } from 'react' 
// import Dashboard from './components/Dashboard'
import Home from './components/Home'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import LogIn from './components/login'
import { Route, Routes } from 'react-router-dom'
import Register from './components/Register'
import Jobs from './components/Jobs'
// import AdminPage from './components/AdminPage'
import Contact from './components/Contact' 
import Job from './components/Job'
// import AdminPage2 from './components/Adminpage2'

import AdminPage from './components/AdminPage/AdminPage3'
import User from './components/AdminPage/User'
import Organization from './components/AdminPage/Organization'
import J from './components/AdminPage/Jobs'
import Dashboard from './components/AdminPage/Dashboard'

import UserPage from './components/UserPage/UserPage.jsx'
import DashboardU from './components/UserPage/Dashboard'
import Myapplication from './components/UserPage/Myapplication'
import Profile from './components/UserPage/Profile'

import OrganizationPage from './components/OrganizationPage/OrganizationPage'
import CreateJob from './components/OrganizationPage/CreateJob'
import DashboardO from './components/OrganizationPage/DashBoard'
import ProfileO from './components/OrganizationPage/Profile'
function App() {
   return (
      <div className='lg:w-[100%] md:w-[100%] sm:w-[100%] m-auto  app  '>
         {/* <NavBar /> */}
       
         {/* <UserNavbar/> */}
         {/* <AdminPage /> */}
         <Routes>
             <Route path='/adminpage' element={<AdminPage />}> 
               <Route path="/adminpage/Jobseekers" element={<User/>}/>
               <Route path="/adminpage/job" element={<J/>}/>
               <Route path="/adminpage/organizations" element={<Organization/>}/>
               <Route path="/adminpage" element={<Dashboard/>}/>
             </Route>
             <Route path='/userpage' element={<UserPage />}> 
               <Route path="/userpage/myapplication" element={<Myapplication/>}/>
               <Route path="/userpage/profile" element={<Profile/>}/>
               <Route path="/userpage" element={<DashboardU/>}/>
             </Route>
             <Route path='/organizationpage' element={<OrganizationPage/>}> 
               <Route path="/organizationpage/createjob" element={<CreateJob/>}/>
               <Route path="/organizationpage/profile" element={<ProfileO/>}/>
               <Route path="/organizationpage" element={<DashboardO/>}/>
             </Route>

            <Route path='/' element={<Home />} />
               <Route path='/jobs' element={<Jobs />} />
               <Route path='/jobs/:id' element={<Job/>} />
               <Route path='/contact' element  ={<Contact/>} />
               <Route path='/register' element={<Register />} />
               <Route path='/login' element={<LogIn />} />
            <Route/>
         </Routes>
         {/* <Footer /> */}
      </div>
   )
}
export default App
