import React from 'react'

const DealCard = () => {
  return (
    <div className='w-[13rem] cursor-pointer'>
      <img
      className='border-x-[7px] border-t-[7px] border-pink-600 w-full h-[12rem] object-cover object-top'
      src="https://images.unsplash.com/photo-1598516802414-50a01bee818d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <div className='boder-4 border-black bg-black text-white p-2 text-center'>
      <p className='text-lg font-semibold'>Smart Watch</p>
      <p className='text-2xl font-bold'>20% OFF</p>
      <p className='text-balance text-lg'>Shop now</p>
      </div>
    </div>
  )
}

export default DealCard
