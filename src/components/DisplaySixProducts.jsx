import React, { useEffect, useState } from 'react'
import ProductsDisplay from './ProductsDisplay'
import {get} from '../api/axiosConfig'
export default function DisplaySixProducts() {
  const [products,setProducts] = useState([])
  useEffect(()=>{
    get('/products/all')
    .then(({data})=>setProducts(data))
  },[])
  console.log(products)
  return (
    <section className="flex gap-1 m-4">
      {products.map(product=><ProductsDisplay key={product._id} product={product}/>)}
      
    </section>
  )
}
