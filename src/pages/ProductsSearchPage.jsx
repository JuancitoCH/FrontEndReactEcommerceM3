import React, { useEffect, useState } from 'react'
import { get } from '../api/axiosConfig'
import ProductsDisplay from '../components/ProductsDisplay'
import { BsSearch } from 'react-icons/bs'
import { motion } from 'framer-motion'
import DisplaySixProducts from '../components/DisplaySixProducts'

export default function ProductsSearchPage() {
  const [pageData, setPageData] = useState()
  const [clear, setClear] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const categories = ['rojo', 'amarillo', 'verde', 'naranja', 'natural']
  useEffect(() => {
    get('/products/page/?page=1&limit=4')
      .then(({ data }) => {
        setPageData(data)
      })
  }, [clear])

  const pageSearch = (url) => {
    get(url)
      .then(({ data }) => {
        setPageData(data)
      })
  }
  const pageSearchCategory = (urlCat) => {
    get('/products/get/product/' + urlCat)
      .then(({ data }) => {
        setPageData(data)
      })
  }
  const inputSearch = (e) => {
    console.log("a")
    e.preventDefault()
    console.log(e.target.search.value)
    get('/products/search/' + e.target.search.value)
      .then(({ data }) => {
        setPageData({ data: [...data] })
      })
  }
  console.log(pageData)
  return (
    <section className='text-gray-700'>
      <motion.button className=' text-2xl mr-4 text-slate-500 hover:text-orange-500 relative left-36 top-12 ' onClick={() => setShowSearch(!showSearch)}

      >{showSearch ? '<' : '>'}</motion.button>
      <form className='flex mt-5 ml-40' onSubmit={inputSearch}>
        <button className={`hover:text-orange-500 transition-colors ease-in-out ${!showSearch ? 'opacity-0' : 'opacity-100'} transition-opacity ease-in duration-600 `} ><BsSearch className=' text-2xl mr-4 ml-1' /></button>
        <input autoComplete='off' name="search" className={`border-slate-500 border-2 rounded-sm outline-none ${!showSearch ? 'opacity-0 w-0' : 'opacity-100 w-36'} focus:border-slate-800 transition-all ease-out duration-500 `} type="text" id="" />
      </form>
      <div className='shadow-lg flex flex-col items-center relative min-h-[calc(100vh-20vh)]'>

        <article className='flex flex-row m-5  p-1 min-w-[calc(80%)] max-w-[calc(80%)] mb-20'>
          <div className='flex flex-col w-24 m-4 p-2'>
            <button className="text-slate-500 hover:text-orange-500 transition-colors ease-in-out" onClick={() => setClear(!clear)} >CLEAR</button>
            {categories.map((category, index) => <button key={index} className="hover:text-orange-500 transition-colors ease-in-out" onClick={() => pageSearchCategory(category)}>{category.toUpperCase()}</button>)}
          </div>
          {pageData?.data && <div className='flex flex-wrap justify-center gap-3'>
            {pageData.data.map(product => {
              return <ProductsDisplay key={product._id} product={product} />
            })} </div>}
        </article>
        <div className='absolute bottom-3'>
          {pageData?.prevPage &&
            <button className='m-2 hover:text-orange-500 transition-colors ease-in-out' onClick={() => pageSearch(pageData.prevPage)} >Prev</button>
          }
          {pageData?.nextPage &&
            <button className='m-2 hover:text-orange-500 transition-colors ease-in-out' onClick={() => pageSearch(pageData.nextPage)} >Next</button>
          }
        </div>
      </div>

          <div className='flex justify-center items-center flex-col bg-slate-50 '>
            <h1 className='text-2xl '>Productos mas recientes</h1>
            <DisplaySixProducts/>
          </div>
    </section>
  )
}
