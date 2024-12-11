import React, { useEffect } from 'react'
import OderItem from './OderItem'
import { useAppDispatch, useAppSelctoer } from '../../../State/Store'
import { fetchUserOrderHistory } from '../../../State/customer/OrderSlice';

const Oders = () => {
  const dispatch = useAppDispatch();
  const {order} = useAppSelctoer((store)=>store);

  useEffect( ()=>{
     async function data(){
      await dispatch(fetchUserOrderHistory(localStorage.getItem("jwt") || ""));
     } 

     data();
     
  },[])

  console.log(order)
  return (
    <div className='text-sm min-h-screen'>
      <div className='pb-5'>
        <h1 className='font-semibold'>All Orders</h1>
        <p>from any time</p>
      </div>
      <div className="space-y-2">
       {
        order.orders.map((order)=>order.oderItems.map((items)=>
        <OderItem order={order} item={items} />))
       }
        
      </div>
    </div>
  )
}

export default Oders

