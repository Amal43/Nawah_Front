import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useState } from "react";
import Cookies from 'js-cookie';
import { convertLength } from "@mui/material/styles/cssUtils";
import { json } from "react-router-dom";


export const registerUser = createAsyncThunk("user/registerUser", async(form)=>{

    axios.post('http://localhost:3500/User/register',form).then(res=>{
        if(res && res.data){
            return res.data
        }   
      // headers:{'Content-Type': 'application/json'};    
    })
} )

export const loginUser = createAsyncThunk("user/loginUser", async(values)=>{

    axios.post('http://localhost:3500/User/login',values).then(res=>{
    localStorage.setItem('logeedinData', JSON.stringify(values));
    localStorage.setItem('token', res.data.token);   
    localStorage.setItem('role', res.data.data.role); 
      // headers:{'Content-Type': 'application/json'};
    })
} )

let token=localStorage.getItem('token')
// let mycart= JSON.parse(localStorage.getItem('mycart'))
export const addorder=createAsyncThunk("user/order",async(data)=>{
    console.log(data,'cart');
    try{
        // console.log(mycart)
        let res=await axios.post(`http://localhost:3500/user/addorder/${token}`,{item:data})
        localStorage.removeItem("mycart")
        return res.data.data;
    }
    catch(err){
        console.log("error");
    }
})




export const getUserOne = createAsyncThunk('User/getUser',async () => {
    try {
        const token = localStorage.getItem('token');
        const res = await axios.get(`http://localhost:3500/user/getoneuser/${token}`);
        console.log(res.data.data , "sss" ); ////////
        const data = res.data.data;

        return data;
    } catch (err) {
        console.error(err);
        throw err;
    }
}
);



const UserSlice = createSlice({
    name:"user",
    initialState:{
        isAuthenticated: false,
        user: {}
    },

    reducers:{
        logoutUser: (state) => {
            state.isAuthenticated = false;
            state.user= {};
        }
    },
    extraReducers: {
        [registerUser.pending]: (state,action)=>{
            // state.products = action.payload
            console.log("pending")
        },
        [registerUser.fulfilled]: (state,action)=>{
            state.products = action.payload
            console.log("fulfilled")
        },
        [registerUser.rejected]: (state,action)=>{
            // state.products = action.payload
            console.log(state)
            console.log(action)
            console.log(action.payload)
            console.log("rejected")
        },
        [loginUser.pending]: (state,action)=>{
            // state.products = action.payload
            console.log("pending")
        },
        [loginUser.fulfilled]: (state,action)=>{
            state.user = action.payload
            console.log(state.user)
            console.log("fulfilled")
        },
        [loginUser.rejected]: (state,action)=>{
            // state.Users = action.payload
            // console.log(Users)
            
            console.log("rejected")
        },
        [addorder.fulfilled]:(state,action)=>
        {
            console.log(action.payload,"ffasfa")
        },


        [getUserOne.pending]:(state)=>{
            console.log("pending");
        },
        [getUserOne.fulfilled]:(state,action)=>{
            state.user = action.payload
            console.log(state.user)
        },
        [getUserOne.rejected]:(state,action)=>{
            console.log("rejected");
        }
    }
})

export const {logoutUser} = UserSlice.actions;
export default UserSlice.reducer