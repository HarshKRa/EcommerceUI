import { ElectricBolt } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import { teal } from '@mui/material/colors'
import React from 'react'

const OderItem = () => {
  return (
    <div className='text-sm bg-white p-5 space-y-4 border rounded-md cursor-pointer'>
      <div className="flex items-center gap-5">
        <div>
          <Avatar sizes='small' sx={{bgcolor:teal[500]}}>
            <ElectricBolt />
          </Avatar>
        </div>

        <div>
          <h1 className="font-bold text-primary-color">
            PENDING
          </h1>
          <p>Arriving by Mon, 15 Jul</p>
        </div>
      </div>

      <div className='p-5 bg-teal-50 flex gap-3'>
<div>
  <img
  className='w-[70px]'
   src="https://images.unsplash.com/photo-1585076641399-5c06d1b3365f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
  </div>

  <div className='w-full space-y-2'>
    <h1 className='font-bold'>Virani Clothing</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptatibus itaque molestiae tempora at? Itaque facilis corrupti earum nulla ipsa.</p>
    <p>
      <strong>Size : </strong>
      FREE
    </p>
  </div>
      </div>
    </div>
  )
}

export default OderItem
