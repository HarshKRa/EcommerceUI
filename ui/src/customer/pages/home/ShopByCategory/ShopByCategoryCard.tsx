import React from 'react'

const ShopByCategoryCard = () => {
  return (
    <div className='flex-col text-center justify-center items-center group cursor-pointer'>
      <div className='custome-border w-[8rem] h-[8rem] lg:w-[12rem] lg:h-[12rem] rounded-full bg-primary-color'>
        <img
        className='group-hover:scale-95 transition-transform transform-duration-700 object-cover object-top h-full w-full rounded-full'
         src="https://plus.unsplash.com/premium_photo-1680382578857-c331ead9ed51?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
      <h1 className='mt-8'>Kitchen and Tabel</h1>
    </div>
  )
}

export default ShopByCategoryCard
