import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const registerFarmer = createAsyncThunk("farmer/registerFarmer", async (form) => {

    axios.post('http://localhost:3500/Farmer/register', form).then(res => {
        if (res && res.data) {
            return res.data
        }
        // headers:{'Content-Type': 'application/json'};    
    })
})

export const loginFarmer = createAsyncThunk("farmer/loginFarmer", async (values) => {

    await axios.post('http://localhost:3500/Farmer/login', values).then(res => {
        console.log(res.data , "aaaasdsadsa");
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('role', res.data.data.role)
        // headers:{'Content-Type': 'application/json'};
    })
})



export const getFarmerOne = createAsyncThunk('Farmer/getFarme', async () => {
    try {
        const token = localStorage.getItem('token');
        const res = await axios.get(`http://localhost:3500/Farmer/getonefarmer/${token}`);
        // console.log(res.data.data); ////////
        const data = res.data.data;

        return data;
    } catch (err) {
        console.error(err);
        throw err;
    }
}
);

const FarmerSlice = createSlice({
    name: "farmer",
    initialState: {
        isAuthenticated: false,
        Farmers: {}
    },
    reducers: {
        logoutFarmer: (state) => {
            state.isAuthenticated = false;
            state.Farmers = {};
        }
    },
    extraReducers: {
        [registerFarmer.pending]: (state, action) => {
            // state.products = action.payload
            console.log("pending")
        },
        [registerFarmer.fulfilled]: (state, action) => {
            state.Farmers = action.payload
            console.log("fulfilled")
        },
        [registerFarmer.rejected]: (state, action) => {
            // state.products = action.payload
            console.log(state)
            console.log(action)
            console.log(action.payload)
            console.log("rejected")
        },
        [loginFarmer.pending]: (state, action) => {
            // state.products = action.payload
            console.log("pendingaaaaaaaaaaaa")
        },
        [loginFarmer.fulfilled]: (state, action) => {
            // state.Farmers = action.payload
            // console.log(state.Farmers);
            console.log(action);

            console.log("fulfilledaaaaaaa")
        },
        [loginFarmer.rejected]: (state, action) => {
            // state.products = action.payload
            console.log(state)
            console.log(action)
            console.log(action.payload)
            console.log("rejectedaaaaaaaaaa")
        },


        [getFarmerOne.pending]: (state) => {
            console.log("pending");
        },
        [getFarmerOne.fulfilled]: (state, action) => {
            state.Farmers = action.payload
            console.log("ffffffffffffffffffffffffffffffffffffffffff", state.Farmers)
        },
        [getFarmerOne.rejected]: (state, action) => {
            console.log("rejected");
        },


    }
})
export const { logoutFarmer } = FarmerSlice.actions;
export default FarmerSlice.reducer