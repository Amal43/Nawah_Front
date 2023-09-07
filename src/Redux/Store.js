import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./Slices/UserSlice";
import FarmerSlice from "./Slices/FarmerSlice";
import ProductSlice from "./Slices/ProductSlice";
import EngineerSlice from "./Slices/EngineerSlice";
import MessageSlice from "./Slices/MessageSlice"

export const Store = configureStore(
   { reducer:{
    UserSlice,
    FarmerSlice,
    ProductSlice,
    EngineerSlice,
    MessageSlice,
    }}
)

