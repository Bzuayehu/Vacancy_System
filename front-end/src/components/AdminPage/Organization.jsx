// import React from 'react'
import { Space,Table,Typography } from "antd"
import axios from "axios";
import { useEffect, useState } from "react";

const Organization = () => {
  return (
    <div>
    <Typography.Title level={5}>Users</Typography.Title>
    <Space>
      <Users/>
    </Space>
    </div>
  )
}
const getUsers = async()=>{
  const url2 = "http://localhost:3001/api/user/getUser";
   return   await axios.get(url2)
}
const Users = ()=>{
   const [data, setData] = useState([])
   const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    getUsers().then(res=>{
      setData(res.data.organization)
      setLoading(false)

    })
  
  }, [])
  
  return <Table 
  columns={[
      {
          title:"First Name",
          dataIndex:"name"
      },
      {
          title:"Last Name",
          dataIndex:"lastName"
      },
      {
          title:"Role",
          dataIndex:"role"
      },
      {
          title:"Address",
          dataIndex:"address"
      },
  ]}

  loading = {loading}
  dataSource={data}
  >

  </Table>
}

export default Organization