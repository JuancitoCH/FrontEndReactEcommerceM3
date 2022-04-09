import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { get } from '../api/axiosConfig'
import ProductPageDisplay from '../components/ProductPageDisplay'

export default function Product() {
  
  const {idProduct} = useParams()
  
  const [product,setProduct] = useState({})
  
  useEffect(()=>{
    get('/products/id/'+idProduct)
    .then(({data})=>{setProduct(data)})
  },[])
  
  return (
    <section>
      <ProductPageDisplay data={product}/>
    </section>
  )
}
