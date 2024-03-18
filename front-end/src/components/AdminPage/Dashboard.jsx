// import React from 'react'
import { Card, Space, Statistic,Typography } from "antd"
import axios from "axios"
import { useEffect, useState } from "react"
// import { useState } from "react"
const Dashboard = () => {
  const [totaljob,setTotaljob] = useState(0)
  const [totalUsers,setTotalUsers] = useState(0)
  const [No_of_organization,setNo_of_organization] = useState(0)
  const [No_of_job_seeker,setNo_of_job_seeker] = useState(0)
 useEffect(()=>{
  
  getJobs().then(res=>
    {
      setTotaljob(res.data.Jobs.length)
    }
      ),
      getUsers().then(res=>{
        setTotalUsers(res.data.users.length)

      }),
      getUsers().then(res=>
        setNo_of_organization(res.data.organization.length)),
      getUsers().then(res=>
        setNo_of_job_seeker(res.data.job_seeker.length))
 },[])
  return (
    <div>
    <Typography.Title level={5}>DashBoard</Typography.Title>
    <Space direction="horizontal" className="flex flex-wrap">
    <Card className="mr-5 bg-lime-700">
        <Space direction="horizontal"> 
            <Statistic title="Total Users" value={totalUsers}/>
        </Space>
    </Card>
    <Card className="mr-5 bg-teal-400">
        <Space direction="horizontal"> 
            <Statistic title="Total no of companies joined" value={No_of_organization}/>
        </Space>
    </Card>
    <Card className="mr-5 bg-teal-400">
        <Space direction="horizontal"> 
            <Statistic title="Total no of Job seekers joined" value={No_of_job_seeker}/>
        </Space>
    </Card>
        <Card className="mr-5 bg-yellow-200">
        <Space direction="horizontal"> 
            <Statistic title="Total Jobs" value={totaljob}/>
        </Space>
    </Card>
    </Space>

    <Space>
    </Space>
    </div>
  )
}// we will ADD ICON HERE
// const DashBoardCard =  ({title,value}) =>{
//     return(
//     <Card className="mr-5  bg-blue-500">
//         <Space direction="horizontal"> 
//             <Statistic title={title} value={value}/>
//         </Space>
//     </Card>
// )
// }
const getUsers = async()=>{
  const url = "http://localhost:3001/api/user/getUser";
   return await axios.get(url)
}
const getJobs = async()=>{
  const url = "http://localhost:3001/api/job/getJob";
   return await axios.get(url)
   
}


export default Dashboard