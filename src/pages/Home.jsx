import React from 'react'
import Productshowleft from '../components/Productshowleft'
import Productshowright from '../components/Productshowright'
import DisplaySixProducts from "../components/DisplaySixProducts"
export default function Home() {
  return  (
    <section className='flex flex-col justify-center items-center'>
      
        <Productshowleft/>
        {/* zona con productos para comer*/}
        <DisplaySixProducts/>
        <Productshowright/>
        {/* Zona con otros productos para hacer juici*/}
    </section>
  )
}
