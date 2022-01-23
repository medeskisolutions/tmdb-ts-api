export interface ProductionCompany {
  id: number
  logo_path?: any
  name: string
  origin_country: string
}

export interface ProductionCountry {
  iso_3166_1: string
  name: string
}

export interface LatestMovie {
  adult: boolean
  backdrop_path?: any
  belongs_to_collection?: any
  budget: number
  genres: any[]
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path?: any
  production_companies: ProductionCompany[]
  production_countries: ProductionCountry[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: any[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export const mockLatestMovie: LatestMovie = {
  adult: false,
  backdrop_path: null,
  belongs_to_collection: null,
  budget: 15000,
  genres: [],
  homepage: '',
  id: 929593,
  imdb_id: 'tt0464943',
  original_language: 'en',
  original_title: 'Electronic Road Film: An American Odyssey',
  overview:
    'In 1989, Harvey Hubbell V loaded his nephew TJ, a camera, and a bunch of tape and batteries into a Volkswagen hatchback and drove a 13,000 mile loop around the country. This documentary travelogue shows what happens when you can shoot 24 hours a day for 60 days. Shot on a $15,000 budget at the height of the "culture wars," it reveals the unique differences of a still unhomogenized citizenry, and concludes that "People who are different from us are not necessarily our enemies."',
  popularity: 0.0,
  poster_path: null,
  production_companies: [
    {
      id: 168364,
      logo_path: null,
      name: 'Captured Time Productions LLC',
      origin_country: ''
    }
  ],
  production_countries: [
    {
      iso_3166_1: 'US',
      name: 'United States of America'
    }
  ],
  release_date: '1996-06-01',
  revenue: 0,
  runtime: 26,
  spoken_languages: [],
  status: 'Released',
  tagline: '',
  title: 'Electronic Road Film: An American Odyssey',
  video: false,
  vote_average: 0.0,
  vote_count: 0
}
