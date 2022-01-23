export interface Cast {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string | null
  character: string
  credit_id: string
  order: number
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
  credit_id: string
  department: string
  job: string
}

export interface TvShowCredits {
  cast: Cast[]
  crew: Crew[]
  id: number
}

export const mockTvShowCredits = {
  cast: [
    {
      adult: false,
      gender: 2,
      id: 11678,
      known_for_department: 'Acting',
      name: 'Rainn Wilson',
      original_name: 'Rainn Wilson',
      popularity: 19.919,
      profile_path: '/rEDRAFYX5n2JKJh9EKILX42klA5.jpg',
      character: 'Dwight Schrute',
      credit_id: '525730a9760ee3776a34474f',
      order: 1
    },
    {
      adult: false,
      gender: 2,
      id: 17697,
      known_for_department: 'Acting',
      name: 'John Krasinski',
      original_name: 'John Krasinski',
      popularity: 18.961,
      profile_path: '/qyOE30A2ctnn7QnPjXgxLAnBore.jpg',
      character: 'Jim Halpert',
      credit_id: '525730a9760ee3776a344785',
      order: 2
    },
    {
      adult: false,
      gender: 1,
      id: 51856,
      known_for_department: 'Acting',
      name: 'Jenna Fischer',
      original_name: 'Jenna Fischer',
      popularity: 12.502,
      profile_path: '/tMq4qJ8bbZqJqde9BSrAWe06vQP.jpg',
      character: 'Pam Beesly',
      credit_id: '525730a9760ee3776a3447bb',
      order: 3
    },
    {
      adult: false,
      gender: 2,
      id: 27105,
      known_for_department: 'Acting',
      name: 'Ed Helms',
      original_name: 'Ed Helms',
      popularity: 16.542,
      profile_path: '/gPZ8tZaNQGAc3KZRIPp9rgGbEnN.jpg',
      character: 'Andy Bernard',
      credit_id: '525730ab760ee3776a344ab9',
      order: 278
    }
  ],
  crew: [
    {
      adult: false,
      gender: 0,
      id: 1225604,
      known_for_department: 'Writing',
      name: 'Warren Lieberstein',
      original_name: 'Warren Lieberstein',
      popularity: 1.22,
      profile_path: null,
      credit_id: '525730af760ee3776a344f97',
      department: 'Production',
      job: 'Producer'
    },
    {
      adult: false,
      gender: 2,
      id: 29009,
      known_for_department: 'Directing',
      name: 'Ken Kwapis',
      original_name: 'Ken Kwapis',
      popularity: 1.4,
      profile_path: '/ec57YfT1bN17GMDQNCbmWGv4EUN.jpg',
      credit_id: '525730b4760ee3776a3454a3',
      department: 'Production',
      job: 'Producer'
    },
    {
      adult: false,
      gender: 2,
      id: 107770,
      known_for_department: 'Acting',
      name: 'B.J. Novak',
      original_name: 'B.J. Novak',
      popularity: 12.026,
      profile_path: '/qsngFvN1tMvyu84atOPPsbLJc5M.jpg',
      credit_id: '525730b0760ee3776a3450b7',
      department: 'Production',
      job: 'Producer'
    },
    {
      adult: false,
      gender: 1,
      id: 1220649,
      known_for_department: 'Writing',
      name: 'Jennifer Celotta',
      original_name: 'Jennifer Celotta',
      popularity: 2.121,
      profile_path: null,
      credit_id: '525730b4760ee3776a34545d',
      department: 'Production',
      job: 'Producer'
    },
    {
      adult: false,
      gender: 2,
      id: 1216625,
      known_for_department: 'Writing',
      name: 'Daniel Chun',
      original_name: 'Daniel Chun',
      popularity: 1.826,
      profile_path: '/vEve4iO4pGsidxdjMdhoGL0BNWA.jpg',
      credit_id: '525730b4760ee3776a345575',
      department: 'Production',
      job: 'Producer'
    },
    {
      adult: false,
      gender: 2,
      id: 84416,
      known_for_department: 'Writing',
      name: 'Gene Stupnitsky',
      original_name: 'Gene Stupnitsky',
      popularity: 1.871,
      profile_path: null,
      credit_id: '525730b1760ee3776a3452af',
      department: 'Production',
      job: 'Producer'
    },
    {
      adult: false,
      gender: 2,
      id: 4495,
      known_for_department: 'Acting',
      name: 'Steve Carell',
      original_name: 'Steve Carell',
      popularity: 17.879,
      profile_path: '/dzJtsLspH5Bf8Tvw7OQC47ETNfJ.jpg',
      credit_id: '525730af760ee3776a344f4f',
      department: 'Production',
      job: 'Producer'
    },
    {
      adult: false,
      gender: 2,
      id: 1230857,
      known_for_department: 'Production',
      name: 'Randy Cordray',
      original_name: 'Randy Cordray',
      popularity: 0.694,
      profile_path: null,
      credit_id: '525730b0760ee3776a345071',
      department: 'Production',
      job: 'Producer'
    },
    {
      adult: false,
      gender: 2,
      id: 84417,
      known_for_department: 'Writing',
      name: 'Lee Eisenberg',
      original_name: 'Lee Eisenberg',
      popularity: 3.833,
      profile_path: '/qxA2eLl3AmBKfXqeCQy7RDlZSkE.jpg',
      credit_id: '525730b1760ee3776a3452f7',
      department: 'Production',
      job: 'Producer'
    },
    {
      adult: false,
      gender: 0,
      id: 1230858,
      known_for_department: 'Production',
      name: 'Kent Zbornak',
      original_name: 'Kent Zbornak',
      popularity: 1.4,
      profile_path: null,
      credit_id: '525730b2760ee3776a34533f',
      department: 'Production',
      job: 'Producer'
    },
    {
      adult: false,
      gender: 2,
      id: 1226308,
      known_for_department: 'Creator',
      name: 'Michael Schur',
      original_name: 'Michael Schur',
      popularity: 5.68,
      profile_path: '/uFqjvTHNCfThf9ahEIYWFkszm9c.jpg',
      credit_id: '525730b2760ee3776a345387',
      department: 'Production',
      job: 'Producer'
    },
    {
      adult: false,
      gender: 2,
      id: 1226276,
      known_for_department: 'Writing',
      name: 'Charlie Grandy',
      original_name: 'Charlie Grandy',
      popularity: 1.564,
      profile_path: null,
      credit_id: '525730af760ee3776a344f07',
      department: 'Production',
      job: 'Producer'
    },
    {
      adult: false,
      gender: 1,
      id: 125167,
      known_for_department: 'Acting',
      name: 'Mindy Kaling',
      original_name: 'Mindy Kaling',
      popularity: 7.173,
      profile_path: '/zd3sxyCKUTIWgvf8tcGo1Gur2By.jpg',
      credit_id: '525730b4760ee3776a345417',
      department: 'Production',
      job: 'Producer'
    },
    {
      adult: false,
      gender: 2,
      id: 1230847,
      known_for_department: 'Writing',
      name: 'Justin Spitzer',
      original_name: 'Justin Spitzer',
      popularity: 3.461,
      profile_path: '/7LiIHJLBv6Li1lmASD6mrigtKPo.jpg',
      credit_id: '525730af760ee3776a344ebf',
      department: 'Production',
      job: 'Producer'
    },
    {
      adult: false,
      gender: 0,
      id: 58274,
      known_for_department: 'Production',
      name: 'Howard Klein',
      original_name: 'Howard Klein',
      popularity: 2.086,
      profile_path: null,
      credit_id: '525730b1760ee3776a34521f',
      department: 'Production',
      job: 'Executive Producer'
    },
    {
      adult: false,
      gender: 2,
      id: 1230848,
      known_for_department: 'Writing',
      name: 'Halsted Sullivan',
      original_name: 'Halsted Sullivan',
      popularity: 0.6,
      profile_path: null,
      credit_id: '525730af760ee3776a344fdf',
      department: 'Production',
      job: 'Producer'
    },
    {
      adult: false,
      gender: 2,
      id: 1216630,
      known_for_department: 'Writing',
      name: 'Greg Daniels',
      original_name: 'Greg Daniels',
      popularity: 2.664,
      profile_path: '/2Hi7Tw0fyYFOZex8BuGsHS8Q4KD.jpg',
      credit_id: '525730b0760ee3776a3451d7',
      department: 'Production',
      job: 'Executive Producer'
    },
    {
      adult: false,
      gender: 2,
      id: 1221087,
      known_for_department: 'Writing',
      name: 'Dan Sterling',
      original_name: 'Dan Sterling',
      popularity: 0.6,
      profile_path: null,
      credit_id: '525730b4760ee3776a3454e9',
      department: 'Production',
      job: 'Producer'
    },
    {
      adult: false,
      gender: 2,
      id: 1213125,
      known_for_department: 'Writing',
      name: 'Paul Lieberstein',
      original_name: 'Paul Lieberstein',
      popularity: 12.05,
      profile_path: '/oLCaNVAw5cfE5q4e0PRsmHTuHfd.jpg',
      credit_id: '525730b0760ee3776a3450ff',
      department: 'Production',
      job: 'Executive Producer'
    },
    {
      adult: false,
      gender: 2,
      id: 1229493,
      known_for_department: 'Writing',
      name: 'Aaron Shure',
      original_name: 'Aaron Shure',
      popularity: 0.98,
      profile_path: null,
      credit_id: '525730b4760ee3776a34552f',
      department: 'Production',
      job: 'Producer'
    },
    {
      adult: false,
      gender: 2,
      id: 39189,
      known_for_department: 'Acting',
      name: 'Stephen Merchant',
      original_name: 'Stephen Merchant',
      popularity: 10.82,
      profile_path: '/6WM2rK6390Nwk398syJbGcPvRct.jpg',
      credit_id: '525730b0760ee3776a34518f',
      department: 'Production',
      job: 'Executive Producer'
    },
    {
      adult: false,
      gender: 2,
      id: 1035869,
      known_for_department: 'Production',
      name: 'Ben Silverman',
      original_name: 'Ben Silverman',
      popularity: 1.22,
      profile_path: '/mmlSuSF6wxv0FfaoOQwNCrC83YQ.jpg',
      credit_id: '525730b1760ee3776a345267',
      department: 'Production',
      job: 'Executive Producer'
    },
    {
      adult: false,
      gender: 0,
      id: 1230859,
      known_for_department: 'Production',
      name: 'Teri Weinberg',
      original_name: 'Teri Weinberg',
      popularity: 0.6,
      profile_path: null,
      credit_id: '525730b4760ee3776a3453cf',
      department: 'Production',
      job: 'Producer'
    },
    {
      adult: false,
      gender: 2,
      id: 17835,
      known_for_department: 'Acting',
      name: 'Ricky Gervais',
      original_name: 'Ricky Gervais',
      popularity: 7.377,
      profile_path: '/2mAjcq9AQA9peQxNoeEW76DPIju.jpg',
      credit_id: '525730b0760ee3776a345147',
      department: 'Production',
      job: 'Executive Producer'
    },
    {
      adult: false,
      gender: 0,
      id: 1217228,
      known_for_department: 'Writing',
      name: 'Steve Hely',
      original_name: 'Steve Hely',
      popularity: 1.614,
      profile_path: null,
      credit_id: '525730af760ee3776a345027',
      department: 'Production',
      job: 'Producer'
    },
    {
      adult: false,
      gender: 2,
      id: 1230854,
      known_for_department: 'Writing',
      name: 'Peter Ocko',
      original_name: 'Peter Ocko',
      popularity: 2.898,
      profile_path: null,
      credit_id: '525730b4760ee3776a3455bb',
      department: 'Production',
      job: 'Producer'
    }
  ],
  id: 2316
}
