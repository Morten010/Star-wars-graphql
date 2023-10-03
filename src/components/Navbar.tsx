import React from 'react'
import { links } from '../constants'
import {NavLink, Link} from "react-router-dom"

export default function Navbar() {
  return (
    <div
    className='bg-[#1c1e23] text-white'
    >
        <nav
        className='flex p-3 gap-5 max-w-screen-xl mx-auto'
        >
            <Link
            to="/"
            >
                <img
                src='/logo.png'
                alt=''
                className='h-8 pr-5 border-r border-[#26282c]'
                />
            </Link>
            <ul
            className='flex gap-2 self-center'
            >
                {links.map(l => (
                    <li
                    key={l.title}
                    >
                        <NavLink
                        to={l.link}
                        className="opacity-60 transition-opacity"
                        >
                            {l.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    </div>
  )
}
