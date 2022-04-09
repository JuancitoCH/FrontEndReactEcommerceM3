import {configureStore} from '@reduxjs/toolkit' 
// importamos los slice y los usamos como reducers
import userReducer from '../features/user/userSlice'
import cartReducer from '../features/cart/cartSlice'

const store = configureStore({
    reducer:{
        user:userReducer,
        cart:cartReducer
    }
})

export default store