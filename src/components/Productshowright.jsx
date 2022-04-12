import React,{useState} from 'react'

export default function Productshowleft() {
    const [imgCharge,setImgCharge] = useState(false)

    return (
        <article  className={`grid grid-cols-2 md:w-4/6 ${imgCharge?"":"animate-pulse"}  mt-10 rounded-sm shadow-md shadow-slate-400 text-slate-800`}>

            {/* d3494bf4-926b-44cd-82c7-18c930e29b71.jpg */}
            <section className='flex flex-col'>
                <h2 className='  text-3xl font-semibold font-Abril pl-5 pt-20 w-56 '>DISFRUTA DE NUESTRA PIÑA</h2>
                <h3 className=' my-7 text-2xl text-right font-Barlow pr-5'>DIRECTAMENTE DESDEU CARBALLO</h3>
                <p className=' my-1 text-xl font-extralight text-left pl-5 '>LOS CRIAMOS NOSOTROS DESDE QUE ERAN BEBECITOS</p>
                <p className=' my-1 text-xl tleft pl-5 '><b>100% NATURAL</b></p>
                <p className=' my-1 text-xl font-extralight text-left w-72  pl-5'>QUIEN NO QUISO RECIBIR UNA ALGUNA VEZ?</p>
            </section>
            <div className='h-[calc(31rem)] overflow-hidden '>
                <img onLoad={()=>setImgCharge(!imgCharge)} className={` relative  object-cover w-full h-full ${imgCharge?"opacity-100":"opacity-0"} transition-opacity ease-in-out duration-1000 `} src="https://eccomerce-346201.rj.r.appspot.com/files/storage/download/d3494bf4-926b-44cd-82c7-18c930e29b71.jpg" alt="" />
            </div>
        </article>
    )
}
