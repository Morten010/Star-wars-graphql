import { gql, useQuery } from '@apollo/client';
import Spinner from '../components/Spinner';
import { PeopleProps } from '../types';
import { Cake, PersonStanding, Eye, HelpCircle, Ruler, Brush, Weight } from 'lucide-react';

const GET_PEOPLE = gql`
    query AllPeople {
        allPeople {
        totalCount
            people {
                birthYear
                eyeColor
                gender
                hairColor
                height
                mass
                name
                skinColor
            }
        }
    }
    
`;

export default function Characters() {
    const { loading, error, data } = useQuery(GET_PEOPLE)

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
    
  return (
    <div
    className='p-3'
    >
        <h1
        className='title text-5xl font-semibold text-[#f2ae0a] py-3 mb-3 border-b border-[#26282c]'
        >
            Characters
        </h1>
        <div
        className='personGrid'
        >
            {data.allPeople.people.map((p: PeopleProps)  => (
                <div
                key={p.name}
                >
                    <h2
                    className='text-lg font-semibold'
                    >
                        {p.name}
                    </h2>
                    <p
                    className='flex gap-1 items-center'
                    >
                        <Cake className='h-4 2-4'/> 
                        BirthYear: {p.birthYear}
                    </p>
                    <p
                    className='flex gap-1 items-center'
                    >
                        <PersonStanding className='h-4 2-4'/> 
                        Gender: {p.gender}
                    </p>
                    <p
                    className='flex gap-1 items-center'
                    >
                        <Eye className='h-4 2-4'/> 
                        Eye color: {p.eyeColor}
                    </p>
                    <p
                    className='flex gap-1 items-center'
                    >
                        <HelpCircle className='h-4 2-4'/> 
                        Hair color: {p.hairColor}
                    </p>
                    <p
                    className='flex gap-1 items-center'
                    >
                        <Ruler className='h-4 2-4'/> 
                        Height: {p.height}
                    </p>
                    <p
                    className='flex gap-1 items-center'
                    >
                        <Weight className='h-4 2-4'/> 
                        Mass: {p.mass}
                    </p>
                    <p
                    className='flex gap-1 items-center'
                    >
                        <Brush className='h-4 2-4'/> 
                        SkinColor: {p.skinColor}
                    </p>
                </div>
            ))}
        </div>
    </div>
  )
}
