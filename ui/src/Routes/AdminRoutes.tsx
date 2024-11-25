import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SellersTabel from '../admin/Pages/Sellers/SellersTabel'
import Coupon from '../admin/Pages/Coupon/Coupon'
import AddNewCoupons from '../admin/Pages/Coupon/AddNewCoupons'
import GridTabel from '../admin/Pages/HomePage/GridTabel'
import ElectricTabel from '../admin/Pages/HomePage/ElectroncTabel'
import ShopByCategory from '../admin/Pages/HomePage/ShopByCategory'
import Deal from '../admin/Pages/HomePage/Deal'

const AdminRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SellersTabel />} />
        <Route path="/coupon" element={<Coupon />} />
        <Route path="/add-coupon" element={<AddNewCoupons />} />
        <Route path="/home-grid" element={<GridTabel />} />
        <Route path="/elctronics-category" element={<ElectricTabel />} />
        <Route path="/shop-by-category" element={<ShopByCategory />} />
        <Route path="/deals" element={<Deal />} />
      </Routes>
    </div>
  )
}

export default AdminRoutes
