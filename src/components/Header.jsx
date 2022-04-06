import React, { useState } from 'react'
import {BsBag,BsPersonSquare,BsSearch} from 'react-icons/bs'
import {Link} from 'react-router-dom'
export default function Header() {
  const [searchShow,setSearchShow] = useState(false)
  return (
    <header className='bg-gray-100 opacity-80 text-center sticky top-0 z-40  '>
        <h1 className='text-4xl font-medium'><Link to={'/'}>E-FRUITS</Link></h1>
        <nav className=''>
            <ul className='flex gap-5 justify-center'>
                <li><Link to={'/'}>Search</Link></li>
                <li><Link to={'/'}>Fruits</Link></li>
                <li><Link to={'/'}>Shop</Link></li>
                <li><Link to={'/'}>Pies</Link></li>
                <li><Link to={'/'}>About</Link></li>
            </ul>
        </nav>
        <div className='absolute right-3 top-2 flex'>
        <button><BsPersonSquare className=' text-2xl mx-3'/></button>
        <input className={` w-0 ${searchShow?"border-slate-500 border-2 rounded-sm w-36 outline-none focus:border-slate-800":"w-0 border-2 border-slate-100"} transition-all ease-out duration-500 `} type="text" name="" id="" />
        <button className='' onClick={()=>setSearchShow(!searchShow)} ><BsSearch className=' text-2xl mr-4 ml-1'/></button>
        <button><BsBag className=' text-2xl'/></button>
        </div>
    </header>
  )
}
