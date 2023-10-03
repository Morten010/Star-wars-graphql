export type AllFilmProps = {
    allFilms: {
        __typename: string
        films: FilmProps & {
            species: SpeciesProps
        }[]
    }
}

export type FilmProps = {
    __typename: string
    title: string
    director: string
    releaseDate: string
}

export type SpeciesProps = {
    __typename: string
    name: string
    classification: string
    homeworld: {
        __typename: string
        name: string
    }
}
export type HomeWorldProps = {
    __typename: string
    name: string
}

export type PeopleProps = {
    __typename: string
    birthYear: string
    eyeColor: string
    gender: string
    hairColor: string
    height: number
    mass: number
    name: string
    skinColor: string
  }