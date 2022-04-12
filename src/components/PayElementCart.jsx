import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import { post } from '../api/axiosConfig';
import PayForm from './PayForm';

const stripePromise = loadStripe('pk_test_51Kj28TGJWXLaxmhVvgtq4c6aGB7rBUcoVU7Sana0W0TTmaP0CYd62iOP0HkWMEymFJLO78y7q7evu0i3bTKZqSdm00Dn8Nuo28');

export default function PayElementCart() {
    const [clientSecret, setClientSecret] = useState("")
    useEffect(() => {
        post("/api/payments/intent/user/cart", {
        })
            .then(({ data }) => {
                setClientSecret(data.clientSecret)
            })
    }, [])

    return (
        <>
            {/* <p className='text-orange-500'>ID PRODUCT :{idProduct}</p> */}
            {/* <p className='text-orange-500'>QUANTITY: {quantity}</p> */}
            {
                clientSecret &&
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <PayForm />
                </Elements>
            }
        </>
    );
}
