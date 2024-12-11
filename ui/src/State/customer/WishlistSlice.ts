import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Wishlist, WishlistState } from "../../Types/WishListsType";
import { api } from "../../config/Api";


const initialSate:WishlistState={
    wishlist:null,
    loading:false,
    error:null
}

export const getWishListByUserId = createAsyncThunk(
    'wishlist/getWishListByUserId',
    async (_,{rejectWithValue})=>{
        try {
            const response = await api.get(`api/wishList`,{
                headers:{
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`
                }
            })
            console.log("Wishlist Fetched ", response.data)
            return response.data;
        } catch (error:any) {
            console.log("getWishListByUserId Error",error);
            rejectWithValue(error.response.data.message)
        }
    }
)

export const addProductToWishlist = createAsyncThunk(
    'wishlist/addProductToWishlist',
    async ({productId}:{productId:number},{rejectWithValue})=>{
        try {
            const response = await api.post(`api/wishList/add-product/${productId}`,{},{
                headers:{
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`
                }
            })
            console.log("Added product to wishlist Fetched ", response.data)
            return response.data;
        } catch (error:any) {
            console.log("addProductToWishlist Error",error);
            rejectWithValue(error.response.data.message)
        }
    }
)

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: initialSate,
    reducers: {
        resetWishlistState : (state) => {
            state.wishlist = null;
            state.loading = false;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getWishListByUserId.pending,(state)=>{
            state.loading = true
            state.error = null
        })

        builder.addCase(getWishListByUserId.fulfilled,(state,action)=>{
            state.loading = false
            state.wishlist = action.payload
            state.error = null
        })

        builder.addCase(getWishListByUserId.rejected,(state,action)=>{
            state.loading = false
            state.error = action.payload as string
        })


        builder.addCase(addProductToWishlist.pending,(state)=>{
            state.loading = true
            state.error = null
        })

        builder.addCase(addProductToWishlist.fulfilled,(state,action: PayloadAction<Wishlist>)=>{
            state.loading = false
            state.wishlist = action.payload
            state.error = null
        })

        builder.addCase(addProductToWishlist.rejected,(state,action:PayloadAction<any>)=>{
            state.loading = false
            state.error = action.payload as string
        })
    }
})

export const {resetWishlistState} = wishlistSlice.actions;

export default wishlistSlice.reducer