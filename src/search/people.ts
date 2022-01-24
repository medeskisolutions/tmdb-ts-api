import { PaginatedResponse } from ".."

export interface KnownForMovie {
  media_type: "movie"
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface KnownForTvShow {
  media_type: "tv"
  backdrop_path: string
  first_air_date: string
  genre_ids: number[]
  id: number
  name: string
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  poster_path: string
  vote_average: number
  vote_count: number
}

export interface PersonSearchResult {
  adult: boolean
  gender: number
  id: number
  known_for: Array<KnownForMovie | KnownForTvShow>
  known_for_department: string
  name: string
  popularity: number
  profile_path: string
}

export type PeopleSearchResults = PaginatedResponse<any>

export const mockPeopleSearchResults: PeopleSearchResults = {
  page: 1,
  results: [
    {
      adult: false,
      gender: 2,
      id: 80352,
      known_for: [
        {
          adult: false,
          backdrop_path: "/qkl57wzSFrpi2sRpoc2mZJbMuLP.jpg",
          genre_ids: [12, 14, 18, 10749],
          id: 50620,
          media_type: "movie",
          original_language: "en",
          original_title: "The Twilight Saga: Breaking Dawn - Part 2",
          overview:
            "After the birth of Renesmee, the Cullens gather other vampire clans in order to protect the child from a false allegation that puts the family in front of the Volturi.",
          poster_path: "/jHE7WUf3FDod8vw3O3twh0JVZun.jpg",
          release_date: "2012-11-13",
          title: "The Twilight Saga: Breaking Dawn - Part 2",
          video: false,
          vote_average: 6.5,
          vote_count: 7478,
        },
        {
          adult: false,
          backdrop_path: "/nuijC0rSLcVfkfxEJVdqMDrnSba.jpg",
          genre_ids: [878, 28, 12, 35],
          id: 98566,
          media_type: "movie",
          original_language: "en",
          original_title: "Teenage Mutant Ninja Turtles",
          overview:
            "When a kingpin threatens New York City, a group of mutated turtle warriors must emerge from the shadows to protect their home.",
          poster_path: "/azL2ThbJMIkts3ZMt3j1YgBUeDB.jpg",
          release_date: "2014-08-07",
          title: "Teenage Mutant Ninja Turtles",
          video: false,
          vote_average: 5.9,
          vote_count: 5720,
        },
        {
          backdrop_path: "/zrMCOQnzIgGyBtGCdMPom9bOw0r.jpg",
          first_air_date: "2015-08-23",
          genre_ids: [10759, 18],
          id: 62286,
          media_type: "tv",
          name: "Fear the Walking Dead",
          origin_country: ["US"],
          original_language: "en",
          original_name: "Fear the Walking Dead",
          overview:
            'What did the world look like as it was transforming into the horrifying apocalypse depicted in "The Walking Dead"? This spin-off set in Los Angeles, following new characters as they face the beginning of the end of the world, will answer that question.',
          poster_path: "/upmd11A2ZaZEG1j6wRGdD4B5cxs.jpg",
          vote_average: 7.7,
          vote_count: 3976,
        },
      ],
      known_for_department: "Acting",
      name: "Noel Fisher",
      popularity: 24.832,
      profile_path: "/rBD5Iwt9WITaUKGk1oxSPLjjpm2.jpg",
    },
    {
      adult: false,
      gender: 1,
      id: 3713,
      known_for: [
        {
          adult: false,
          backdrop_path: "/6VmFqApQRyZZzmiGOQq2C92jyvH.jpg",
          genre_ids: [18, 10749],
          id: 597,
          media_type: "movie",
          original_language: "en",
          original_title: "Titanic",
          overview:
            "101-year-old Rose DeWitt Bukater tells the story of her life aboard the Titanic, 84 years later. A young Rose boards the ship with her mother and fiancé. Meanwhile, Jack Dawson and Fabrizio De Rossi win third-class tickets aboard the ship. Rose tells the whole story from Titanic's departure through to its death—on its first and last voyage—on April 15, 1912.",
          poster_path: "/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
          release_date: "1997-11-18",
          title: "Titanic",
          video: false,
          vote_average: 7.9,
          vote_count: 20443,
        },
        {
          backdrop_path: "/gIApbx2ffXVhJb2D4tiEx2b06nl.jpg",
          first_air_date: "2005-03-27",
          genre_ids: [18],
          id: 1416,
          media_type: "tv",
          name: "Grey's Anatomy",
          origin_country: ["US"],
          original_language: "en",
          original_name: "Grey's Anatomy",
          overview:
            "Follows the personal and professional lives of a group of doctors at Seattle’s Grey Sloan Memorial Hospital.",
          poster_path: "/zPIug5giU8oug6Xes5K1sTfQJxY.jpg",
          vote_average: 8.2,
          vote_count: 7479,
        },
        {
          adult: false,
          backdrop_path: "/apTOVNAkOg5O8jN9G8tfYgZf1HG.jpg",
          genre_ids: [28, 12, 10749, 878, 53],
          id: 72710,
          media_type: "movie",
          original_language: "en",
          original_title: "The Host",
          overview:
            'A parasitic alien soul is injected into the body of Melanie Stryder. Instead of carrying out her race\'s mission of taking over the Earth, "Wanda" (as she comes to be called) forms a bond with her host and sets out to aid other free humans.',
          poster_path: "/ok2sl6rGITZ0W94DeRU4VkB2ssW.jpg",
          release_date: "2013-03-22",
          title: "The Host",
          video: false,
          vote_average: 6.3,
          vote_count: 3512,
        },
      ],
      known_for_department: "Acting",
      name: "Frances Fisher",
      popularity: 17.675,
      profile_path: "/tsyGcoXGRNM8KGLpLG3OuxAyxx2.jpg",
    },
    {
      adult: false,
      gender: 2,
      id: 26473,
      known_for: [
        {
          adult: false,
          backdrop_path: "/jK65srQczOKTpW62wPxwwKztGgE.jpg",
          genre_ids: [35, 18],
          id: 120467,
          media_type: "movie",
          original_language: "en",
          original_title: "The Grand Budapest Hotel",
          overview:
            "The Grand Budapest Hotel tells of a legendary concierge at a famous European hotel between the wars and his friendship with a young employee who becomes his trusted protégé. The story involves the theft and recovery of a priceless Renaissance painting, the battle for an enormous family fortune and the slow and then sudden upheavals that transformed Europe during the first half of the 20th century.",
          poster_path: "/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",
          release_date: "2014-02-26",
          title: "The Grand Budapest Hotel",
          video: false,
          vote_average: 8,
          vote_count: 11901,
        },
        {
          adult: false,
          backdrop_path: "/l0qVZIpXtIo7km9u5Yqh0nKPOr5.jpg",
          first_air_date: "1994-09-22",
          genre_ids: [35, 18],
          id: 1668,
          media_type: "tv",
          name: "Friends",
          origin_country: ["US"],
          original_language: "en",
          original_name: "Friends",
          overview:
            "Friends is an American television sitcom created by David Crane and Marta Kauffman, which aired on NBC from September 22, 1994, to May 6, 2004, lasting ten seasons. With an ensemble cast starring Jennifer Aniston, Courteney Cox, Lisa Kudrow, Matt LeBlanc, Matthew Perry and David Schwimmer, the show revolves around six friends in their 20s and 30s who live in Manhattan, New York City. The series was produced by Bright/Kauffman/Crane Productions, in association with Warner Bros. Television. The original executive producers were Kevin S. Bright, Kauffman, and Crane.",
          poster_path: "/oY3ck2Sdu8qsEWFnuiX2HEfr65k.jpg",
          vote_average: 8.4,
          vote_count: 5374,
        },
        {
          adult: false,
          backdrop_path: "/jB5zHG1eHh0OC1S61itXNApZlLD.jpg",
          genre_ids: [12, 35, 16],
          id: 399174,
          media_type: "movie",
          original_language: "en",
          original_title: "Isle of Dogs",
          overview:
            "In the future, an outbreak of canine flu leads the mayor of a Japanese city to banish all dogs to an island that's a garbage dump. The outcasts must soon embark on an epic journey when a 12-year-old boy arrives on the island to find his beloved pet.",
          poster_path: "/c0nUX6Q1ZB0P2t1Jo6EeFSVnOGQ.jpg",
          release_date: "2018-03-23",
          title: "Isle of Dogs",
          video: false,
          vote_average: 7.9,
          vote_count: 3719,
        },
      ],
      known_for_department: "Acting",
      name: "Fisher Stevens",
      popularity: 15.948,
      profile_path: "/TutpOyw0A6FF5hEoFDYseI2EVN.jpg",
    },
    {
      adult: false,
      gender: 1,
      id: 4,
      known_for: [
        {
          adult: false,
          backdrop_path: "/k6EOrckWFuz7I4z4wiRwz8zsj4H.jpg",
          genre_ids: [28, 12, 878, 14],
          id: 140607,
          media_type: "movie",
          original_language: "en",
          original_title: "Star Wars: The Force Awakens",
          overview:
            "Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.",
          poster_path: "/wqnLdwVXoBjKibFRR5U3y0aDUhs.jpg",
          release_date: "2015-12-15",
          title: "Star Wars: The Force Awakens",
          video: false,
          vote_average: 7.3,
          vote_count: 16615,
        },
        {
          adult: false,
          backdrop_path: "/zqkmTXzjkAgXmEWLRsY4UpTWCeo.jpg",
          genre_ids: [12, 28, 878],
          id: 11,
          media_type: "movie",
          original_language: "en",
          original_title: "Star Wars",
          overview:
            "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
          poster_path: "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
          release_date: "1977-05-25",
          title: "Star Wars",
          video: false,
          vote_average: 8.2,
          vote_count: 16597,
        },
        {
          adult: false,
          backdrop_path: "/dMZxEdrWIzUmUoOz2zvmFuutbj7.jpg",
          genre_ids: [12, 28, 878],
          id: 1891,
          media_type: "movie",
          original_language: "en",
          original_title: "The Empire Strikes Back",
          overview:
            "The epic saga continues as Luke Skywalker, in hopes of defeating the evil Galactic Empire, learns the ways of the Jedi from aging master Yoda. But Darth Vader is more determined than ever to capture Luke. Meanwhile, rebel leader Princess Leia, cocky Han Solo, Chewbacca, and droids C-3PO and R2-D2 are thrown into various stages of capture, betrayal and despair.",
          poster_path: "/7BuH8itoSrLExs2YZSsM01Qk2no.jpg",
          release_date: "1980-05-20",
          title: "The Empire Strikes Back",
          video: false,
          vote_average: 8.4,
          vote_count: 13777,
        },
      ],
      known_for_department: "Acting",
      name: "Carrie Fisher",
      popularity: 13.346,
      profile_path: "/rfJtncHewKVnHjqpIZvjn24ESeC.jpg",
    },
  ],
  total_pages: 45,
  total_results: 888,
}
