import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../../config/Api";
import { Cart } from "../../Types/CartType";
import { CouponState } from "../../Types/CouponTypes";

const API_URL = "/api/coupons";

export const applyCoupon = createAsyncThunk<
  Cart,
  { apply: string; code: string; orderValue: number; jwt: string },
  { rejectValue: string }
>(
    "coupon/applyCoupon",
    async ({apply,code,orderValue,jwt},{rejectWithValue})=>{
        try {
            const response = await api.post(`${API_URL}/apply`,null,{
                headers:{
                    'Authorization':`Bearer ${jwt}`
                },
                params:{
                    apply,code,orderValue
                }
            })
            console.log("Apply coupon data ",response.data)
            return response.data
        } catch (error:any) {
            console.log("Failed to apply coupon ",error)
            return rejectWithValue(error.response?.data.error || "Failed to apply coupon")
        }
    }
);



const initialState : CouponState ={
    coupons:[],
    cart:null,
    loading:false,
    error:null,
    couponCreated:false,
    couponApplied:false,
}

const couponSlice = createSlice({
    name:"coupon",
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(applyCoupon.pending,(state)=>{
            state.loading=true
        })

        .addCase(applyCoupon.fulfilled,(state,action)=>{
            state.loading=false
            state.cart = action.payload;

            if(action.meta.arg.apply=="true"){
                state.couponApplied=true;
            }
        })

        .addCase(applyCoupon.rejected,(state,action:PayloadAction<string | undefined>)=>{
            state.loading=false
            state.error = action.payload || "Failed to apply coupon"
            state.couponApplied=false;
        })
    }
})

export default couponSlice.reducer
