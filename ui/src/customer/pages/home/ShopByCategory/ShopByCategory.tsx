import React from 'react'
import ShopByCategoryCard from './ShopByCategoryCard'

const ShopByCategory = () => {
  return (
    <div className='flex flex-wrap justify-center lg:px-20 gap-10'>
        {[1,1,1,1,1,1,1,1,1].map(()=><ShopByCategoryCard />)}
      
    </div>
  )
}

export default ShopByCategory
