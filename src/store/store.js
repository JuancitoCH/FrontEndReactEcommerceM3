import {configureStore} from '@reduxjs/toolkit' 
// importamos los slice y los usamos como reducers
import userReducer from '../features/user/userSlice'

const store = configureStore({
    reducer:{
        user:userReducer
    }
})

export default store