import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart, CartItem } from "../../Types/CartType";
import { api } from "../../config/Api";
import { sumCartItemMrpPrice } from "../../Util/sumCartItemMrpPrice";
import { sumCartItemSellingPrice } from "../../Util/sumCartItemSellingPrice";
import { applyCoupon } from "./CouponSlice";

interface CartState {
  cart: Cart | null;
  loading: boolean;
  error: string | null;
}

const initialState: CartState = {
  cart: null,
  loading: false,
  error: null,
};

const API_URL = "/api/cart";

export const fetchUserCart = createAsyncThunk<Cart, string>(
  "cart/fetchUserCart",
  async (jwt:string, { rejectWithValue }) => {
    try {
      const response = await api.get(API_URL, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      console.log("Fetched cart ", response.data);
      return response.data;
    } catch (error) {
      console.log("Fetching user cart", error);
      return rejectWithValue("Failed to fetch the user cart");
    }
  }
);

interface AddItemRequest {
  productId: number | undefined;
  size: string;
  quantity: number;
}

export const addItemToCart = createAsyncThunk<
  CartItem,
  { jwt: string | null; request: AddItemRequest }
>("cart/addItemToCart", async ({ jwt, request }, { rejectWithValue }) => {
  try {
    const response = await api.put(`${API_URL}/add`, request, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    console.log("Added item to cart ", response.data);
    return response.data;
  } catch (error) {
    console.log("Error for item to add cart ", error);
    return rejectWithValue("Failed to add item to cart");
  }
});

export const deleteCartItem = createAsyncThunk<
  any,
  { jwt: string; carItemId: number }
>("cart/deleteCartItem", async ({ jwt, carItemId }, { rejectWithValue }) => {
  try {
    const response = await api.delete(`${API_URL}/item/${carItemId}`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    console.log("deleted cartItem ", response.data);
    return response.data;
  } catch (error: any) {
    console.log("failed to delete item from cart ", error);
    return rejectWithValue(
      error.response.data.message || "failed to delete item from cart"
    );
  }
});

export const updateCartItem = createAsyncThunk<
  any,
  { jwt: string | null; carItemId: number; cartItem: any }
>(
  "cart/updateCartItem",
  async ({ jwt, carItemId, cartItem }, { rejectWithValue }) => {
    try {
      const response = await api.put(`${API_URL}/item/${carItemId}`, cartItem,{
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("update cartItem ", response.data);
      return response.data;
    } catch (error: any) {
      console.log("failed to update item from cart ", error);
      return rejectWithValue(
        error.response.data.message || "failed to update item from cart"
      );
    }
  }
);

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        resetCartSate:(state)=>{
            state.cart = null;
            state.loading = false;
            state.error = null;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchUserCart.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })

        builder.addCase(fetchUserCart.fulfilled,(state,action:PayloadAction<Cart>)=>{
            state.cart=action.payload;
            state.loading = false;
        })

        builder.addCase(fetchUserCart.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload as string;
        })


        builder.addCase(addItemToCart.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })

        builder.addCase(addItemToCart.fulfilled,(state,action:PayloadAction<CartItem>)=>{

            if(state.cart){
                state.cart.cartItems.push(action.payload);
            }
            state.loading = false;
        })

        builder.addCase(addItemToCart.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload as string;
        })



        builder.addCase(deleteCartItem.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })

        builder.addCase(deleteCartItem.fulfilled,(state,action)=>{

            if(state.cart){
                state.cart.cartItems = state.cart.cartItems.filter((item:CartItem)=>
                    item.id !== action.meta.arg.carItemId
                );

                const mrpPrice = sumCartItemMrpPrice(state.cart?.cartItems || []);
                const sellingPrice = sumCartItemSellingPrice(state.cart?.cartItems || []);
                state.cart.totalSellingPrice = sellingPrice;
                state.cart.totalMrpPrice = mrpPrice;

            }
            state.loading = false;
        })

        builder.addCase(deleteCartItem.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload as string;
        })

        builder.addCase(updateCartItem.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })


        builder.addCase(updateCartItem.fulfilled,(state,action)=>{

            if(state.cart){
                const index = state.cart.cartItems?.findIndex(
                    (item:CartItem) => item.id === action.meta.arg.carItemId
                );
            
                if (index !== -1) {
                    state.cart.cartItems[index] = {
                        ...state.cart.cartItems[index],
                        ...action.payload,
                    };
                }
        
                const mrpPrice = sumCartItemMrpPrice(state.cart?.cartItems || []);
                const sellingPrice = sumCartItemSellingPrice(state.cart?.cartItems || []);
                state.cart.totalSellingPrice = sellingPrice;
                state.cart.totalMrpPrice = mrpPrice;
            }
        
            state.loading = false;
        })

        builder.addCase(updateCartItem.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload as string;
        })

        builder.addCase(applyCoupon.fulfilled,(state,action)=>{
            state.loading = false;
            state.cart = action.payload;
        })
    }
})

export const {resetCartSate} = cartSlice.actions;
export default cartSlice.reducer;
