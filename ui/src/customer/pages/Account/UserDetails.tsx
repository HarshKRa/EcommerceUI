import React from 'react'
import ProfileFiledCard from '../../../component/ProfileFiledCard'
import { Divider } from '@mui/material'
import { useSelector } from 'react-redux'
import store, { useAppSelctoer } from '../../../State/Store'

const UserDetails = () => {
  const {auth} = useAppSelctoer(store=>store);
  return (
    <div className='flex justify-center py-10'>
      <div className="w-full lg:w-[70%]">
        <div className="flex items-center pb-3 justify-center">
          <h1 className='text-2xl font-bold text-gray-600'>Persional Details</h1>
        </div>

        <div className="">
          <ProfileFiledCard keys='Name' value={auth.user?.fullName} />
          <Divider />
          <ProfileFiledCard keys='email' value={auth.user?.email} />
          <Divider />
          <ProfileFiledCard keys='Mobile' value={auth.user?.mobile || '721810781'} />
          <Divider />
        </div>
      </div>
      
    </div>
  )
}

export default UserDetails
