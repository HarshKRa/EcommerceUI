import React from 'react'
import SellerDashboard from '../seller/pages/SellerDashboard/SellerDashboard'
import Dashboard from '../seller/pages/SellerDashboard/Dashboard'
import { Route, Routes } from 'react-router-dom'
import Products from '../seller/pages/Products/Products'
import AddProducts from '../seller/pages/Products/AddProducts'
import Oder from '../seller/pages/Oders/Oder'
import Profile from '../seller/pages/Account/Profile'
import Payment from '../seller/pages/Payment/Payment'
import Transaction from '../seller/pages/Transaction/Transaction'

const SellerRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/add-product" element={<AddProducts />} />
        <Route path="/orders" element={<Oder />} />
        <Route path="/account" element={<Profile />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/transaction" element={<Transaction />} />
      </Routes>
    </div>
  )
}

export default SellerRoutes
