import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { post,get } from '../../api/axiosConfig'

export const login = createAsyncThunk('user/login',async(creadentials,thunkApi)=>{
    
    const {data} = await post('/user/service/login',{
        email:creadentials.email,
        password:creadentials.password
    })
    // console.log(data)
    if(data.success===false){
        return thunkApi.rejectWithValue(data)
    }
    return data
})
export const logged = createAsyncThunk('user/logged',async(creadentials,thunkApi)=>{
    const {data} = await get('/user/service/login/validate')
    // console.log(data)
    if(data.success===false){
        return thunkApi.rejectWithValue(data)
    }
    return data
})

const userSlice = createSlice({
    name:"user",
    initialState:{
        email:"",
        username:"",
        role:"",
        login:false,
        error:false,
        errorMessage:'',
        loading:false

    },
    reducers:{

    },
    extraReducers(builder){
        builder.addCase(login.fulfilled,(state,action)=>{
            state.email=action.payload.user.email
            state.username=action.payload.user.username
            state.role=action.payload.user.role
            state.login = true
            state.loading = false
            
        })
        builder.addCase(login.pending,(state,action)=>{
            state.loading = true
        })
        builder.addCase(login.rejected,(state,action)=>{
            state.email=""
            state.username=""
            state.role=""
            state.login = false
            state.loading = false
            state.error = true
            state.errorMessage = action.payload.message

        })


        builder.addCase(logged.fulfilled,(state,action)=>{
            state.email=action.payload.user.email
            state.username=action.payload.user.username
            state.role=action.payload.user.role
            state.login = true
            state.loading = false
            
        })
        builder.addCase(logged.pending,(state,action)=>{
            state.loading = true
        })
        builder.addCase(logged.rejected,(state,action)=>{
            state.email=""
            state.username=""
            state.role=""
            state.login = false
            state.loading = false
            state.error = true
            state.errorMessage = action.payload.message

        })

        
    }
})

export default userSlice.reducer
