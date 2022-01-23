export interface Result {
  description: string
  favorite_count: number
  id: number
  item_count: number
  iso_639_1: string
  list_type: string
  name: string
  poster_path?: any
}

export interface MovieLists {
  id: number
  page: number
  results: Result[]
  total_pages: number
  total_results: number
}

export const mockMovieLists: MovieLists = {
  id: 603,
  page: 1,
  results: [
    {
      description: '',
      favorite_count: 0,
      id: 113444,
      item_count: 407,
      iso_639_1: 'en',
      list_type: 'movie',
      name: 'Movies',
      poster_path: null
    },
    {
      description: '',
      favorite_count: 0,
      id: 7091825,
      item_count: 1405,
      iso_639_1: 'en',
      list_type: 'movie',
      name: 'watched movies',
      poster_path: null
    },
    {
      description: "All the Great Movies I've Watched So Far",
      favorite_count: 0,
      id: 7092449,
      item_count: 494,
      iso_639_1: 'en',
      list_type: 'movie',
      name: 'Watched Movies',
      poster_path: null
    },
    {
      description: '',
      favorite_count: 0,
      id: 85047,
      item_count: 801,
      iso_639_1: 'es',
      list_type: 'movie',
      name: 'Pelis Vistas',
      poster_path: null
    },
    {
      description: '',
      favorite_count: 0,
      id: 8168597,
      item_count: 7750,
      iso_639_1: 'en',
      list_type: 'movie',
      name: 'movies',
      poster_path: null
    },
    {
      description: 'Movies and TV shows I physically own.',
      favorite_count: 0,
      id: 23932,
      item_count: 956,
      iso_639_1: 'en',
      list_type: 'movie',
      name: 'My DVD/BD Collection',
      poster_path: null
    },
    {
      description: 'Meine Filme',
      favorite_count: 0,
      id: 7113987,
      item_count: 6698,
      iso_639_1: 'de',
      list_type: 'movie',
      name: 'Filme',
      poster_path: null
    },
    {
      description: '',
      favorite_count: 0,
      id: 7082071,
      item_count: 123,
      iso_639_1: 'fr',
      list_type: 'movie',
      name: 'Films Populaire',
      poster_path: null
    },
    {
      description: '',
      favorite_count: 0,
      id: 6652510,
      item_count: 246,
      iso_639_1: 'ru',
      list_type: 'movie',
      name: '1',
      poster_path: null
    },
    {
      description: '',
      favorite_count: 0,
      id: 7102480,
      item_count: 1060,
      iso_639_1: 'en',
      list_type: 'movie',
      name: 'All Watched Films',
      poster_path: null
    },
    {
      description: '',
      favorite_count: 0,
      id: 8175900,
      item_count: 80,
      iso_639_1: 'en',
      list_type: 'movie',
      name: 'Movies',
      poster_path: null
    },
    {
      description: '',
      favorite_count: 0,
      id: 107706,
      item_count: 4769,
      iso_639_1: 'en',
      list_type: 'movie',
      name: 'Watched Movies',
      poster_path: null
    },
    {
      description: '',
      favorite_count: 0,
      id: 8168697,
      item_count: 30,
      iso_639_1: 'zh',
      list_type: 'movie',
      name: 'HOME ALONE',
      poster_path: null
    },
    {
      description: 'Watched List',
      favorite_count: 0,
      id: 7113415,
      item_count: 998,
      iso_639_1: 'en',
      list_type: 'movie',
      name: 'Watched',
      poster_path: null
    },
    {
      description: '',
      favorite_count: 0,
      id: 7072243,
      item_count: 2972,
      iso_639_1: 'nl',
      list_type: 'movie',
      name: 'Verzameling ',
      poster_path: null
    },
    {
      description: '',
      favorite_count: 0,
      id: 7054306,
      item_count: 1314,
      iso_639_1: 'es',
      list_type: 'movie',
      name: 'Peliculas',
      poster_path: null
    },
    {
      description: 'Master List In Progress',
      favorite_count: 0,
      id: 51108,
      item_count: 8965,
      iso_639_1: 'en',
      list_type: 'movie',
      name: 'My Movies',
      poster_path: null
    },
    {
      description: '',
      favorite_count: 0,
      id: 8175267,
      item_count: 1028,
      iso_639_1: 'en',
      list_type: 'movie',
      name: 'Collection',
      poster_path: null
    },
    {
      description: '',
      favorite_count: 0,
      id: 7061987,
      item_count: 527,
      iso_639_1: 'de',
      list_type: 'movie',
      name: 'UHD',
      poster_path: null
    },
    {
      description: '',
      favorite_count: 0,
      id: 7061989,
      item_count: 1240,
      iso_639_1: 'de',
      list_type: 'movie',
      name: 'Alle Medien',
      poster_path: null
    }
  ],
  total_pages: 100,
  total_results: 1998
}
