import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { showCart } from '../features/cart/cartSlice'
import { motion } from 'framer-motion'
import { get,post,del } from '../api/axiosConfig'
import {Link} from 'react-router-dom'
import PayElementCart from './PayElementCart'
import { loadChangeCart } from '../features/cart/cartSlice'

export default function CartDisplay() {
    const { show,changeCart } = useSelector(state => state.cart)
    const Dispatch = useDispatch()
    const [cartProducts, setCartProducts] = useState([])
    const [pay, setPay] = useState()
    useEffect(() => {
        get('/cart/service/')
            .then(({ data }) => setCartProducts(data))
    }, [changeCart])
    const deleteProductCart=(idProduct)=>{
        post('/cart/service/product/pull',{
            idProduct
        }).then((data)=>{
            Dispatch(loadChangeCart())
        })
    }
    
    return (
        <>
            
                <>
                    {/* {show&&
                    <div onClick={() => Dispatch(showCart())} className={`absolute bg-slate-200 ${show?'opacity-20':'opacity-0'} h-screen w-full transition-opacity ease-linear duration-1000 `}></div>
                    } */}
                    <motion.section
                        animate={show?{translateX: '-7rem',opacity: 1}:{translateX: '9rem',opacity:0}}
                        transition={{ duration: '1' }}
                        className='fixed bg-slate-100 opacity-10 w-1/4 h-screen -right-28 z-50 shadow-lg overflow-y-auto flex flex-col'>

                        {cartProducts.products?.map((product,index)=> {
                            if (!product._id) return
                            return (<div key={index} className='h-28 my-1 shadow-lg bg-white flex relative'>
                                <button onClick={()=>{deleteProductCart(product._id._id)}} className='absolute top-0 right-2'>x</button>
                                <div className='h-24 w-32 ml-4 mt-2 mr-4 overflow-hidden rounded-lg'>
                                <Link to={'/product/'+product._id._id}>
                                    <img className='object-fill rounded-lg' src={`https://eccomerce-346201.rj.r.appspot.com/files/storage/download/${product._id.pics[0]}`} alt="" />
                                </Link>
                                </div>

                                <div className='w-full mt-2 text-gray-600'>
                                    <p>{product._id.name}</p>
                                    <p>Cantidad: {product.quantity}</p>
                                    <p>Total: ${product.quantity * product._id.price}</p>
                                </div>
                            </div>)
                        })}

                        <button onClick={()=>setPay(!pay)} className='rounded-sm mt-2 mb-20 bg-gray-600 text-slate-100 px-12 hover:bg-orange-500 transition-colors ease-in-out mx-10'>Pay</button>
                    </motion.section>
                    {pay &&
                    <div className='flex absolute w-full z-50 justify-center overflow-hidden'>
                        <div onClick={() => setPay(!pay)} className='w-screen h-screen  left-0  fixed top-0 opacity-30 bg-gray-400'></div>
                        <div className=' bg-slate-50 w-2/3 p-10 z-30'>
                        <PayElementCart/>
                        </div>
                    </div>}
                    

                </>
            
        </>
    )
}
