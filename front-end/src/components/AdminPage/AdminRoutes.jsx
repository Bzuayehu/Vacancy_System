// import React from 'react'/
import Jobs from "./Jobs"
import User from "./User"
import Dashboard from "./Dashboard"
import Organization from "./Organization"
import { Route,Routes } from "react-router"
const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/adminpage/job" element={<Jobs/>}/> 
      <Route path="/adminpage/Jobseekers" element={<User/>}/>
      <Route path="/adminpage/organizations" element={<Organization/>}/>
      <Route path="/adminpage" element={<Dashboard/>}/>
    </Routes>
  )
}

export default AdminRoutes