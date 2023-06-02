import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getallproducts=createAsyncThunk("Product/allprd",async()=>{
try{
    let res=await axios.get("http://localhost:3500/Product/allprd")
    console.log(res.data);
    return res.data.data;

}
catch(err){

    console.log("error");
}
})






const Productslice = createSlice({
    name: 'Product',
    initialState: {
        products: [],
        cart: []

    },
    reducers: {
        addtocart: (state, action) => {
            state.products.push(action.payload)
        }


    },
    extraReducers: {
        [getallproducts.pending]:(state)=>{
          console.log("pending");
        },
        [getallproducts.fulfilled]:(state,action)=>{
            state.products=action.payload
        },
        [getallproducts.rejected]:(state,action)=>{
            console.log("rejected");
        }

        }





})
export const { addtocart } = Productslice.actions
export default Productslice.reducer