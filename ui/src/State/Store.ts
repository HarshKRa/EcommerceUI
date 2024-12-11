import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { thunk } from "redux-thunk";
import sellerSlice from './seller/SellerSlice'
import SellerProductSlice from './seller/SellerProductSlice'
import productSlice from './customer/ProductSlice'
import authSlice from './AuthSlice'
import cartSlice from './customer/CartSlice'
import orderSlice from './customer/OrderSlice'
import wishlistSlice from './customer/WishlistSlice'

const rootReducer = combineReducers({
        seller:sellerSlice,
        sellerProduct:SellerProductSlice,
        product:productSlice,
        auth:authSlice,
        cart:cartSlice,
        order:orderSlice,
        wishlist:wishlistSlice
    
})

const store = configureStore({
    reducer:rootReducer,
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(thunk)
})


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

export const useAppDispatch =()=> useDispatch<AppDispatch>();
export const useAppSelctoer : TypedUseSelectorHook<RootState> = useSelector;

export  default store;