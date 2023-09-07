import { convertLength } from "@mui/material/styles/cssUtils";
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useState } from "react";

// =======================GET ALL PRODUCTS===========================//
export const getallproducts = createAsyncThunk("Product/allprd", async () => {
    try {
        let res = await axios.get("http://localhost:3500/Product/allprd")
        return res.data.data;
    }
    catch (err) {
        console.log("error");
    }
})


// ======================= GET ALL FERTILIZERS===========================//
export const getallfertilizer = createAsyncThunk("Product/allfer", async () => {
    try {
        let res = await axios.get("http://localhost:3500/Product/allfertilizer")
        return res.data.data;
    }
    catch (err) {
        console.log("error");
    }
})


// ========================GET DETAILS OF ONE PRODUCT ======================//
export const getdetailsofproduct = createAsyncThunk("Product/singlproduct", async (id) => {
    try {
        let res = await axios.get(`http://localhost:3500/Product/${id}`)
        return res.data.data;
    }
    catch (err) {
        console.log("error");
    }
})


// ======================== ADD RATE ==================================//
export const addRate = createAsyncThunk("rates/addrate", async (data) => {
    console.log(data,"hi");
    axios.put('http://localhost:3500/user/addrate/', { rate: data.value, prodId: data.prodId }).then(res => {
        localStorage.setItem('rates', JSON.stringify(data.value));
        return res.data.data;
    }).catch(err => {
        console.log(err);
    })
});


//===========================GET PRODUCTS OF ONE FARMER==================//
let token = localStorage.getItem('token')
export const getfarmerproducts = createAsyncThunk("Product/farmerproduct", async () => {
    try {
        let res = await axios.get(`http://localhost:3500/Product/farmerprd/${token}`)
        return res.data.data;
    }
    catch (err) {
        console.log("error");
    }
})


//=============================DELETE PRODUCT BY FARMER======================//
export const deletePrdByFarmer = createAsyncThunk("Product/farmerdeleteprd", async (id) => {
    try {
        let res = await axios.delete(`http://localhost:3500/Product/delprd/${id}`)
        return res.data.data;
    }
    catch (err) {
        console.log("error");
    }
})
//=============================gettoprate===================================//
export const gettoprate = createAsyncThunk("Product/gettoprate", async () => {
    try {
        let res = await axios.get('http://localhost:3500/Product/toprate')
        return res.data.data;


    } catch (err) {
        console.log("error");

    }
})


const ProductSlice = createSlice({
    name: 'Product',
    initialState: {
        products: [],
        mycart: [],
        details: {},
        farmerprds: [],
        farmproduct: {},
        farmerfav: [],
        toprate: [],
    },

    //========================= REDUCERS ==============================//
    reducers: {

        // ADD TO CART
        add: (state, action) => {
            let index = state?.mycart?.findIndex((item) => item?._id === action?.payload._id);
            console.log(index)
            if (index === -1) {
                state?.mycart?.push(action.payload);
            }
            else {
                state.mycart[index].qq = state.mycart[index].qq + 1;
                state.mycart[index].tot = state.mycart[index].price * state?.mycart[index].qq
            }
            localStorage.setItem('mycart', JSON.stringify(state?.mycart));
        },

        // Add WishList
        addtofav: (state, action) => {
            console.log(action.payload, "sss");
            state?.farmerfav?.push(action.payload);
            localStorage.setItem('farmerfav', JSON.stringify(state.farmerfav));
        },
        deletefav: (state, action) => {
            state.farmerfav = state.farmerfav.filter(item => item._id !== action.payload);
            let index = state.farmerfav.findIndex(item => item._id === action.payload);
            // state.farmerfav.splice(index, 1);
            localStorage.setItem('farmerfav', JSON.stringify(state.farmerfav));
            if (JSON.parse(localStorage.getItem('farmerfav')).length === 0) {
                localStorage.removeItem('farmerfav');
            }
        },

        // REMOVE FROM CART
        removeCart: (state, action) => {
            state.mycart = state.mycart.filter(item => item._id !== action.payload);
            let index = state.mycart.findIndex(item => item._id === action.payload);
            // state.mycart.splice(index, 1);
            localStorage.setItem('mycart', JSON.stringify(state.mycart));
            if (JSON.parse(localStorage.getItem('mycart')).length === 0) {
                localStorage.removeItem('mycart');
            }
        },

        // INCREASE QT
        Pluse: (state, action) => {
            let index = state.mycart.findIndex((item) => item._id == action.payload);
            state.mycart[index].qq = state.mycart[index].qq + 1;
            state.mycart[index].tot = state.mycart[index].price * state.mycart[index].qq
            state.mycart[index].totalprice = state.mycart[index].tot
            console.log(state.mycart[index].totalprice)


            localStorage.setItem('mycart', JSON.stringify(state.mycart));
        },

        // DECREASE QT
        Minus: (state, action) => {
            let index = state.mycart.findIndex((item) => item._id == action.payload);
            if (state.mycart[index].qq == 1) {
                state.mycart.pop([index])

            }
            else {
                state.mycart[index].qq = state.mycart[index].qq - 1;
                state.mycart[index].tot = state.mycart[index].tot - state.mycart[index].price

            }
            localStorage.setItem('mycart', JSON.stringify(state.mycart));

        },


        // SHOWING DETAILS
        showdetails: (state, action) => {

            let item = state.products.filter((item) => item._id == action.payload._id)
            state.details = item;
        },
        ////??
        showproduct: (state, action) => {

            let item = state.farmerprds.filter((item) => item._id == action.payload._id)
            state.farmproduct = item;
        },

        // Refresh
        pushCart: (state, action) => {
            state.mycart = action.payload;
        },
        pushFav: (state, action) => {
            state.farmerfav = action.payload;
        },
    },

    // ========================= EXTRAREDUCERS ========================//
    extraReducers: {

        // get all products
        [getallproducts.pending]: (state) => {
            console.log("pending");
        },
        [getallproducts.fulfilled]: (state, action) => {
            state.products = action.payload
        },
        [getallproducts.rejected]: (state, action) => {
            console.log("rejected");
        },

        // add rate
        [addRate.pending]: (state) => {
            console.log("pending");
        },
        [addRate.fulfilled]: (state, action) => {
            console.log("fulfilled")
            state.rates = action.payload
        },
        [addRate.rejected]: (state, action) => {
            console.log("rejected");
        },

        // get farmer products
        [getfarmerproducts.pending]: (state) => {
            console.log("pending");
        },
        [getfarmerproducts.fulfilled]: (state, action) => {
            state.farmerprds = action.payload
            console.log("fulfilled");
        },
        [getfarmerproducts.rejected]: (state, action) => {
            console.log("rejected");
        },

        //delete product by farmer
        [deletePrdByFarmer.pending]: (state) => {
            console.log("pending");
        },
        [deletePrdByFarmer.fulfilled]: (state, action) => {
            state.farmerprds = action.payload
        },
        [deletePrdByFarmer.rejected]: (state, action) => {
            console.log("rejected");
        },

        //gettoprate
        [gettoprate.pending]: (state) => {
            console.log("pending");
        },
        [gettoprate.fulfilled]: (state, action) => {
            state.toprate = action.payload;
            console.log("inprodred", state.toprate);
        },
        [gettoprate.rejected]: (state, action) => {
            console.log("inprodred", "rejected");
        },
    }
})

export const { add, Pluse, removeCart, Minus, showdetails, showproduct, addtofav, pushCart, pushFav, deletefav } = ProductSlice.actions;
export default ProductSlice.reducer;