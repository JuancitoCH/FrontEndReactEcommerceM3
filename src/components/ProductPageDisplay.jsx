import React, { useState,useRef } from 'react'
import { post } from '../api/axiosConfig'
import PayElement from './PayElement'
import { useDispatch } from 'react-redux'
import { loadChangeCart } from '../features/cart/cartSlice'
export default function ProductPageDisplay({ data }) {
    const [imagen,setImagen] = useState(data.pics&&data.pics[0])
    const Dispatch = useDispatch()
    const [pay,setPay] = useState(false)
    const quantityInput = useRef()
    const addToCart= async()=>{
        post('/cart/service/product/add',{
            idProduct:data._id,
            quantity:quantityInput.current.value
        })
        .then(data=>Dispatch(loadChangeCart()))
        
    }
    return (
        <article className='grid grid-cols-2 shadow-lg mx-8 my-7'>
            {data.name && <>
                <section className='w-full relative flex'>
                    <div className='ml-1 my-1'>
                        {data.pics.map((pic,index) =>
                            <div key={index} className='w-24 h-24 overflow-hidden mb-1 rounded-md'>
                                <img  className='object-cover hover:cursor-pointer hover:opacity-60 transition-opacity ease-in duration-200' onClick={()=>setImagen(pic)} src={'https://eccomerce-346201.rj.r.appspot.com/files/storage/download/' + pic} />
                            </div>)}
                    </div>
                    <div className=' w-2/3 overflow-hidden  relative mx-2'>
                        <img className='w-full h-full object-cover' src={imagen? "https://eccomerce-346201.rj.r.appspot.com/files/storage/download/"+imagen : "https://eccomerce-346201.rj.r.appspot.com/files/storage/download/"+data.pics[0] } alt="" />
                    </div>
                </section>


                <section className='text-slate-800'>
                    <h2 className='text-4xl mt-2 text-slate-800 font-Abril'>{data.name}</h2>
                    <p className='text-xl ml-2 text-slate-600' >USD ${data.price}</p>
                    <div className='mx-3 my-4 h-1 bg-slate-300 rounded-xl'></div>

                    <div className='ml-4'>
                    <p className='font-Barlow font-bold'>{data.description}</p>
                        <div className='flex my-4'>
                            <p>Quantity</p>
                            <input ref={quantityInput} className='border-2 outline-none focus:border-orange-500 text-right' type="number" defaultValue={1} min={1} max={10} />
                            <p><b className='text-sm'>x </b>100 gr</p>
                        </div>
                        <div className='flex flex-col w-60 gap-2 mb-4'>
                        <button onClick={addToCart} className='bg-gray-400 hover:bg-orange-500 text-white py-2 px-8 text-xl rounded-sm'>ADD TO CART</button>
                        
                        <button className='bg-gray-600 hover:bg-orange-500 text-white py-2 px-8 text-xl rounded-sm' onClick={()=>setPay(!pay)}>BUY IT NOW</button>
                        
                        </div>
                        <div>
                            {data.categories.map((categorie,index) => {
                                return (<div key={index}>

                                </div>)
                            })}
                        </div>
                    </div>
                </section>
                {pay&& 
                <div className='flex absolute w-full justify-center overflow-hidden'>
                <div onClick={()=>setPay(!pay)} className='w-screen h-screen  left-0  fixed top-0 opacity-30 bg-gray-400'></div>
                <div className=' bg-slate-50 w-2/3 p-10 z-30'>    
                    <PayElement idProduct={data._id} quantity={quantityInput.current.value} ></PayElement>
                </div>
                </div>}
            </>}
        </article>
    )
}
