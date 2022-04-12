import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {register} from '../features/user/userSlice'
import {useNavigate} from 'react-router-dom'

export default function Register() {
    const redirect = useNavigate()
    const Dispatch=useDispatch()
    const sendRegister = async (e)=>{
        e.preventDefault()
        const data=await Dispatch(register({
            email:e.target.email.value,
            password:e.target.password.value,
            username:e.target.username.value
        }))
        
        if(data.payload.success) redirect('/')
    }
  return (
    <section>
        <article className='shadow-lg mt-10 max-w-screen-lg mx-auto'>
            <form action="" onSubmit={sendRegister} className='grid place-items-center '>
                <h1 className='text-6xl m-8 '>
                    <b className='text-red-600'>R</b>
                    <b className='text-lime-600'>E</b>
                    <b className='text-amber-300'>G</b>
                    <b className='text-blue-600'>I</b>
                    <b className='text-violet-500'>S</b>
                    <b className='text-orange-500'>T</b>
                    <b className='text-teal-500'>E</b>
                    <b className='text-pink-500'>R</b>
                </h1>
                <input className='border mt-4 w-60 outline-none focus:border-slate-800 text-xl' autoComplete='off' required={true} type="text" name="username" placeholder='Username...'  />
                <input className='border mt-4 w-60 outline-none focus:border-slate-800 text-xl' autoComplete='off' required={true} type="text" name="email" placeholder='Email...'  />
                <input className='border mb-4 mt-2 w-60 outline-none focus:border-slate-800 text-xl' type="password" name="password" placeholder='Password...'  />
                <button className='my-5 bg-slate-800 text-slate-100 text-xl px-4 py-1 rounded-sm hover:bg-orange-500'>Register</button>
            </form>
            <div className=' text-center' >
                <p className='text-slate-600'>have you an acoount?</p>
                <Link className='text-orange-500 font-bold hover:text-orange-700' to={'/login'}>Enter Here</Link>
            </div>
        </article>
    </section>
  )
}
