// import React from 'react'
import { Space,Table,Typography } from "antd"
import axios from "axios";
import { useEffect, useState } from "react";

const Jobs = () => {
  return (
    <div>
    <Typography.Title level={5}>Jobs</Typography.Title>
    <Space>
      <GetJobs/>
    </Space>
    </div>
  )
}
const getJobs = async()=>{
  const url2 = "http://localhost:3001/api/job/getJob";
   return   await axios.get(url2)
   
}
const GetJobs = ()=>{
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
 useEffect(() => {
   setLoading(true)
   getJobs().then(res=>{
     setData(res.data.Jobs)
     setLoading(false)

   })
 
 }, [])
  
  return <Table 
  columns={[
      {
          title:"Company Name",
          dataIndex:"company_name"
      },
      {
          title:"Position",
          dataIndex:"position"
      },
      {
          title:"Job Type",
          dataIndex:"jobType"
      },
      {
          title:"Location",
          dataIndex:"location"
      },
      {
        title:"Status",
        dataIndex:"status"
    },
  ]}
  loading ={loading}
  dataSource={data}
  >

  </Table>
  }


export default Jobs