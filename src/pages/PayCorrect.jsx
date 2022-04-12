import React, { useEffect } from 'react'
import {BsCheckCircleFill} from 'react-icons/bs'
import {useDispatch} from 'react-redux'
import {loadChangeCart} from '../features/cart/cartSlice'

export default function PayCorrect() {
  const Dispatch = useDispatch()
  useEffect(()=>{
    Dispatch(loadChangeCart())
  },[])
  return (
    <div className='flex flex-col justify-center items-center m-24'>
        <h1 className='text-2xl text-gray-700'>Pay Correct</h1>
        <BsCheckCircleFill className='w-1/5 h-1/5 text-green-500 opacity-40'/>
    </div>
  )
}
