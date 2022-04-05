import React from 'react'

export default function Productshowleft() {
    return (
        <article className='grid grid-cols-2 w-4/6  mt-10 rounded-sm shadow-md shadow-slate-400 text-slate-800'>
            {/* d6c8e437-af48-4c39-90db-4ebcf3a042c2.jpg */}
            <div className='h-[calc(31rem)] overflow-hidden '>
                <img className='-top-14 relative' src="https://eccomerce-346201.rj.r.appspot.com/files/storage/download/d6c8e437-af48-4c39-90db-4ebcf3a042c2.jpg" alt="" />
            </div>
            <section className='flex flex-col'>
                <h2 className='  text-3xl font-semibold font-Abril text-right pr-5 pt-20 w-56 self-end'>DISFRUTA DE NUESTRO BANANO</h2>
                <h3 className=' my-7 text-2xl font-Barlow pl-5'>DIRECTAMENTE DESDEU CARBALLO</h3>
                <p className=' my-1 text-xl font-extralight text-right pr-5 '>LOS CRIAMOS NOSOTROS DESDE QUE ERAN BEBECITOS</p>
                <p className=' my-1 text-xl text-right pr-5 '><b>100% NATURAL</b></p>
                <p className=' my-1 text-xl font-extralight text-right w-72 self-end pr-5'>A LOS MONOS LES ENCANTA, A TI TAMBIEN LO HARA</p>
            </section>
        </article>
    )
}
