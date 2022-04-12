import React from 'react'
import {BsCheckCircleFill} from 'react-icons/bs'


export default function PayCorrect() {
  return (
    <div className='flex flex-col justify-center items-center m-24'>
        <h1 className='text-2xl text-gray-700'>Pay Correct</h1>
        <BsCheckCircleFill className='w-1/5 h-1/5 text-green-500 opacity-40'/>
    </div>
  )
}
