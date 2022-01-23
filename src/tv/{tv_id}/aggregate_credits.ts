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
