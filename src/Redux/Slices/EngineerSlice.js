import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useState } from "react";
import Cookies from 'js-cookie';
import { convertLength } from "@mui/material/styles/cssUtils";

export const registerEngineer = createAsyncThunk("user/registerUser", async(form)=>{

    axios.post('http://localhost:3500/Engineer/register',form).then(res=>{
        if(res && res.data){
            return res.data
        }   
      // headers:{'Content-Type': 'application/json'};    
    })
} )

export const loginEngineer = createAsyncThunk("Engineer/loginUser", async(values)=>{
console.log(values);
    axios.post('http://localhost:3500/Engineer/login',values).then(res=>{
    localStorage.setItem('userlogeedinData', JSON.stringify(values));
    console.log(res.data);
    localStorage.setItem('token', res.data.token);   
    localStorage.setItem('role', res.data.data.role); 
      // headers:{'Content-Type': 'application/json'};
    })
} )
// export const loginEngineer = createAsyncThunk("Engineer/loginUser", async(values)=>{

//     axios.post('http://localhost:3500/Engineer/login',values).then(res=>{
//     localStorage.setItem('logeedinData', JSON.stringify(values));
//     console.log(res.data,"zzzzzzzzzz");
//     // localStorage.setItem('token', res.data.token);   
//     // localStorage.setItem('role', res.data.data.role); 
    
//       // headers:{'Content-Type': 'application/json'};
//     })
// } )




export const getOneEng = createAsyncThunk('Eng/getUser',async () => {
    try {
        const token = localStorage.getItem('token');
        const res = await axios.get(`http://localhost:3500/Engineer/getoneeng/${token}`)
        // console.log(res.data.data); ////////
        const data = res.data.data;

        return data;
    } catch (err) {
        console.error(err);
        throw err;
    }
}
);

export const GetAllFarmer = createAsyncThunk('Engineer/getfarmer',async (id) => {
    try {
        const res = await axios.get(`http://localhost:3500/Engineer/getfarmer/${id}`);
        // console.log(res);
        let data = res.data.data;

        return data;
    } catch (err) {
        console.error(err);
        throw err;
    }
}
);

export const AddNotes = createAsyncThunk('Engineer/addnote',async (data) => {
    console.log(data);
    const id = data.idfarmer
    const notes = data.note
    const prd = data.oneprd
    try {
        const res = await axios.put(`http://localhost:3500/Farmer/addnote/${id}`,{notes , prd});
        let data = res.data.data;

        return data;
    } catch (err) {
        console.error(err);
        throw err;
    }
}
);



const EngSlice = createSlice({
    name:"engineer",
    initialState:{
        isAuthenticated: false,
        Engineer: {},
        EngineerFarmer :[]
    },

    reducers:{
        logoutEngineer: (state) => {
            state.isAuthenticated = false;
            state.Farmers= {};
        }
    },
    extraReducers: {
        [registerEngineer.pending]: (state,action)=>{
            // state.products = action.payload
            console.log("pending")
        },
        [registerEngineer.fulfilled]: (state,action)=>{
            state.Engineer = action.payload
            console.log("fulfilled")
        },
        [registerEngineer.rejected]: (state,action)=>{
            // state.products = action.payload
            console.log(state)
            console.log(action)
            console.log(action.payload)
            console.log("rejected")
        },

        [loginEngineer.pending]: (state,action)=>{
            // state.products = action.payload
            console.log("pending")
        },
        [loginEngineer.fulfilled]: (state,action)=>{
            // console.log(action.payload,"fffffffffffffff");
            // state.engineer = action.payload
            console.log("fulfilled")
        },
        [loginEngineer.rejected]: (state,action)=>{
            // state.products = action.payload
            // console.log(state)
            // console.log(action)
            // console.log(action.payload)
            console.log("rejected")
        },

        [getOneEng.pending]:(state)=>{
            console.log("pending");
        },
        [getOneEng.fulfilled]:(state,action)=>{
            console.log(action.payload);
            state.Engineer = action.payload
            // console.log(state.Engineer);
        },
        [getOneEng.rejected]:(state,action)=>{
            console.log("rejected");
        },

        [GetAllFarmer.pending]:(state)=>{
            console.log("pending");
        },
        [GetAllFarmer.fulfilled]:(state,action)=>{
            state.EngineerFarmer = action.payload
            console.log(state.EngineerFarmer);
        },
        [GetAllFarmer.rejected]:(state,action)=>{
            console.log("rejected");
        }
    }
})

export const {logoutEngineer} = EngSlice.actions;
export default EngSlice.reducer