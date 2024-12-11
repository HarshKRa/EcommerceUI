import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../config/Api";
import { Product } from "../../Types/ProductType";
import { createExportDefault } from "typescript";
import toast from "react-hot-toast";

export const fetchSellerProduct = createAsyncThunk<Product[],any>(
    'sellerProduct/fetchSellerProduct',
    async(jwt:string,{rejectWithValue})=>{
        try {
            const response = await api.get('api/sellers',{
                headers:{
                    Authorization : `Bearer ${jwt}`
                },
            })
            console.log("seller products : ", response.data)
            return response.data;
        } catch (error) {
            console.log("product fetched error : ", error)
        }
    }
)


export const createProduct = createAsyncThunk<Product,{request:any,jwt:string | null}>(
    'sellerProduct/createProduct',
    async(args,{rejectWithValue}) => {
        const {request,jwt} = args;
        try {
            const response = await api.post("/api/sellers",request,
           { headers:{
                Authorization : `Bearer ${jwt}`
            },
        })
        console.log("created products : ", response.data)
        toast.success("Product added sucessfully!")
        return response.data;
        } catch (error) {
            toast.error("Product added sucessfully!")
            console.log("product creating : ",error)
        }
    }
)


interface SellerProductState{
    products:Product[];
    loading:boolean;
    error:any | null;
}

const initialState : SellerProductState = {
    products:[],
    loading:false,
    error:null
} 

const SellerProductSlice = createSlice({
    name:"sellerProduct",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchSellerProduct.pending,(state)=>{
            state.loading = true;
        })
        builder.addCase(fetchSellerProduct.fulfilled,(state,action)=>{
            state.loading = false;
            state.products = action.payload;
        })
        builder.addCase(fetchSellerProduct.rejected ,(state,action)=>{
            state.loading = false;
            state.error = action.error.message;
        })
        builder.addCase(createProduct.pending,(state)=>{
            state.loading = true;
        })
        builder.addCase(createProduct.fulfilled,(state,action)=>{
            state.loading = false;
            state.products.push(action.payload);
        })
        builder.addCase(createProduct.rejected ,(state,action)=>{
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

export default SellerProductSlice.reducer