import React, { useEffect, useState } from 'react'
import {BsBag,BsPersonSquare,BsSearch} from 'react-icons/bs'
import {MdCancel} from 'react-icons/md'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { logged,logout } from '../features/user/userSlice'
import CartDisplay from './CartDisplay'
import {loadChangeCart, showCart} from '../features/cart/cartSlice'



export default function Header() {
  const {login} = useSelector(state=>state.user)
  const [searchShow,setSearchShow] = useState(false)
  const Dispatch = useDispatch()
// TODO: hacer el get al validate de la sesion aqui o en app?
  useEffect(()=>{
    Dispatch(logged())
    Dispatch(loadChangeCart())
    console.log("logged")
  },[])
  return (
    <>
    <header className='bg-gray-100 opacity-80 text-center sticky top-0 z-40  '>
        <h1 className='text-4xl font-medium'><Link to={'/'}>E-FRUITS</Link></h1>
        <nav className=''>
            <ul className='flex gap-5 justify-center'>
                <li><Link className='hover:text-orange-500 transition-colors ease-in-out ' to={'/'}>Fruits</Link></li>
                <li><Link className='hover:text-orange-500 transition-colors ease-in-out ' to={'/search'}>Search</Link></li>
                <li><Link className='hover:text-orange-500 transition-colors ease-in-out ' to={'/'}>Shop</Link></li>
                <li><Link className='hover:text-orange-500 transition-colors ease-in-out ' to={'/'}>Pies</Link></li>
                <li><Link className='hover:text-orange-500 transition-colors ease-in-out ' to={'/'}>About</Link></li>
            </ul>
        </nav>
        <div className='absolute right-3 top-2 flex'>
        <button onClick={()=>Dispatch(logout())}><MdCancel className='hover:text-orange-600'/></button>
        <Link to={'/login'}><BsPersonSquare className={`text-2xl mx-3 ${login?'text-orange-600 opacity-100':"opacity-25"} transition-opacity ease-out`}/></Link>
        <input className={` w-0 ${searchShow?"border-slate-500 border-2 rounded-sm w-36 outline-none focus:border-slate-800":"w-0 border-2 border-slate-100"} transition-all ease-out duration-500 `} type="text" name="" id="" />
        <button className='' onClick={()=>setSearchShow(!searchShow)} ><BsSearch className=' text-2xl mr-4 ml-1'/></button>
        <button onClick={()=>Dispatch(showCart())} ><BsBag className=' text-2xl'/></button>
        </div>
        
    </header>
    <CartDisplay/>
    </>
  )
}
