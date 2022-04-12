import React, { useEffect, useState } from 'react'
import {get} from '../api/axiosConfig'
import ProductsDisplay from '../components/ProductsDisplay'
import {BsSearch} from 'react-icons/bs'



export default function ProductsSearchPage() {
  const [pageData,setPageData] = useState()
  const categories = ['rojo','amarillo','verde','amarillo','natural']
  useEffect(()=>{
    get('/products/page/?page=1&limit=5')
    .then(({data})=>{
      setPageData(data)
    })
  },[])

  const pageSearch=(url)=>{
    get(url)
    .then(({data})=>{
      setPageData(data)
    })
  }
  const pageSearchCategory=(urlCat)=>{
    get('/products/get/product/'+urlCat)
    .then(({data})=>{
      setPageData(data)
    })
  }
  const inputSearch=(e)=>{
    e.preventDefault()
    console.log(e.target.search.value)
    get('/products/search/'+e.target.search.value)
    .then(({data})=>{
      setPageData({data:[...data]})
    })
  }
  console.log(pageData)
  return (
    <>
    <div className='shadow-lg flex flex-col items-center'>

    <form className='flex mt-5' onSubmit={inputSearch}>
      <input autoComplete='off' name="search" className={`border-slate-500 border-2 rounded-sm w-36 outline-none focus:border-slate-800 transition-all ease-out duration-500 `} type="text" id="" />
      <button className='hover:text-orange-500 transition-colors ease-in-out' ><BsSearch className=' text-2xl mr-4 ml-1'/></button>
    </form>
    <section className='flex flex-row m-5 shadow-lg p-1'>
      <div className='flex flex-col w-24 m-4 p-2'>
          {categories.map((category,index)=><button key={index} className="hover:text-orange-500 transition-colors ease-in-out" onClick={()=>pageSearchCategory(category)}>{category}</button>)}
      </div>
      {pageData?.data && <div className='flex flex-wrap justify-center gap-3'>
        {pageData.data.map(product=>{
          return <ProductsDisplay key={product._id} product={product}/>
        })} </div>}
      </section>
      <div>
        {pageData?.prevPage&&
        <button className='m-2 hover:text-orange-500 transition-colors ease-in-out' onClick={()=>pageSearch(pageData.prevPage)} >prev</button>
      }
        {pageData?.nextPage&&
        <button  className='m-2 hover:text-orange-500 transition-colors ease-in-out' onClick={()=>pageSearch(pageData.nextPage)} >next</button>
      }
      </div>
      </div>
    </>
  )
}
