import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../config/Api";
import { stat } from "fs";

export const fetchSellerProfile=createAsyncThunk('sellers/fetchSellerProfile',
    async(jwt:string, {rejectWithValue})=>{
        try {
            const response = await api.get("/sellers/profile",
                {
                    headers:{
                        Authorization: `Bearer ${jwt}`
                    },
                }
            )
            console.log("fetch seleer Profile Response : " ,response.data)
            return response.data;
        } catch (error) {
            console.log("error - " ,error)
        }
})

interface SellerSate{
    sellers:any[],
    selctedSeller:any,
    profile:any,
    report:any,
    loading:boolean,
    error:any,
}

const initialState:SellerSate={
    sellers:[],
    selctedSeller:null,
    profile:null,
    report:null,
    loading:false,
    error:null,
}

const sellerSlice = createSlice({
    name: 'sellers',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchSellerProfile.pending,(state)=>{
            state.loading=true;
        })
        .addCase(fetchSellerProfile.fulfilled,(state,action)=>{
            state.loading=false;
            state.profile=action.payload;
        })
        .addCase(fetchSellerProfile.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.error.message;
        })
    }

})

export default sellerSlice.reducer;

