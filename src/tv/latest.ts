export interface Season {
  air_date?: any
  episode_count: number
  id: number
  name: string
  overview: string
  poster_path?: any
  season_number: number
}

export interface LatestTvShow {
  adult: boolean
  backdrop_path?: any
  created_by: any[]
  episode_run_time: any[]
  first_air_date?: any
  genres: any[]
  homepage: string
  id: number
  in_production: boolean
  languages: any[]
  last_air_date?: any
  last_episode_to_air?: any
  name: string
  next_episode_to_air?: any
  networks: any[]
  number_of_episodes: number
  number_of_seasons: number
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: any[]
  production_countries: any[]
  seasons: Season[]
  spoken_languages: any[]
  status: string
  tagline: string
  type: string
  vote_average: number
  vote_count: number
}

export const mockLatestTvShow: LatestTvShow = {
  adult: false,
  backdrop_path: null,
  created_by: [],
  episode_run_time: [],
  first_air_date: null,
  genres: [],
  homepage: "",
  id: 156094,
  in_production: true,
  languages: [],
  last_air_date: null,
  last_episode_to_air: null,
  name: "طنزی مات",
  next_episode_to_air: null,
  networks: [],
  number_of_episodes: 1,
  number_of_seasons: 1,
  origin_country: ["IR"],
  original_language: "fa",
  original_name: "طنزی مات",
  overview: "",
  popularity: 0.0,
  poster_path: "/sTnLZycubKjWEK6kusk7bIXHUE.jpg",
  production_companies: [],
  production_countries: [],
  seasons: [
    {
      air_date: null,
      episode_count: 1,
      id: 240970,
      name: "Season 1",
      overview: "",
      poster_path: null,
      season_number: 1,
    },
  ],
  spoken_languages: [],
  status: "Returning Series",
  tagline: "",
  type: "Scripted",
  vote_average: 0.0,
  vote_count: 0,
}
