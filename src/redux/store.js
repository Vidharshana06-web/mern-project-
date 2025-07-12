import { configureStore } from "@reduxjs/toolkit";
import CartSlice from './cartslice';
// import productSlice from "./ProductSlice.js";

export const store=configureStore(
    {
        reducer:{
            cart:CartSlice,
            // product: productSlice,

        }
    }
)