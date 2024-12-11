import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../config/Api";

export const sellerLogin=createAsyncThunk<any,any>('/sellerAuth/sellerLogin',
    async(loginRequest, {rejectWithValue})=>{
        console.log("hello" , loginRequest);
        try {
            const response = await api.post("/sellers/login",loginRequest);
            console.log("login auth resopnse : ",response.data);
            const jwt = response.data.jwt;
            localStorage.setItem("jwt",jwt);
        } catch (error) {
            console.log("sigin error - " ,error)
        }
})