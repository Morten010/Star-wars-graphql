import React from 'react'
import { createPortal } from 'react-dom'
import { FilmProps, SpeciesProps } from '../types'
import { Props } from '../pages/Movies'

export default function Modal({open, setOpen, film}: {
    open: boolean,
    setOpen: () => void
    film?: Props
}) {

    console.log(film);
    
  return createPortal((
    <div
    className='absolute bg-black/25 w-full h-screen top-0 left-0 flex items-center justify-center'
    >
        <div
        className='bg-[#2791cc]/10 border-[#2791cc] border min-w-[200px] max-w-[800px] w-full p-3 min-h-[100px] rounded relative'
        >
            {film && (
                <>
                    <h2
                    className='title text-4xl font-semibold'
                    >
                        {film.title}
                    </h2>
                    <address>
                        director: {film.director}
                    </address>
                    
                    <div>
                        <h3 
                        className='title text-2xl font-semibold'
                        >
                            Spiecies
                        </h3>
                        <ul
                        className='flex flex-wrap gap-1'
                        >
                            {film.speciesConnection.species.map(s => (
                                <li
                                key={s.name}
                                >
                                    <h3>
                                        {s.name} -
                                    </h3>
                                </li>
                            ))}
                        </ul>
                    </div>
    
                </>
            )}
            <button
            className='bg-[#2791cc]/20 px-2 py-1 border-[#2791cc] border absolute right-3 top-3'
            onClick={setOpen}
            >
                Go back
            </button>
        </div>
    </div>
  ), document.body)
}
