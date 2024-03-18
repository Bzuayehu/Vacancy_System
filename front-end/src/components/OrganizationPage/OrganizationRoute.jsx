// import React from 'react'
import Dashboard from "./DashBoard"
import CreateJob from "./CreateJob"
import Profile from "./Profile"
import {Route, Routes} from "react-router"
const OrganizationRoute = () => {
  return (
    <Routes>
      <Route path="/organizationpage" element={<Dashboard/>}/>
      <Route path="/organizationpage/profile" element={<Profile/>}/>
      <Route path="/organizationpage/createJob" element={<CreateJob/>}/>
    </Routes>
  )
}

export default OrganizationRoute