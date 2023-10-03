import React from 'react'
import {Link} from "react-router-dom"
import { links } from '../constants'

export default function Homepage() {
  return (
    <div
    className='p-3'
    >

        <h1
        className='title font-bold text-6xl text-center py-5'
        >
            What do you wanna see?
        </h1>
       <div
       className='grid grid-cols-2 gap-2'
       >
            <Link
            to="/movies"
            className='text-center aspect-video grid place-content-center text-5xl font-bold bg-[#f2ae0a] rounded text-[#121418] hover:opacity-70 transition-opacity'
            >
                Movies
            </Link>
            <Link
            to="/characters"
            className='text-center aspect-video grid place-content-center text-5xl font-bold border-2 border-[#f2ae0a] rounded text-[#f2ae0a] hover:opacity-70 transition-opacity'
            >
                Characters
            </Link>
       </div>
    </div>
  )
}
