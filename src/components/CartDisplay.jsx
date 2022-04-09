import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { showCart } from '../features/cart/cartSlice'
import { motion } from 'framer-motion'
import { get } from '../api/axiosConfig'
import {Link} from 'react-router-dom'
export default function CartDisplay() {
    const { show } = useSelector(state => state.cart)
    const Dispatch = useDispatch()
    const [cartProducts, setCartProducts] = useState([])
    useEffect(() => {
        get('/cart/service/')
            .then(({ data }) => setCartProducts(data))
    }, [])
    console.log(cartProducts)
    return (
        <>
            {show &&
                <>
                    <div onClick={() => Dispatch(showCart())} className='absolute bg-slate-200 opacity-20 h-screen w-screen '></div>
                    <motion.section
                        animate={{
                            translateX: '-7rem',
                            opacity: 1
                        }}
                        transition={{ duration: '1.3' }}
                        className='fixed bg-slate-100 opacity-10 w-1/4 h-screen -right-28 z-50 shadow-lg '>

                        {cartProducts.products?.map(product => {
                            if (!product._id) return
                            return (<div className='h-28 my-1 shadow-lg bg-white flex relative'>
                                <button className='absolute top-0 right-2'>x</button>
                                <div className='h-24 w-32 ml-2 mt-2 overflow-hidden'>
                                <Link to={'/product/'+product._id._id}>
                                    <img className='object-fill' src={`https://eccomerce-346201.rj.r.appspot.com/files/storage/download/${product._id.pics[0]}`} alt="" />
                                </Link>
                                </div>

                                <div className='w-full mt-2'>
                                    <p>{product._id.name}</p>
                                    <p>{product.quantity}</p>
                                    <p>total: ${product.quantity * product._id.price}</p>
                                </div>
                            </div>)
                        })}

                        <button className='mt-6 bg-gray-600 text-slate-100 px-12 hover:bg-orange-500 transition-colors ease-in-out'>Pay</button>
                    </motion.section>
                </>
            }
        </>
    )
}
