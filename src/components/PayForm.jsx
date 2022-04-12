import React from 'react'
import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';
import { useDispatch } from 'react-redux';
import { loadChangeCart } from '../features/cart/cartSlice';

export default function PayForm() {
    const stripe = useStripe()
    const elements = useElements()
    const Dispatch = useDispatch()

    const Pay = async(e)=>{
        e.preventDefault()
        const response = await stripe.confirmPayment({
            elements,
            confirmParams:{
                return_url:"http://localhost:3000/pay/correct"
            }
        })
        console.log(response)

    }
  return (
    <form onSubmit={Pay}>
        <PaymentElement/>
        <button onClick={()=>Dispatch(loadChangeCart())} className='bg-gray-600 hover:bg-orange-500 text-white py-2 px-8 text-xl rounded-sm mt-4' >Pay</button>
    </form>
  )
}
