import React, { useEffect, useState } from 'react'
import ProductsDisplay from './ProductsDisplay'
import {get} from '../api/axiosConfig'
export default function DisplaySixProducts() {
  const [products,setProducts] = useState([])
  useEffect(()=>{
    get('/products/new/product/6')
    .then(({data})=>setProducts(data))
  },[])
  // console.log(products)
  return (
    <section className="flex gap-1 w-3/5 flex-wrap m-4 justify-center ">
      {products.map(product=><ProductsDisplay key={product._id} product={product}/>)}
      
    </section>
  )
}
