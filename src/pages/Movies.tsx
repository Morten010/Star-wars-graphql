import { gql, useQuery } from '@apollo/client';
import Spinner from '../components/Spinner';
import { FilmProps, SpeciesProps } from '../types';
import Modal from '../components/Modal';
import {useState} from "react"

const GET_MOVIES = gql`
    query Query {
        allFilms {
            films {
                title
                director
                releaseDate
                speciesConnection {
                    species {
                        name
                        classification
                        homeworld {
                        name
                        }
                    }
                }
            }
        }
    }
`;

export type Props = FilmProps & {
    speciesConnection: {
        species: SpeciesProps[]
    }
}

export default function Movies() {
    const [choosenFilm, setChoosenFilm] = useState<Props | undefined>()
    const { loading, error, data } = useQuery(GET_MOVIES)

    console.log(data);
    

    if (loading) return (
        <div
        className='h-[80vh] grid place-content-center'
        >
            <Spinner />
        </div>
    );
    if (error) return (
        <div
        className='p-5'
        >
            <p
            className='text-center'
            >
                {`Error! ${error.message}`}
            </p>
        </div>
    );

    const handleCloseModal = () => {
        setChoosenFilm(undefined)
    }

  return (
    <div
    className='p-3'
    >
        <h1
        className='title text-5xl font-semibold text-[#f2ae0a] py-3 mb-3 border-b border-[#26282c]'
        >
            Films
        </h1>
        <div
        className='personGrid'
        >
            {data.allFilms.films.map((f: Props ) => (
                <div
                key={f.title}
                className='cursor-pointer'
                onClick={() => setChoosenFilm(f)}
                >
                    <h2>
                        {f.title}
                    </h2>
                    <p>
                        {new Date(f.releaseDate).toLocaleDateString([], {
                            weekday: 'short', 
                            day : 'numeric', 
                            month: 'short', 
                            year: "numeric"
                        })}
                    </p>
                </div>
            ))}
        </div>

    {choosenFilm && <Modal 
    film={choosenFilm}
    open={!!choosenFilm}
    setOpen={handleCloseModal}
    />}
    </div>
  )
}
