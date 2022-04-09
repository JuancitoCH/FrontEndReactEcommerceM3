import React,{useState} from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
export default function ProductsDisplay({ product }) {
    const [imgCharge,setImgCharge] = useState(false)

    return (
        <article className='relative rounded-sm'>
            <Link to={'/product/' + product._id}>
                <div className='w-48 h-52 overflow-hidden relative rounded-sm'>
                    <motion.div
                        className='absolute  w-full h-full text-white font-Bebas top-3/4 text-center hover:cursor-pointer'
                        whileHover={{ y: -105 }}
                    >
                        <div className='bg-slate-800  w-full h-full absolute top-0 opacity-60'></div>
                        <h1 className='relative  '>{product.name}</h1>
                        <p className='relative -top-2'>${product.price}</p>
                        <p className='relative top-3 self-center'>{product.description}</p>
                    </motion.div>
                    <img onLoad={()=>setImgCharge(!imgCharge)} className={`object-cover w-full h-full ${imgCharge?"opacity-100":"opacity-0"} transition-opacity ease-in-out duration-10000`} src={"https://eccomerce-346201.rj.r.appspot.com/files/storage/download/" + product.pics[0]} alt="" />
                </div>
            </Link>
        </article>
    )
}
