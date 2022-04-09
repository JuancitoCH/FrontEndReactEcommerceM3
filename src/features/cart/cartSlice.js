import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import { post,get } from '../../api/axiosConfig'

// export const login = createAsyncThunk('user/login',async(creadentials,thunkApi)=>{
    
//     const {data} = await post('/user/service/login',{
//         email:creadentials.email,
//         password:creadentials.password
//     })
//     console.log(data)
//     if(data.success===false){
//         return thunkApi.rejectWithValue(data)
//     }
//     return data
// })


const cartSlice = createSlice({
    name:"cart",
    initialState:{
        show:false,
        error:false,
        errorMessage:'',
        loading:false

    },
    reducers:{
        showCart(state,action){
            state.show = !state.show
        }
    },
    extraReducers(builder){
        // builder.addCase(login.fulfilled,(state,action)=>{
        //     state.email=action.payload.user.email
        //     state.username=action.payload.user.username
        //     state.role=action.payload.user.role
        //     state.login = true
        //     state.loading = false
            
        // })
    }
})

export default cartSlice.reducer
export const {showCart} = cartSlice.actions