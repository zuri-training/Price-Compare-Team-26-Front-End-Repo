import { configureStore } from '@reduxjs/toolkit'
import allProductsSlice from './features/allProducts/allProductsSlice'
import userSlice from './features/user/userSlice'

export const store = configureStore({
    reducer: {
        user: userSlice,
        allProducts: allProductsSlice

    }
})