export interface CreatedBy {
  id: number
  credit_id: string
  name: string
  gender: number
  profile_path: string
}

export interface Genre {
  id: number
  name: string
}

export interface LastEpisodeToAir {
  air_date: string
  episode_number: number
  id: number
  name: string
  overview: string
  production_code: string
  season_number: number
  still_path: string
  vote_average: number
  vote_count: number
}

export interface Network {
  name: string
  id: number
  logo_path: string
  origin_country: string
}

export interface ProductionCountry {
  iso_3166_1: string
  name: string
}

export interface Season {
  air_date: string
  episode_count: number
  id: number
  name: string
  overview: string
  poster_path: string
  season_number: number
}

export interface SpokenLanguage {
  english_name: string
  iso_639_1: string
  name: string
}

export interface TvShowDetails {
  adult: boolean
  backdrop_path: string
  created_by: CreatedBy[]
  episode_run_time: number[]
  first_air_date: string
  genres: Genre[]
  homepage: string
  id: number
  in_production: boolean
  languages: string[]
  last_air_date: string
  last_episode_to_air: LastEpisodeToAir
  name: string
  next_episode_to_air?: any
  networks: Network[]
  number_of_episodes: number
  number_of_seasons: number
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: any[]
  production_countries: ProductionCountry[]
  seasons: Season[]
  spoken_languages: SpokenLanguage[]
  status: string
  tagline: string
  type: string
  vote_average: number
  vote_count: number
}

export const mockTvShowDetails: TvShowDetails = {
  adult: false,
  backdrop_path: '/vNpuAxGTl9HsUbHqam3E9CzqCvX.jpg',
  created_by: [
    {
      id: 17835,
      credit_id: '525730af760ee3776a344e89',
      name: 'Ricky Gervais',
      gender: 2,
      profile_path: '/2mAjcq9AQA9peQxNoeEW76DPIju.jpg'
    },
    {
      id: 39189,
      credit_id: '525730af760ee3776a344e8f',
      name: 'Stephen Merchant',
      gender: 2,
      profile_path: '/6WM2rK6390Nwk398syJbGcPvRct.jpg'
    },
    {
      id: 1216630,
      credit_id: '525730af760ee3776a344e95',
      name: 'Greg Daniels',
      gender: 2,
      profile_path: '/2Hi7Tw0fyYFOZex8BuGsHS8Q4KD.jpg'
    }
  ],
  episode_run_time: [22],
  first_air_date: '2005-03-24',
  genres: [
    {
      id: 35,
      name: 'Comedy'
    }
  ],
  homepage: 'http://www.nbc.com/The_Office/',
  id: 2316,
  in_production: false,
  languages: ['en'],
  last_air_date: '2013-05-16',
  last_episode_to_air: {
    air_date: '2013-05-16',
    episode_number: 23,
    id: 170335,
    name: 'Finale',
    overview:
      "One year later, Dunder Mifflin employees past and present reunite for a panel discussion about the documentary and to attend Dwight and Angela's wedding.",
    production_code: '',
    season_number: 9,
    still_path: '/1pJtFmAS3TJuWoCaUrY904pqNFE.jpg',
    vote_average: 9.0,
    vote_count: 22
  },
  name: 'The Office',
  next_episode_to_air: null,
  networks: [
    {
      name: 'NBC',
      id: 6,
      logo_path: '/o3OedEP0f9mfZr33jz2BfXOUK5.png',
      origin_country: 'US'
    }
  ],
  number_of_episodes: 195,
  number_of_seasons: 9,
  origin_country: ['US'],
  original_language: 'en',
  original_name: 'The Office',
  overview:
    'The everyday lives of office employees in the Scranton, Pennsylvania branch of the fictional Dunder Mifflin Paper Company.',
  popularity: 183.947,
  poster_path: '/qWnJzyZhyy74gjpSjIXWmuk0ifX.jpg',
  production_companies: [],
  production_countries: [
    {
      iso_3166_1: 'US',
      name: 'United States of America'
    }
  ],
  seasons: [
    {
      air_date: '2006-07-13',
      episode_count: 89,
      id: 7246,
      name: 'Specials',
      overview: '',
      poster_path: '/lWu7cvMEiDvKaacpoTeYmoOf35T.jpg',
      season_number: 0
    },
    {
      air_date: '2005-03-24',
      episode_count: 6,
      id: 7240,
      name: 'Season 1',
      overview:
        "This season introduced the main characters, and established the general plot, which revolves around Michael Scott, regional manager of the Scranton branch office, trying to convince the filmmakers of the documentary that he presides over a happy, well-running office. Meanwhile, sales rep Jim Halpert finds methods to undermine his cube-mate, Dwight Schrute; receptionist Pam Beesly tries to deal with Michael's insensitivities and flubs; and temporary employee Ryan Howard is acting mostly as an observer of the insanity around him.",
      poster_path: '/9RPvjEGAB81upmU0z7tx7Y9vvUz.jpg',
      season_number: 1
    },
    {
      air_date: '2005-09-20',
      episode_count: 22,
      id: 7241,
      name: 'Season 2',
      overview:
        'Beginning with "The Dundies", the second season further developed into the plot of the fear of company downsizing, along with the introduction of new characters and developing some of the minor ones—especially that of Dwight Schrute. Michael Scott soon starts a relationship with his boss Jan Levenson and, Pam Beesley and Jim Halpert’s relationship become one of the focal points of the season. Their compatibility becomes more obvious as Jim’s feelings for Pam continue to grow, while she struggles with her relationship with the warehouse worker Roy Anderson.',
      poster_path: '/9CQjqZ6ZRS9PEsqkOXlRBC9wfdv.jpg',
      season_number: 2
    },
    {
      air_date: '2006-09-21',
      episode_count: 23,
      id: 7242,
      name: 'Season 3',
      overview:
        'The season marked the move of main character Jim Halpert from Scranton to Stamford, and also introduced Rashida Jones as Karen Filippelli, and Ed Helms as Andy Bernard—both members of Dunder Mifflin Stamford—as recurring characters. Helms would later be promoted to series regular. The main plot for the early episodes of the season deals with a recurring problem in seasons one and two—the problem of company downsizing—while in the last half of the season, inter-office relationships also became a major plot point.',
      poster_path: '/zGxblXDKUeo81yi0KNVVs4AvjxE.jpg',
      season_number: 3
    },
    {
      air_date: '2007-09-27',
      episode_count: 19,
      id: 7245,
      name: 'Season 4',
      overview:
        'Season four marked the departure of Karen Filippelli as a regular character, although she appeared for a few seconds in the first episode, "Fun Run" and in the sixth episode, "Branch Wars", as the regional manager of the Utica branch. Relationships again emerged as the main theme of the season, with Jim Halpert and Pam Beesley\'s rising, and Michael Scott and Jan Levinson\'s, as well as Dwight Schrute and Angela Martin\'s declining. Technology was another prevalent theme as the office staff struggled with initiatives introduced by Ryan Howard to modernize the company.',
      poster_path: '/e2QXQY8al5nY2niTiaFiBJ3hk5a.jpg',
      season_number: 4
    },
    {
      air_date: '2008-09-25',
      episode_count: 26,
      id: 7244,
      name: 'Season 5',
      overview:
        'The fifth season of the American television comedy The Office premiered in the United States in the 2008–2009 television season on NBC on September 25, 2008 and concluded on May 14, 2009. The fifth season consisted of 28 half-hours of material, divided into 24 half-hour episodes and two hour-long episodes. The Office is an American adaptation of the British TV series of the same name, and is presented in a mockumentary format, portraying the daily lives of office employees in the Scranton, Pennsylvania branch of the fictitious Dunder Mifflin Paper Company.',
      poster_path: '/c9CBqohqBfsEkXY72VCX635GCRc.jpg',
      season_number: 5
    },
    {
      air_date: '2009-09-17',
      episode_count: 26,
      id: 7243,
      name: 'Season 6',
      overview:
        'The sixth season of the American television comedy The Office premiered in the United States on NBC on September 17, 2009, and concluded on May 20, 2010. The season consisted of 22 half-hour episodes, and 2 hour-long episodes to comprise the 26 total episodes of material created.',
      poster_path: '/fUFhM2FGoeRefSZQUV5nbygtvCi.jpg',
      season_number: 6
    },
    {
      air_date: '2010-09-23',
      episode_count: 26,
      id: 7247,
      name: 'Season 7',
      overview:
        'The seventh season of the American television comedy The Office premiered on September 23, 2010 and concluded on May 19, 2011. The season consisted of 26 half-hours of material, divided into 22 half-hour episodes and two hour-long episodes. The seventh season aired on Thursdays at 9:00 p.m. as part of Comedy Night Done Right. This was the last season to feature Michael Scott, played by Steve Carell, as the lead character.',
      poster_path: '/jzs5ZfkP0ns1mw43TsNgMd6zPJ2.jpg',
      season_number: 7
    },
    {
      air_date: '2011-09-22',
      episode_count: 24,
      id: 7248,
      name: 'Season 8',
      overview:
        "The eighth season largely centers around Andy Bernard's ascension to regional manager, as well as the antics of Robert California, the new CEO of Sabre, a fictional printer company that owns Dunder Mifflin. Halfway through the season, Dwight Schrute —along with Jim Halpert, Stanley Hudson, Ryan Howard, Erin Hannon, and Cathy —travel to Florida to help set up a Sabre Store, where Nellie Bertram is introduced. Eventually, former CEO of Dunder Mifflin David Wallace buys back the company, firing California.",
      poster_path: '/frZs3UKrzPiRyjHyLgcDrTpbv8U.jpg',
      season_number: 8
    },
    {
      air_date: '2012-09-20',
      episode_count: 23,
      id: 7249,
      name: 'Season 9',
      overview:
        'The ninth season largely focuses on the relationship between Jim and Pam Halpert.',
      poster_path: '/wdjefTcCnRWSEDV9tZ9xSzGIbxu.jpg',
      season_number: 9
    }
  ],
  spoken_languages: [
    {
      english_name: 'English',
      iso_639_1: 'en',
      name: 'English'
    }
  ],
  status: 'Ended',
  tagline: '',
  type: 'Scripted',
  vote_average: 8.6,
  vote_count: 2162
}
