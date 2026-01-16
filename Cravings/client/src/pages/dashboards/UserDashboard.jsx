import React from 'react'
import SideBar from '../../components/userDashboard/SideBar'

const UserDashboard = () => {
  return (
    <>
    <div className='flex w-full'>
        <div className='border border-green-500 w-1/7'><SideBar/></div>
        <div className='border border-red-500 w-6/7'>content</div>
    </div>
    </>
  )
}

export default UserDashboard