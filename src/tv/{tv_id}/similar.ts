export interface Result {
  adult: boolean
  backdrop_path: string | null
  genre_ids: number[]
  id: number
  name: string
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  first_air_date: string
  vote_average: number
  vote_count: number
}

export interface SimilarTvShows {
  page: number
  results: Result[]
  total_pages: number
  total_results: number
}

export const mockSimilarTvShows: SimilarTvShows = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: '/5tL8tlcQuSSszv4nX5fWb4CvN8I.jpg',
      genre_ids: [35, 10751],
      id: 14009,
      name: 'The Addams Family',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'The Addams Family',
      overview:
        'A satirical inversion of the ideal of the perfect American nuclear family, they are an eccentric wealthy family who delight in everything grotesque and macabre, and are never really aware that people find them bizarre or frightening. In fact, they themselves are often terrified by "normal" people.',
      popularity: 49.478,
      poster_path: '/aBZynbuxspjz01mxrWpP5ZyDIyq.jpg',
      first_air_date: '1964-09-18',
      vote_average: 8.059,
      vote_count: 230
    },
    {
      adult: false,
      backdrop_path: '/9i4VvpvpwrZVE6aAC2RHVggtwvs.jpg',
      genre_ids: [35],
      id: 15903,
      name: 'Best Selling Secrets',
      origin_country: ['HK'],
      original_language: 'cn',
      original_name: '同事三分親',
      overview:
        "Wong Ka-Nam disappeared to the United States, leaving behind her son and husband in Hong Kong. When her husband dies in an airplane accident looking for her, Wong Ka-Nam's son, Luk Chit is taken into the custody of her mother-in-law, Ng Hang. After eighteen long years, Wong Ka-Nam wishes to see her son again and returns to Hong Kong. However, she is met with adamant resistance from her mother-in-law, who views Ka-Nam as bad luck, blaming her for the death of her son. Highly protective of her grandson and fearing that Wong Ka-Nam will attempt to take him away, Ka Nam's mother-in-law does everything in her power to keep mother and son apart. However, Wong Ka-Nam is ironically assisted by her own son, who befriends her and secures her office job in his advertising agency.",
      popularity: 26.509,
      poster_path: '/hDhUREsTCsYzAxykh2CxpJVFzQf.jpg',
      first_air_date: '2007-03-12',
      vote_average: 0.0,
      vote_count: 0
    },
    {
      adult: false,
      backdrop_path: '/vWwSPYymDv7gZ1C1yzgNuEacbKy.jpg',
      genre_ids: [35, 10751, 10762],
      id: 21641,
      name: 'Good Luck Charlie',
      origin_country: ['US', 'GB'],
      original_language: 'en',
      original_name: 'Good Luck Charlie',
      overview:
        "Teens PJ and Teddy and tween brother Gabe are typical kids -- that is, until their mother has another baby. The arrival of their new sister completely upends the entire household. When their mother heads back to work after Charlie's birth, it's up to the kids and their dad to keep the home fires burning -- and to keep Charlie out of trouble as she learns to sit up, crawl, walk and run. Teddy, as the older sister, makes a personalized video diary for Charlie, in each episode adding a nugget of wisdom for her baby sibling.",
      popularity: 70.156,
      poster_path: '/5PgRxNk2do0UajyZ4YKkbOCnZx3.jpg',
      first_air_date: '2010-04-04',
      vote_average: 8.063,
      vote_count: 232
    },
    {
      adult: false,
      backdrop_path: '/nEfUrr5i6Kc5ll14C4SpAJRXnxG.jpg',
      genre_ids: [35],
      id: 21650,
      name: "I'm in the Band",
      origin_country: ['US'],
      original_language: 'en',
      original_name: "I'm in the Band",
      overview:
        "Tripp Campbell is the new lead guitarist for Iron Weasel, a band that once ruled the world of 80s pop metal. Can he push the washed-up rockers out of his parents' guest room and back in the limelight?",
      popularity: 47.005,
      poster_path: '/cHTj9R311yylFlszfpQ0tk7Gpkh.jpg',
      first_air_date: '2009-11-27',
      vote_average: 8.574,
      vote_count: 196
    },
    {
      adult: false,
      backdrop_path: '/2Fc9ap5qsYmOZkSZnwMk9kNoLVQ.jpg',
      genre_ids: [35],
      id: 18202,
      name: 'Cougar Town',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Cougar Town',
      overview:
        "Jules Cobb is a mom in her forties facing the often humorous challenges, pitfalls and rewards of life's next chapter. Along for the journey is her son, her ex-husband, her husband/neighbor and her friends who together make up her dysfunctional, but supportive and caring extended family... even if they have a funny way of showing it sometimes.",
      popularity: 36.24,
      poster_path: '/gxeuUO1AuFkSqNzccNgO5AAYrhT.jpg',
      first_air_date: '2009-09-23',
      vote_average: 6.252,
      vote_count: 141
    },
    {
      adult: false,
      backdrop_path: '/lrh8reksSZ5XC91Vpnfb2ZJs1bd.jpg',
      genre_ids: [35, 10751, 80, 10765, 9648],
      id: 13023,
      name: 'El Chapulín Colorado',
      origin_country: ['MX'],
      original_language: 'es',
      original_name: 'El Chapulín Colorado',
      overview: '',
      popularity: 34.229,
      poster_path: '/qF8NDpVBSTDhdLlEjVAhNhfqB8K.jpg',
      first_air_date: '1973-04-11',
      vote_average: 7.888,
      vote_count: 525
    },
    {
      adult: false,
      backdrop_path: '/OylSdzVezjwGLYM0w73mUPNHM4.jpg',
      genre_ids: [35],
      id: 18347,
      name: 'Community',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Community',
      overview:
        'Follow the lives of a group of students at what is possibly the world’s worst community college in the fictional locale of Greendale, Colorado.',
      popularity: 64.729,
      poster_path: '/3KUjDt8XY7w2Ku70UE0SECmv1zP.jpg',
      first_air_date: '2009-09-17',
      vote_average: 8.0,
      vote_count: 978
    },
    {
      adult: false,
      backdrop_path: '/1JGw9CIEmnSZ0ClZIKCwfphbR3S.jpg',
      genre_ids: [18, 35],
      id: 15844,
      name: 'A Kindred Spirit',
      origin_country: ['HK'],
      original_language: 'cn',
      original_name: '真情',
      overview:
        'A Kindred Spirit was a television drama series that was broadcast on TVB Jade in Hong Kong from 15 May 1995 to 13 November 1999. It is one of the longest running drama shows in Hong Kong television history. Its exceptional longevity still amazes people in a city where scripted TV drama programs typically only last around 20 episodes. The total number of episodes is 1,128. Each episode airs a few days in each week.\n\nThe show centres on a family who operates a barbecue pork restaurant in Happy Valley, Hong Kong, and their life.',
      popularity: 28.865,
      poster_path: '/fpOAhBePSowxPsRUUT0ov9tMXwc.jpg',
      first_air_date: '1995-05-15',
      vote_average: 0.0,
      vote_count: 0
    },
    {
      adult: false,
      backdrop_path: '/vZ9wnD0A4RnplxKR8jI2JkkIWFS.jpg',
      genre_ids: [35],
      id: 16183,
      name: 'A Grande Família',
      origin_country: ['BR'],
      original_language: 'pt',
      original_name: 'A Grande Família',
      overview:
        "A Grande Família is a Brazilian television comedy, and is one of the most watched primetime shows. The show airs on the Globo Network, and tells the story of a typical lower middle-class family living in a suburb neighborhood of Rio de Janeiro.\n\nThe family consists of a working father, Lineu, a housewife and mother, Nenê, their son Tuco, their daughter Bebel, and Bebel's fiancée, Agostinho, a taxi driver portrayed as the typical carioca malandro. The family's grandfather, Floriano, was written out of the story after the death of actor Rogério Cardoso.\n\nSince its debut on March 29, 2001, the show has broadcast 442 episodes and the thirteenth season starts on April 4, 2013. A Grande Família is the longest-running Brazilian sitcom.\n\nA movie based on the series premiered on January 10, 2007.",
      popularity: 45.175,
      poster_path: '/yodQvpSyugeYoPyu8MQdFvCYKEi.jpg',
      first_air_date: '2001-03-29',
      vote_average: 8.2,
      vote_count: 18
    },
    {
      adult: false,
      backdrop_path: '/lLDt5RxU4zx9WOHP36v5asV3cgj.jpg',
      genre_ids: [10765, 18],
      id: 21494,
      name: 'V',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'V',
      overview:
        "A re-imagining of the 1980s miniseries about the world's first encounter with an alien race in which the aliens call themselves The Visitors, and have a seemingly friendly agenda that may or may not be a cover for something more malevolent.",
      popularity: 23.394,
      poster_path: '/b2w3vq0uvfmahS6dB41WeWByhVy.jpg',
      first_air_date: '2009-11-03',
      vote_average: 6.857,
      vote_count: 506
    },
    {
      adult: false,
      backdrop_path: '/qFHUsJONw8gqSasImfYUrJdsuXh.jpg',
      genre_ids: [35],
      id: 712,
      name: 'Designing Women',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Designing Women',
      overview:
        "Julia Sugarbaker, Mary Jo Shively, Charlene Frazier-Stillfield and Suzanne Sugarbaker are associates at their design firm, Sugarbaker and Associates. Julia is the owner and is very outspoken and strong-willed. Mary Jo is a divorced single-parent whom is just as strong-willed as Julia, but isn't as self-confident. Charlene is the naive and trusting farm girl from Poplar Bluff, Missouri. Suzanne is the self-centered ex-beauty queen whom has a number of wealthy ex-husbands.",
      popularity: 15.888,
      poster_path: '/pqhes4TGTDj9zMg9agrADKo8RnL.jpg',
      first_air_date: '1986-09-29',
      vote_average: 6.9,
      vote_count: 18
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [35],
      id: 494,
      name: 'Alice',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Alice',
      overview:
        "Alice is an American sitcom television series that ran from August 31, 1976 to March 19, 1985 on CBS. The series is based on the 1974 film Alice Doesn't Live Here Anymore. The show stars Linda Lavin in the title role, a widow who moves with her young son to start her life over again, and finds a job working at a roadside diner on the outskirts of Phoenix, Arizona. Most of the episodes revolve around events at Mel's Diner.",
      popularity: 24.605,
      poster_path: '/iEEtQs1mPz3kvvaEFR7HVnME9Or.jpg',
      first_air_date: '1976-08-31',
      vote_average: 6.545,
      vote_count: 33
    },
    {
      adult: false,
      backdrop_path: '/m4G421LlrPxqdtq980PLM91u38Y.jpg',
      genre_ids: [35],
      id: 496,
      name: 'Family Ties',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Family Ties',
      overview:
        'Former 1960s flower children Steven and Elyse Keaton raise their conservative son Alex, daughters Mallory and Jennifer, and later, youngest child Andrew.',
      popularity: 26.758,
      poster_path: '/3JVBzBToscU4uCyA67piI1RNarz.jpg',
      first_air_date: '1982-09-22',
      vote_average: 7.461,
      vote_count: 142
    },
    {
      adult: false,
      backdrop_path: '/2gSnqOroF5mC9vxsGCdURiXcZa5.jpg',
      genre_ids: [35],
      id: 249,
      name: 'Clarissa Explains It All',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Clarissa Explains It All',
      overview:
        'Clarissa Darling is a teen girl dealing with typical pre-adolescent concerns such as school, boys, pimples, wearing her first training bra and an annoying little brother Ferguson.',
      popularity: 26.505,
      poster_path: '/6UMqSC3kavPiE8ERnVtBxP5nVpH.jpg',
      first_air_date: '1991-03-01',
      vote_average: 7.947,
      vote_count: 113
    },
    {
      adult: false,
      backdrop_path: '/wnwraKTDgfci0xd8LdYuL7YAfQb.jpg',
      genre_ids: [35, 10751],
      id: 252,
      name: 'Everybody Hates Chris',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Everybody Hates Chris',
      overview:
        'Chris is a teenager growing up as the eldest of three children in Brooklyn, New York during the early 1980s. Uprooted to a new neighborhood and bused to a predominantly white middle school two-hours away by his strict, hard-working parents, Chris struggles to find his place while keeping his siblings in line at home and surmounting the challenges of junior high.',
      popularity: 32.801,
      poster_path: '/3FjakKDEuaO8FpR1qJctV6njqYy.jpg',
      first_air_date: '2005-09-22',
      vote_average: 8.0,
      vote_count: 641
    },
    {
      adult: false,
      backdrop_path: '/tkodQCqciOHpCn1WunoQMNSCNXv.jpg',
      genre_ids: [35],
      id: 271,
      name: 'Ellen',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Ellen',
      overview:
        'Ellen is an American television sitcom that aired on the ABC network from March 29, 1994 to July 22, 1998, consisting of 109 episodes. The title role of Ellen Morgan, played by stand-up comedian Ellen DeGeneres, was a neurotic bookstore owner in her thirties.\n\nThe series centered on Ellen\'s dealing with her quirky friends, her family and the problems of daily life. The series is notable for being the first one in which the main character came out as gay, which DeGeneres\' character did in the 1997 episode "Puppy Episode". This event received a great deal of media exposure, ignited controversy, and prompted ABC to place a parental advisory at the beginning of each episode.\n\nThe series\' theme song, "So Called Friend" is by Scottish band Texas. A running gag was that each episode had a distinct opening credits sequence, resulting from Ellen\'s ongoing search for the perfect opening credits.',
      popularity: 15.42,
      poster_path: '/f9yc6wZLRQ3GSaN3IP7ailn8J4r.jpg',
      first_air_date: '1994-03-29',
      vote_average: 6.482,
      vote_count: 28
    },
    {
      adult: false,
      backdrop_path: '/lPbcbMcchKBs96vH3gjFtlPjdAv.jpg',
      genre_ids: [35],
      id: 105,
      name: 'Sex and the City',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Sex and the City',
      overview:
        'Based on the bestselling book by Candace Bushnell, Sex and the City tells the story of four best friends, all single and in their late thirties, as they pursue their careers and talk about their sex lives, all while trying to survive the New York social scene. ',
      popularity: 120.473,
      poster_path: '/yd5tIz125kF25H4Okld3uqyQgvA.jpg',
      first_air_date: '1998-06-06',
      vote_average: 7.462,
      vote_count: 1630
    },
    {
      adult: false,
      backdrop_path: '/c5Zs7urvTZAJmUkz8AEtYl5Qzry.jpg',
      genre_ids: [35],
      id: 106,
      name: 'The Andy Griffith Show',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'The Andy Griffith Show',
      overview:
        'The Andy Griffith Show is an American sitcom first televised on CBS between October 3, 1960 and April 1, 1968. Andy Griffith portrays the widowed sheriff of the fictional small community of Mayberry, North Carolina. His life is complicated by an inept, but well-meaning deputy, Barney Fife, a spinster aunt and housekeeper, Aunt Bee, and a precocious young son, Opie. Local ne\'er-do-wells, bumbling pals, and temperamental girlfriends further complicate his life. Andy Griffith stated in a Today Show interview, with respect to the time period of the show: "Well, though we never said it, and though it was shot in the \'60s, it had a feeling of the \'30s. It was when we were doing it, of a time gone by."\n\nThe series never placed lower than seventh in the Nielsen ratings and ended its final season at number one. It has been ranked by TV Guide as the 9th-best show in American television history. Though neither Griffith nor the show won awards during its eight-season run, series co-stars Knotts and Bavier accumulated a combined total of six Emmy Awards. The show, a semi-spin-off from an episode of The Danny Thomas Show titled "Danny Meets Andy Griffith", spawned its own spin-off series, Gomer Pyle, U.S.M.C., a sequel series, Mayberry R.F.D., and a reunion telemovie, Return to Mayberry. The show\'s enduring popularity has generated a good deal of show-related merchandise. Reruns currently air on TV Land, and the complete series is available on DVD. All eight seasons are also now available by streaming video services such as Netflix.',
      popularity: 44.698,
      poster_path: '/rGd7qBylf9NVdrXGVItt3hvmP8O.jpg',
      first_air_date: '1960-10-03',
      vote_average: 7.8,
      vote_count: 96
    },
    {
      adult: false,
      backdrop_path: '/aSw6sSj5BXXm2LxjbzYBOChXZ5.jpg',
      genre_ids: [35],
      id: 119,
      name: 'Cory in the House',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Cory in the House',
      overview:
        "It's a brand new life for Cory Baxter when his dad, Victor, becomes the personal chef to the President of the United States. Cory's entrepreneurial scheming reaches new heights as he mingles amongst high-powered Washington D.C. elite.",
      popularity: 15.13,
      poster_path: '/kf7aiSIFDP1tkxsqckgWxIyuumw.jpg',
      first_air_date: '2007-01-12',
      vote_average: 7.325,
      vote_count: 57
    },
    {
      adult: false,
      backdrop_path: '/ic6IPDg0YZ4rCXvzuBUMVnv4Qkk.jpg',
      genre_ids: [35],
      id: 141,
      name: 'Cheers',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Cheers',
      overview:
        'The story about a blue-collar Boston bar run by former sports star Sam Malone and the quirky and wonderful people who worked and drank there.',
      popularity: 58.756,
      poster_path: '/nD1ZQBKbgKSmKcrAkWTofohsScj.jpg',
      first_air_date: '1982-09-30',
      vote_average: 7.601,
      vote_count: 381
    }
  ],
  total_pages: 500,
  total_results: 10000
}
