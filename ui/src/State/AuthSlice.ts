import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../config/Api";
import { User } from "../Types/UserTypes";

export const sendLoginSignupOtp=createAsyncThunk('/auth/sendLoginSignupOtp',
    async({email}:{email:string}, {rejectWithValue})=>{
        try {
            const response = await api.post("/auth/sent/login-signup-otp",{email});
            console.log("login otp resopnse : ",response);
        } catch (error) {
            console.log("sendLoginSignupOtp - " ,error)
        }
})

export const signing=createAsyncThunk<any,any>('/auth/signing',
    async(loginRequest, {rejectWithValue})=>{
        try {
            const response = await api.post("/auth/signing",loginRequest);
            console.log("login resopnse : ",response.data);
            localStorage.setItem("jwt",response.data.jwt);
            return response.data.jwt;
        } catch (error) {
            console.log("sigin error - " ,error)
        }
})

export const signup=createAsyncThunk<any,any>('/auth/signup',
    async(signupRequest, {rejectWithValue})=>{
        try {
            const response = await api.post("/auth/signup",signupRequest);
            console.log("login otp resopnse : ",response.data);
            localStorage.setItem("jwt",response.data.jwt);
            return response.data.jwt;
        } catch (error) {
            console.log("sigin error - " ,error)
        }
})

export const fetchUserProfile=createAsyncThunk<any,any>('/auth/fetchUserProfile',
    async({jwt}, {rejectWithValue})=>{
        console.log(jwt);
        try {
            const response = await api.get("api/users/profile",{
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            });
            console.log("user profile resopnse : ",response.data);
            return response.data;
        } catch (error) {
            console.log("user profilr error - " ,error)
        }
})

export const logout = createAsyncThunk<any,any>("/auth/logout",
    async(navigate,{rejectWithValue}) =>{
        try {
            localStorage.clear();
            console.log("logout success")
            navigate("/");
        } catch (error) {
            console.log("error at the time of logout " + error)
        }
    }
)

interface AuthSate{
    jwt:string | null,
    otpSent:boolean,
    isLoggedIn:boolean,
    user:User | null,
    loading:boolean
}
const initialState:AuthSate = {
    jwt:null,
    otpSent:false,
    isLoggedIn:false,
    user:null,
    loading:false
}
const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{

        builder.addCase(signing.fulfilled,(state,action)=>{
            state.jwt=action.payload;
            state.isLoggedIn=true;
        })

        builder.addCase(sendLoginSignupOtp.pending,(state,action)=>{
            state.loading=true;
        })

        builder.addCase(sendLoginSignupOtp.fulfilled,(state,action)=>{
            state.loading=false;
            state.otpSent=true;
        })

        builder.addCase(sendLoginSignupOtp.rejected,(state,action)=>{
            state.loading=false;
        })

        builder.addCase(signup.fulfilled,(state,action)=>{
            state.jwt = action.payload;
            state.isLoggedIn=true;
        })

        builder.addCase(fetchUserProfile.fulfilled,(state,action)=>{
            state.user = action.payload;
            state.isLoggedIn=true;
        })

        builder.addCase(logout.fulfilled,(state)=>{
            state.jwt = null;
            state.isLoggedIn=false;
            state.user = null;
        })
    }
})

export default authSlice.reducer