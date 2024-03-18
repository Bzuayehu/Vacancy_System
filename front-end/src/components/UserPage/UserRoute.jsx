// import React from 'react'
import Profile from "./Profile"
import Myapplication from "./Myapplication"
import Dashboard from "./Dashboard"
 import {Route, Routes} from "react-router"
const UserRoute = () => {
  return (
    <Routes>
      <Route path="/userpage" element={<Dashboard/>}/>
      <Route path="/userpage/profile" element={<Profile/>}/>
      <Route path="/userpage/myapplication" element={<Myapplication/>}/>
    </Routes>
  )
}

export default UserRoute