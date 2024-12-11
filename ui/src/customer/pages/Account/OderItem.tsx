import { ElectricBolt } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import { teal } from '@mui/material/colors'
import React from 'react'
import { Order, OrderItem } from '../../../Types/OrderType'
import { useNavigate } from 'react-router-dom'

const OderItemCard = ({item,order}:{item:OrderItem,order:Order}) => {
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`${order.id}/${item.id}`)} className='text-sm bg-white p-5 space-y-4 border rounded-md cursor-pointer'>
      <div className="flex items-center gap-5">
        <div>
          <Avatar sizes='small' sx={{bgcolor:teal[500]}}>
            <ElectricBolt />
          </Avatar>
        </div>

        <div>
          <h1 className="font-bold text-primary-color">
            {}
          </h1>
          <p>Arriving by</p>
          <p>{order.deliverDate}</p>
        </div>
      </div>

      <div className='p-5 bg-teal-50 flex gap-3'>
<div>
  <img
  className='w-[70px]'
   src={item.product.image[0]} alt="" />
  </div>

  <div className='w-full space-y-2'>
    <h1 className='font-bold'>{item.product.seller?.businessDetails.businessName}</h1>
    <p>{item.product.title}</p>
    <p>
      <strong>Size : </strong>
      FREE
    </p>
  </div>
      </div>
    </div>
  )
}

export default OderItemCard
