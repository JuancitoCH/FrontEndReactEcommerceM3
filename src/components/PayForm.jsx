import React from 'react'
import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';

export default function PayForm() {
    const stripe = useStripe()
    const elements = useElements()
    const Pay = async(e)=>{
        e.preventDefault()
        const response = await stripe.confirmPayment({
            elements,
            confirmParams:{
                return_url:"http://localhost:3000"
            }
        })
        console.log(response)

    }
  return (
    <form onSubmit={Pay}>
        <PaymentElement/>
        <button className='bg-gray-600 hover:bg-orange-500 text-white py-2 px-8 text-xl rounded-sm mt-4' >Pay</button>
    </form>
  )
}
