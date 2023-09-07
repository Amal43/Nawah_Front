import { convertLength } from "@mui/material/styles/cssUtils";
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useState } from "react";



export const addmessage = createAsyncThunk("message/addmessage", async (data) => {

    axios.post('http://localhost:3500/massage/addmessage', data).then(res => {
        if (res && res.data) {
            return res.data
        }
        // headers:{'Content-Type': 'application/json'};    
    })
})




const MessageSlice = createSlice({
    name: 'message',
    initialState: {
        message: {}
    },

    //========================= REDUCERS ==============================//
    reducers: {

    },

    // ========================= EXTRAREDUCERS ========================//
    extraReducers: {

        [addmessage.pending]: (state) => {
            console.log("pending");
        },
        [addmessage.fulfilled]: (state, action) => {
            state.message = action.payload
            console.log(state.message);
        },
        [addmessage.rejected]: (state, action) => {
            console.log("rejected");
        },



    }
})

export const { } = MessageSlice.actions;
export default MessageSlice.reducer;