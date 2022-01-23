export interface Role {
  credit_id: string
  character: string
  episode_count: number
}

export interface Cast {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string | null
  roles: Role[]
  total_episode_count: number
  order: number
}

export interface Job {
  credit_id: string
  job: string
  episode_count: number
}

export interface Crew {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string | null
  jobs: Job[]
  department: string
  total_episode_count: number
}

export interface TvShowAggregateCredits {
  cast: Cast[]
  crew: Crew[]
  id: number
}

export const mockTvShowAggregateCredits: TvShowAggregateCredits = {
  cast: [
    {
      adult: false,
      gender: 2,
      id: 11678,
      known_for_department: "Acting",
      name: "Rainn Wilson",
      original_name: "Rainn Wilson",
      popularity: 19.919,
      profile_path: "/rEDRAFYX5n2JKJh9EKILX42klA5.jpg",
      roles: [
        {
          credit_id: "525730a9760ee3776a34474f",
          character: "Dwight Schrute",
          episode_count: 195,
        },
      ],
      total_episode_count: 195,
      order: 1,
    },
    {
      adult: false,
      gender: 2,
      id: 17697,
      known_for_department: "Acting",
      name: "John Krasinski",
      original_name: "John Krasinski",
      popularity: 18.961,
      profile_path: "/qyOE30A2ctnn7QnPjXgxLAnBore.jpg",
      roles: [
        {
          credit_id: "525730a9760ee3776a344785",
          character: "Jim Halpert",
          episode_count: 195,
        },
      ],
      total_episode_count: 195,
      order: 2,
    },
    {
      adult: false,
      gender: 1,
      id: 51856,
      known_for_department: "Acting",
      name: "Jenna Fischer",
      original_name: "Jenna Fischer",
      popularity: 12.502,
      profile_path: "/tMq4qJ8bbZqJqde9BSrAWe06vQP.jpg",
      roles: [
        {
          credit_id: "525730a9760ee3776a3447bb",
          character: "Pam Beesly",
          episode_count: 195,
        },
      ],
      total_episode_count: 195,
      order: 3,
    },
    {
      adult: false,
      gender: 2,
      id: 107770,
      known_for_department: "Acting",
      name: "B.J. Novak",
      original_name: "B.J. Novak",
      popularity: 12.026,
      profile_path: "/qsngFvN1tMvyu84atOPPsbLJc5M.jpg",
      roles: [
        {
          credit_id: "5c91c2b70e0a2612f55c9bc3",
          character: "Ryan Howard",
          episode_count: 195,
        },
      ],
      total_episode_count: 195,
      order: 4,
    },
    {
      adult: false,
      gender: 1,
      id: 304282,
      known_for_department: "Acting",
      name: "Kate Flannery",
      original_name: "Kate Flannery",
      popularity: 3.088,
      profile_path: "/wFXWKB2IUyB6Cu08PyovyBAm9WT.jpg",
      roles: [
        {
          credit_id: "525730ac760ee3776a344bfb",
          character: "Meredith Palmer",
          episode_count: 195,
        },
      ],
      total_episode_count: 195,
      order: 340,
    },
    {
      adult: false,
      gender: 2,
      id: 94622,
      known_for_department: "Acting",
      name: "Brian Baumgartner",
      original_name: "Brian Baumgartner",
      popularity: 8.459,
      profile_path: "/1O7ECkD4mOKAgMAbQADBpTKBzOP.jpg",
      roles: [
        {
          credit_id: "525730a9760ee3776a3447f1",
          character: "Kevin Malone",
          episode_count: 195,
        },
      ],
      total_episode_count: 195,
      order: 340,
    },
    {
      adult: false,
      gender: 1,
      id: 125167,
      known_for_department: "Acting",
      name: "Mindy Kaling",
      original_name: "Mindy Kaling",
      popularity: 7.173,
      profile_path: "/zd3sxyCKUTIWgvf8tcGo1Gur2By.jpg",
      roles: [
        {
          credit_id: "525730ac760ee3776a344b7b",
          character: "Kelly Kapoor",
          episode_count: 195,
        },
      ],
      total_episode_count: 195,
      order: 340,
    },
    {
      adult: false,
      gender: 2,
      id: 1230842,
      known_for_department: "Acting",
      name: "Leslie David Baker",
      original_name: "Leslie David Baker",
      popularity: 4.295,
      profile_path: "/9h3xlV5IYqKinlQCW1ouU7sjwWF.jpg",
      roles: [
        {
          credit_id: "525730ab760ee3776a344a87",
          character: "Stanley Hudson",
          episode_count: 195,
        },
      ],
      total_episode_count: 195,
      order: 340,
    },
  ],
  crew: [
    {
      adult: false,
      gender: 0,
      id: 2166017,
      known_for_department: "Art",
      name: "Steve Rostine",
      original_name: "Steve Rostine",
      popularity: 0.6,
      profile_path: null,
      jobs: [
        {
          credit_id: "5bdaa3990e0a2603b40089a6",
          job: "Set Decoration",
          episode_count: 4,
        },
      ],
      department: "Art",
      total_episode_count: 4,
    },
    {
      adult: false,
      gender: 2,
      id: 1844757,
      known_for_department: "Art",
      name: "Philip D. Shea",
      original_name: "Philip D. Shea",
      popularity: 0.6,
      profile_path: null,
      jobs: [
        {
          credit_id: "5bdaa766c3a36807820082a8",
          job: "Property Master",
          episode_count: 3,
        },
      ],
      department: "Art",
      total_episode_count: 3,
    },
    {
      adult: false,
      gender: 0,
      id: 33562,
      known_for_department: "Art",
      name: "Donald Lee Harris",
      original_name: "Donald Lee Harris",
      popularity: 1.38,
      profile_path: null,
      jobs: [
        {
          credit_id: "5bdaafa2c3a368078b008d77",
          job: "Production Design",
          episode_count: 1,
        },
      ],
      department: "Art",
      total_episode_count: 1,
    },
    {
      adult: false,
      gender: 0,
      id: 2166018,
      known_for_department: "Art",
      name: "Melody Melton",
      original_name: "Melody Melton",
      popularity: 1.4,
      profile_path: null,
      jobs: [
        {
          credit_id: "5bdaa3a29251415407007e49",
          job: "Property Master",
          episode_count: 1,
        },
      ],
      department: "Art",
      total_episode_count: 1,
    },
    {
      adult: false,
      gender: 2,
      id: 1215572,
      known_for_department: "Directing",
      name: "Randall Einhorn",
      original_name: "Randall Einhorn",
      popularity: 1.788,
      profile_path: null,
      jobs: [
        {
          credit_id: "5bdaa68f92514153f500859f",
          job: "Director of Photography",
          episode_count: 3,
        },
      ],
      department: "Camera",
      total_episode_count: 3,
    },
    {
      adult: false,
      gender: 0,
      id: 1879373,
      known_for_department: "Camera",
      name: "Dale Alexander",
      original_name: "Dale Alexander",
      popularity: 0.6,
      profile_path: null,
      jobs: [
        {
          credit_id: "5bdaa7d90e0a2603c60086d9",
          job: "Key Grip",
          episode_count: 3,
        },
      ],
      department: "Camera",
      total_episode_count: 3,
    },
    {
      adult: false,
      gender: 2,
      id: 1221087,
      known_for_department: "Writing",
      name: "Dan Sterling",
      original_name: "Dan Sterling",
      popularity: 0.6,
      profile_path: null,
      jobs: [
        {
          credit_id: "525730a8760ee3776a344479",
          job: "Writer",
          episode_count: 1,
        },
      ],
      department: "Writing",
      total_episode_count: 1,
    },
  ],
  id: 2316,
}
