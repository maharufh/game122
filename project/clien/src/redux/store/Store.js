import {configureStore} from '@reduxjs/toolkit'
import { userReducer } from '../slice/UserSlice.js'


export const store=configureStore({
    reducer:{
        user:userReducer,
    }
})