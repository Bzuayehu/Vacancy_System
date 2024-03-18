// import React from 'react'
import { Card, Space, Statistic, Typography } from "antd"
// import {useDispatch,useSelector} from 'react-redux'
const Dashboard = () => {
  return (
    <div>
    <Typography.Title level={5}>DashBoard</Typography.Title>
    <Space direction="horizontal" className="flex flex-wrap">
        <DashBoardCard title={"users"}value={100}/>
        <DashBoardCard title={"users"}value={100}/>
        <DashBoardCard title={"users"}value={100}/>
        <DashBoardCard title={"users"}value={100}/>
    </Space>
    </div>
  )
}// we will ADD ICON HERE
const DashBoardCard =  ({title,value}) =>{
    return(
    <Card>
        <Space direction="horizontal"> 
            <Statistic title={title} value={value}/>
        </Space>
    </Card>
)
}

export default Dashboard