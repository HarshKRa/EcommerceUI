import React from 'react'
import OderItem from './OderItem'

const Oders = () => {
  return (
    <div className='text-sm min-h-screen'>
      <div className='pb-5'>
        <h1 className='font-semibold'>All Orders</h1>
        <p>from any time</p>
      </div>
      <div className="space-y-2">
        {[1,1,1,1,1,1].map((item)=>
        <OderItem />)}
      </div>
    </div>
  )
}

export default Oders
