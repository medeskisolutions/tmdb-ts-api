export interface Result {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  media_type: string
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

export interface TvShowRecommendations {
  page: number
  results: Result[]
  total_pages: number
  total_results: number
}

export const mockTvShowRecommendations: TvShowRecommendations = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: '/dVISMO3TdX9HfcnA4gt3PSqcfjL.jpg',
      genre_ids: [35],
      id: 8592,
      media_type: 'tv',
      name: 'Parks and Recreation',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Parks and Recreation',
      overview:
        'Hilarious ensemble comedy that follows Leslie Knope, a mid-level bureaucrat in the Parks and Recreation Department of Pawnee, Indiana, and her tireless efforts to make her quintessentially American town just a little bit more fun.',
      popularity: 88.259,
      poster_path: '/dFs6yHxheEGoZSoA0Fdkgy6Jxh0.jpg',
      first_air_date: '2009-04-09',
      vote_average: 8.033,
      vote_count: 871
    },
    {
      adult: false,
      backdrop_path: '/ArZwmJl1y6qlnLjuE9FXlEd8RU0.jpg',
      genre_ids: [35],
      id: 4589,
      media_type: 'tv',
      name: 'Arrested Development',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Arrested Development',
      overview:
        'The story of a wealthy family that lost everything, and the one son who had no choice but to keep them all together.',
      popularity: 34.883,
      poster_path: '/qMzwO952hMWQSCfHkp7IL20s4K7.jpg',
      first_air_date: '2003-11-02',
      vote_average: 8.056,
      vote_count: 874
    },
    {
      adult: false,
      backdrop_path: '/OylSdzVezjwGLYM0w73mUPNHM4.jpg',
      genre_ids: [35],
      id: 18347,
      media_type: 'tv',
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
      backdrop_path: '/ZYmHf5hSAIaeEENXh0FGAbLSCQ.jpg',
      genre_ids: [35],
      id: 2996,
      media_type: 'tv',
      name: 'The Office',
      origin_country: ['GB'],
      original_language: 'en',
      original_name: 'The Office',
      overview:
        'Documentary-style sitcom set in the offices of a Slough paper merchant.',
      popularity: 19.568,
      poster_path: '/orzJbkbocfSz9D1SY9H8Rhh8a27.jpg',
      first_air_date: '2001-07-09',
      vote_average: 7.912,
      vote_count: 501
    },
    {
      adult: false,
      backdrop_path: '/tMRdEsMg9MyXAkcufK9YJEeIaNW.jpg',
      genre_ids: [35],
      id: 1400,
      media_type: 'tv',
      name: 'Seinfeld',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Seinfeld',
      overview:
        "A stand-up comedian and his three offbeat friends weather the pitfalls and payoffs of life in New York City in the '90s. It's a show about nothing.",
      popularity: 211.093,
      poster_path: '/aCw8ONfyz3AhngVQa1E2Ss4KSUQ.jpg',
      first_air_date: '1989-07-05',
      vote_average: 8.315,
      vote_count: 1249
    },
    {
      adult: false,
      backdrop_path: '/4AUqGJeJFA8SxrxySHoQKtADJIX.jpg',
      genre_ids: [35],
      id: 2710,
      media_type: 'tv',
      name: "It's Always Sunny in Philadelphia",
      origin_country: ['US'],
      original_language: 'en',
      original_name: "It's Always Sunny in Philadelphia",
      overview:
        'Four egocentric friends run a neighborhood Irish pub in Philadelphia and try to find their way through the adult world of work and relationships. Unfortunately, their warped views and precarious judgments often lead them to trouble, creating a myriad of uncomfortable situations that usually only get worse before they get better.',
      popularity: 83.378,
      poster_path: '/wcx6UpgShkHEACLzxZGGvR2GBNB.jpg',
      first_air_date: '2005-08-04',
      vote_average: 8.305,
      vote_count: 676
    },
    {
      adult: false,
      backdrop_path: '/l0qVZIpXtIo7km9u5Yqh0nKPOr5.jpg',
      genre_ids: [35, 18],
      id: 1668,
      media_type: 'tv',
      name: 'Friends',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Friends',
      overview:
        'Friends is an American television sitcom created by David Crane and Marta Kauffman, which aired on NBC from September 22, 1994, to May 6, 2004, lasting ten seasons. With an ensemble cast starring Jennifer Aniston, Courteney Cox, Lisa Kudrow, Matt LeBlanc, Matthew Perry and David Schwimmer, the show revolves around six friends in their 20s and 30s who live in Manhattan, New York City. The series was produced by Bright/Kauffman/Crane Productions, in association with Warner Bros. Television. The original executive producers were Kevin S. Bright, Kauffman, and Crane.',
      popularity: 326.027,
      poster_path: '/f496cm9enuEsZkSPzCwnTESEK5s.jpg',
      first_air_date: '1994-09-22',
      vote_average: 8.441,
      vote_count: 5369
    },
    {
      adult: false,
      backdrop_path: '/9AeiA1XtP5sel2tAf9LaGeUjhDb.jpg',
      genre_ids: [35, 80],
      id: 48891,
      media_type: 'tv',
      name: 'Brooklyn Nine-Nine',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Brooklyn Nine-Nine',
      overview:
        'A single-camera ensemble comedy following the lives of an eclectic group of detectives in a New York precinct, including one slacker who is forced to shape up when he gets a new boss.',
      popularity: 148.285,
      poster_path: '/hgRMSOt7a1b8qyQR68vUixJPang.jpg',
      first_air_date: '2013-09-17',
      vote_average: 8.2,
      vote_count: 1994
    },
    {
      adult: false,
      backdrop_path: '/cK5AbLFBY2JDoqEdVXk0697e2SV.jpg',
      genre_ids: [35],
      id: 4608,
      media_type: 'tv',
      name: '30 Rock',
      origin_country: ['US'],
      original_language: 'en',
      original_name: '30 Rock',
      overview:
        'Liz Lemon, the head writer for a late-night TV variety show in New York, tries to juggle all the egos around her while chasing her own dream.',
      popularity: 51.837,
      poster_path: '/k3RbNzPEPW0cmkfkn1xVCTk3Qde.jpg',
      first_air_date: '2006-10-11',
      vote_average: 7.379,
      vote_count: 466
    },
    {
      adult: false,
      backdrop_path: '/x4lxFIhhrDI4nWtV8osnYwbGESV.jpg',
      genre_ids: [35],
      id: 1421,
      media_type: 'tv',
      name: 'Modern Family',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Modern Family',
      overview:
        'The Pritchett-Dunphy-Tucker clan is a wonderfully large and blended family. They give us an honest and often hilarious look into the sometimes warm, sometimes twisted, embrace of the modern family.',
      popularity: 223.596,
      poster_path: '/fu5vEUHgxkAPmX26ISQXqHmlPMq.jpg',
      first_air_date: '2009-09-23',
      vote_average: 7.672,
      vote_count: 1626
    },
    {
      adult: false,
      backdrop_path: '/5BMwFwNzSidVYArn561acqtktxv.jpg',
      genre_ids: [35],
      id: 1100,
      media_type: 'tv',
      name: 'How I Met Your Mother',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'How I Met Your Mother',
      overview:
        'A father recounts to his children - through a series of flashbacks - the journey he and his four best friends took leading up to him meeting their mother.',
      popularity: 214.993,
      poster_path: '/dvxSvr6OmYGvvt8Z1VdBlPfL1Lf.jpg',
      first_air_date: '2005-09-19',
      vote_average: 8.156,
      vote_count: 3172
    },
    {
      adult: false,
      backdrop_path: '/NXuSRMhNElaGFKSHx4rviTBFkX.jpg',
      genre_ids: [35],
      id: 4556,
      media_type: 'tv',
      name: 'Scrubs',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Scrubs',
      overview:
        'In the unreal world of Sacred Heart Hospital, John "J.D." Dorian learns the ways of medicine, friendship and life.',
      popularity: 84.883,
      poster_path: '/u1z05trCA7AuSuDhi365grwdos1.jpg',
      first_air_date: '2001-10-02',
      vote_average: 7.968,
      vote_count: 1105
    },
    {
      adult: false,
      backdrop_path: '/41neXsH222hV2zrsTyw8h7javon.jpg',
      genre_ids: [16, 35],
      id: 2190,
      media_type: 'tv',
      name: 'South Park',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'South Park',
      overview:
        'Follows the misadventures of four irreverent grade-schoolers in the quiet, dysfunctional town of South Park, Colorado.',
      popularity: 408.895,
      poster_path: '/iiCY2QIGSnmtVkIdjkKAfwDs0KF.jpg',
      first_air_date: '1997-08-13',
      vote_average: 8.306,
      vote_count: 2781
    },
    {
      adult: false,
      backdrop_path: '/x3i8okUNTx0s7A7DlXAZjlxHFP5.jpg',
      genre_ids: [80, 18, 9648],
      id: 1405,
      media_type: 'tv',
      name: 'Dexter',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Dexter',
      overview:
        'Dexter Morgan, a blood spatter pattern analyst for the Miami Metro Police also leads a secret life as a serial killer, hunting down criminals who have slipped through the cracks of justice.',
      popularity: 211.074,
      poster_path: '/58H6Ctze1nnpS0s9vPmAAzPcipR.jpg',
      first_air_date: '2006-10-01',
      vote_average: 8.201,
      vote_count: 2781
    },
    {
      adult: false,
      backdrop_path: '/3zRUiH8erHIgNUBTj05JT00HwsS.jpg',
      genre_ids: [35, 10751, 18],
      id: 52,
      media_type: 'tv',
      name: "That '70s Show",
      origin_country: ['US'],
      original_language: 'en',
      original_name: "That '70s Show",
      overview:
        'Crank up the 8-track and flash back to a time when platform shoes and puka shells were all the rage in this hilarious retro-sitcom. For Eric, Kelso, Jackie, Hyde, Donna and Fez, a group of high school teens who spend most of their time hanging out in Eric’s basement, life in the ‘70s isn’t always so groovy. But between trying to figure out the meaning of life, avoiding their parents, and dealing with out-of-control hormones, they’ve learned one thing for sure: they’ll always get by with a little help from their friends.',
      popularity: 78.63,
      poster_path: '/1rzL6DVmCSZ3jzLFon8mhYcRsUK.jpg',
      first_air_date: '1998-08-23',
      vote_average: 7.964,
      vote_count: 908
    },
    {
      adult: false,
      backdrop_path: '/12NEw3eBUQxK9qdgtegZRsz4Yp8.jpg',
      genre_ids: [10759, 9648],
      id: 4607,
      media_type: 'tv',
      name: 'Lost',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Lost',
      overview:
        'Stripped of everything, the survivors of a horrific plane crash  must work together to stay alive. But the island holds many secrets.',
      popularity: 164.798,
      poster_path: '/og6S0aTZU6YUJAbqxeKjCa3kY1E.jpg',
      first_air_date: '2004-09-22',
      vote_average: 7.913,
      vote_count: 2619
    },
    {
      adult: false,
      backdrop_path: '/d3y4DfD0pAmgkXjpKdU6p6uIALi.jpg',
      genre_ids: [10767, 35, 10763],
      id: 60694,
      media_type: 'tv',
      name: 'Last Week Tonight with John Oliver',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Last Week Tonight with John Oliver',
      overview:
        'A half-hour satirical look at the week in news, politics and current events.',
      popularity: 40.934,
      poster_path: '/hT9ST8ZDZTi94QWfTuYL78Ud8w8.jpg',
      first_air_date: '2014-04-27',
      vote_average: 7.918,
      vote_count: 453
    },
    {
      adult: false,
      backdrop_path: '/kt7cId9GV8mbKKW8I9cpeVFh7Fn.jpg',
      genre_ids: [35, 10759, 16],
      id: 10283,
      media_type: 'tv',
      name: 'Archer',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Archer',
      overview:
        "Sterling Archer is the world's most daunting spy. He works for ISIS, a spy agency run by his mother. In between dealing with his boss and his co-workers - one of whom is his ex-girlfriend - Archer manages to annoy or seduce everyone that crosses his path. His antics are only excusable because at the end of the day, he still somehow always manages to thwart whatever crises was threatening mankind.",
      popularity: 89.708,
      poster_path: '/J4bhku9PPpV7z6d5u2wtdWAS0O.jpg',
      first_air_date: '2009-09-17',
      vote_average: 7.924,
      vote_count: 823
    },
    {
      adult: false,
      backdrop_path: '/zPof3eV5fCtvMYqMMftFHYNhHmr.jpg',
      genre_ids: [16, 10759, 35, 10765],
      id: 615,
      media_type: 'tv',
      name: 'Futurama',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Futurama',
      overview:
        'The adventures of a late-20th-century New York City pizza delivery boy, Philip J. Fry, who, after being unwittingly cryogenically frozen for one thousand years, finds employment at Planet Express, an interplanetary delivery company in the retro-futuristic 31st century.',
      popularity: 206.457,
      poster_path: '/4olv2DdNUdg7oE6zoevbZbgEPsB.jpg',
      first_air_date: '1999-03-28',
      vote_average: 8.375,
      vote_count: 2127
    },
    {
      adult: false,
      backdrop_path: '/o1SmFTCN6HA8dGcLqX6SyQFhiqV.jpg',
      genre_ids: [35, 18],
      id: 32962,
      media_type: 'tv',
      name: 'Louie',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Louie',
      overview:
        'Louis C.K. stars as a fictionalized version of himself; a comedian and newly divorced father raising his two daughters in New York City.',
      popularity: 22.386,
      poster_path: '/ubWj0BLRV1UDP8ELnTr2is2Wl0Y.jpg',
      first_air_date: '2010-06-29',
      vote_average: 7.686,
      vote_count: 341
    },
    {
      adult: false,
      backdrop_path: '/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg',
      genre_ids: [18],
      id: 1396,
      media_type: 'tv',
      name: 'Breaking Bad',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Breaking Bad',
      overview:
        "When Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family's financial future at any cost as he enters the dangerous world of drugs and crime.",
      popularity: 426.951,
      poster_path: '/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
      first_air_date: '2008-01-20',
      vote_average: 8.75,
      vote_count: 8142
    }
  ],
  total_pages: 2,
  total_results: 40
}
