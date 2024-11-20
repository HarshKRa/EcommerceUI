import React from 'react'
import ProfileFiledCard from '../../../component/ProfileFiledCard'
import { Divider } from '@mui/material'

const UserDetails = () => {
  return (
    <div className='flex justify-center py-10'>
      <div className="w-full lg:w-[70%]">
        <div className="flex items-center pb-3 justify-center">
          <h1 className='text-2xl font-bold text-gray-600'>Persional Details</h1>
        </div>

        <div className="">
          <ProfileFiledCard keys='Name' value={"Harsh Raj"} />
          <Divider />
          <ProfileFiledCard keys='email' value={"harsh726181@gmail.com"} />
          <Divider />
          <ProfileFiledCard keys='Mobile' value={1234567890} />
          <Divider />
        </div>
      </div>
      
    </div>
  )
}

export default UserDetails
