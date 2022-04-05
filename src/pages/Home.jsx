import React from 'react'
import Productshowleft from '../components/Productshowleft'
import Productshowright from '../components/Productshowright'
export default function Home() {
  return  (
    <section className='flex flex-col justify-center items-center'>
        <Productshowleft/>
        {/* zona con productos para comer*/}
        <Productshowright/>
        {/* Zona con otros productos para hacer juici*/}
    </section>
  )
}
