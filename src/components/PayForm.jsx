import React, { useState } from 'react'
import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';
import { useDispatch } from 'react-redux';
import { loadChangeCart } from '../features/cart/cartSlice';
import {motion} from 'framer-motion'
export default function PayForm() {
    const stripe = useStripe()
    const elements = useElements()
    const Dispatch = useDispatch()
    const [ stripeLoading,setStripeLoading ] = useState(true)
    const Pay = async(e)=>{
        e.preventDefault()
        const response = await stripe.confirmPayment({
            elements,
            confirmParams:{
                // return_url:"http://localhost:3000/pay/correct"
                return_url:"https://efruits-47d7f.web.app/pay/correct"
            }
        })
        console.log(response)

    }
  return (
    <form onSubmit={Pay} >
        {stripeLoading&&<motion.div className='bg-orange-400 w-9 h-9'>

            </motion.div>}
        <PaymentElement />
        <button onClick={()=>Dispatch(loadChangeCart())} className='bg-gray-600 hover:bg-orange-500 text-white py-2 px-8 text-xl rounded-sm mt-4' >Pay</button>
    </form>
  )
}
