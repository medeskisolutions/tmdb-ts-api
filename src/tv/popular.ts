export interface Result {
  backdrop_path: string | null
  first_air_date: string
  genre_ids: number[]
  id: number
  name: string
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  vote_average: number
  vote_count: number
}

export interface PopularTvShows {
  page: number
  results: Result[]
  total_pages: number
  total_results: number
}

export const mockPopularTvShows: PopularTvShows = {
  page: 1,
  results: [
    {
      backdrop_path: '/oKt4J3TFjWirVwBqoHyIvv5IImd.jpg',
      first_air_date: '2019-06-16',
      genre_ids: [18],
      id: 85552,
      name: 'Euphoria',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Euphoria',
      overview:
        'A group of high school students navigate love and friendships in a world of drugs, sex, trauma, and social media.',
      popularity: 3319.83,
      poster_path: '/jtnfNzqZwN4E32FGGxx1YZaBWWf.jpg',
      vote_average: 8.4,
      vote_count: 5599
    },
    {
      backdrop_path: '/sjx6zjQI2dLGtEL0HGWsnq6UyLU.jpg',
      first_air_date: '2021-12-29',
      genre_ids: [10765, 10759, 16],
      id: 115036,
      name: 'The Book of Boba Fett',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'The Book of Boba Fett',
      overview:
        'Legendary bounty hunter Boba Fett and mercenary Fennec Shand must navigate the galaxy’s underworld when they return to the sands of Tatooine to stake their claim on the territory once ruled by Jabba the Hutt and his crime syndicate.',
      popularity: 2245.989,
      poster_path: '/gNbdjDi1HamTCrfvM9JeA94bNi2.jpg',
      vote_average: 8.1,
      vote_count: 447
    },
    {
      backdrop_path: '/yfXSvNfF43S0cxpxCEKaU17yZ64.jpg',
      first_air_date: '1983-09-19',
      genre_ids: [10751],
      id: 2778,
      name: 'Wheel of Fortune',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Wheel of Fortune',
      overview:
        'This game show sees contestants solve word puzzles, similar to those used in Hangman, to win cash and prizes determined by spinning a giant carnival wheel.',
      popularity: 1742.611,
      poster_path: '/2fvAIyVfFHQdhJ7OsJWuMlF7836.jpg',
      vote_average: 6.8,
      vote_count: 41
    },
    {
      backdrop_path: '/35SS0nlBhu28cSe7TiO3ZiywZhl.jpg',
      first_air_date: '2018-05-02',
      genre_ids: [10759, 18],
      id: 77169,
      name: 'Cobra Kai',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Cobra Kai',
      overview:
        'This Karate Kid sequel series picks up 30 years after the events of the 1984 All Valley Karate Tournament and finds Johnny Lawrence on the hunt for redemption by reopening the infamous Cobra Kai karate dojo. This reignites his old rivalry with the successful Daniel LaRusso, who has been working to maintain the balance in his life without mentor Mr. Miyagi.',
      popularity: 1705.507,
      poster_path: '/6POBWybSBDBKjSs1VAQcnQC1qyt.jpg',
      vote_average: 8.1,
      vote_count: 4123
    },
    {
      backdrop_path: '/ctxm191q5o3axFzQsvNPlbKoSYv.jpg',
      first_air_date: '2022-01-13',
      genre_ids: [10759, 35, 10765],
      id: 110492,
      name: 'Peacemaker',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Peacemaker',
      overview:
        'The continuing story of Peacemaker – a compellingly vainglorious man who believes in peace at any cost, no matter how many people he has to kill to get it – in the aftermath of the events of “The Suicide Squad.”',
      popularity: 1616.273,
      poster_path: '/hE3LRZAY84fG19a18pzpkZERjTE.jpg',
      vote_average: 8.7,
      vote_count: 130
    },
    {
      backdrop_path: '/vjcuLy14kxgxCaBToAudZWrGQQh.jpg',
      first_air_date: '2021-01-18',
      genre_ids: [],
      id: 117031,
      name: 'People Puzzler',
      origin_country: [],
      original_language: 'en',
      original_name: 'People Puzzler',
      overview:
        'Three lucky contestants put their pop culture knowledge to the test to complete iconic, People Puzzler crosswords. The player with the most points at the end of three rounds wins the game and goes on to play the "Fast Puzzle Round" for an enormous cash prize.',
      popularity: 1457.789,
      poster_path: '/gELQSCY5KKIGQAmOHbcgcRGNlp5.jpg',
      vote_average: 5.5,
      vote_count: 11
    },
    {
      backdrop_path: '/qCvtJIFowYDzEKk69r2cogNeXp7.jpg',
      first_air_date: '2021-01-04',
      genre_ids: [10764],
      id: 114885,
      name: 'Big Brother',
      origin_country: ['NL'],
      original_language: 'nl',
      original_name: 'Big Brother',
      overview: '',
      popularity: 1421.165,
      poster_path: '/zmXxCP0op3PoCSiqXkSKDySbxe8.jpg',
      vote_average: 0,
      vote_count: 0
    },
    {
      backdrop_path: '/l6zdjUDOaklBWfxqa7AtbLr2EnA.jpg',
      first_air_date: '2021-12-13',
      genre_ids: [10751, 35, 18],
      id: 135753,
      name: 'Love Twist',
      origin_country: ['KR'],
      original_language: 'ko',
      original_name: '사랑의 꽈배기',
      overview:
        'A drama depicting a sweet twist in love between the parents and children of three families around the love of two main characters.',
      popularity: 1354.858,
      poster_path: '/5bTF522eYn6g6r7aYqFpTZzmQq6.jpg',
      vote_average: 2,
      vote_count: 1
    },
    {
      backdrop_path: '/z18KvDvFftrNyAMPOVFHkt8Bj8E.jpg',
      first_air_date: '2002-09-08',
      genre_ids: [10764, 10767],
      id: 153748,
      name: 'Big Brother Famosos',
      origin_country: ['PT'],
      original_language: 'pt',
      original_name: 'Big Brother Famosos',
      overview:
        'Big Brother Famosos is the celebrity version of Big Brother Portugal.',
      popularity: 1297.233,
      poster_path: '/ynFd1Xmr2r05qPqalNZnh2uxuJ0.jpg',
      vote_average: 2,
      vote_count: 1
    },
    {
      backdrop_path: '/wiE9doxiLwq3WCGamDIOb2PqBqc.jpg',
      first_air_date: '2013-09-12',
      genre_ids: [18, 80],
      id: 60574,
      name: 'Peaky Blinders',
      origin_country: ['GB'],
      original_language: 'en',
      original_name: 'Peaky Blinders',
      overview:
        'A gangster family epic set in 1919 Birmingham, England and centered on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby, who means to move up in the world.',
      popularity: 1193.35,
      poster_path: '/pE8CScObQURsFZ723PSW1K9EGYp.jpg',
      vote_average: 8.6,
      vote_count: 4917
    },
    {
      backdrop_path: '/ykbaElzavtSbsYG5KbG3pEpREtK.jpg',
      first_air_date: '2021-01-11',
      genre_ids: [10764],
      id: 116416,
      name: 'Big Brother 7/7',
      origin_country: ['CA'],
      original_language: 'fr',
      original_name: 'Big Brother 7/7',
      overview: '',
      popularity: 1187.754,
      poster_path: '/iUYrQyv0p4UncFolsROm81VNbcB.jpg',
      vote_average: 0,
      vote_count: 0
    },
    {
      backdrop_path: '/ktDJ21QQscbMNQfPpZBsNORxdDx.jpg',
      first_air_date: '2016-01-25',
      genre_ids: [80, 10765],
      id: 63174,
      name: 'Lucifer',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Lucifer',
      overview:
        "Bored and unhappy as the Lord of Hell, Lucifer Morningstar abandoned his throne and retired to Los Angeles, where he has teamed up with LAPD detective Chloe Decker to take down criminals. But the longer he's away from the underworld, the greater the threat that the worst of humanity could escape.",
      popularity: 1093.893,
      poster_path: '/ekZobS8isE6mA53RAiGDG93hBxL.jpg',
      vote_average: 8.5,
      vote_count: 11335
    },
    {
      backdrop_path: '/gIApbx2ffXVhJb2D4tiEx2b06nl.jpg',
      first_air_date: '2005-03-27',
      genre_ids: [18],
      id: 1416,
      name: "Grey's Anatomy",
      origin_country: ['US'],
      original_language: 'en',
      original_name: "Grey's Anatomy",
      overview:
        'Follows the personal and professional lives of a group of doctors at Seattle’s Grey Sloan Memorial Hospital.',
      popularity: 1049.901,
      poster_path: '/zPIug5giU8oug6Xes5K1sTfQJxY.jpg',
      vote_average: 8.2,
      vote_count: 7455
    },
    {
      backdrop_path: '/41yaWnIT8AjIHiULHtTbKNzZTjc.jpg',
      first_air_date: '2014-10-07',
      genre_ids: [18, 10765],
      id: 60735,
      name: 'The Flash',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'The Flash',
      overview:
        'After a particle accelerator causes a freak storm, CSI Investigator Barry Allen is struck by lightning and falls into a coma. Months later he awakens with the power of super speed, granting him the ability to move through Central City like an unseen guardian angel. Though initially excited by his newfound powers, Barry is shocked to discover he is not the only "meta-human" who was created in the wake of the accelerator explosion -- and not everyone is using their new powers for good. Barry partners with S.T.A.R. Labs and dedicates his life to protect the innocent. For now, only a few close friends and associates know that Barry is literally the fastest man alive, but it won\'t be long before the world learns what Barry Allen has become...The Flash.',
      popularity: 1007.848,
      poster_path: '/lJA2RCMfsWoskqlQhXPSLFQGXEJ.jpg',
      vote_average: 7.8,
      vote_count: 9126
    },
    {
      backdrop_path: '/r8CGqB8IJNbA1IruHWquS7YttNB.jpg',
      first_air_date: '1995-10-23',
      genre_ids: [10766],
      id: 966,
      name: 'Hollyoaks',
      origin_country: ['GB'],
      original_language: 'en',
      original_name: 'Hollyoaks',
      overview:
        'The daily soap that follows the loves, lives and misdemeanours of a group of people living in the Chester village of Hollyoaks where anything could, and frequently does, happen...',
      popularity: 975.045,
      poster_path: '/bpmLMZP3M1vLujPqHnOTnKVjRJY.jpg',
      vote_average: 5.2,
      vote_count: 36
    },
    {
      backdrop_path: '/1P3QtW1IkivqDrKbbwuR0zCYIf8.jpg',
      first_air_date: '2021-11-18',
      genre_ids: [10765, 18],
      id: 71914,
      name: 'The Wheel of Time',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'The Wheel of Time',
      overview:
        'Follow Moiraine, a member of the shadowy and influential all-female organization called the “Aes Sedai” as she embarks on a dangerous, world-spanning journey with five young men and women. Moiraine believes one of them might be the reincarnation of an incredibly powerful individual, whom prophecies say will either save humanity or destroy it.',
      popularity: 940.065,
      poster_path: '/mpgDeLhl8HbhI03XLB7iKO6M6JE.jpg',
      vote_average: 7.9,
      vote_count: 1052
    },
    {
      backdrop_path: '/eD2U2RwxQosUDwvu19n46KvJEf9.jpg',
      first_air_date: '2021-09-13',
      genre_ids: [18, 35],
      id: 124549,
      name: 'Marry Me, Marry You',
      origin_country: ['PH'],
      original_language: 'tl',
      original_name: 'Marry Me, Marry You',
      overview:
        'A couple navigates the traditional expectations attached to marriage — that it extends beyond one’s partner, and includes their friends and family, too.',
      popularity: 934.815,
      poster_path: '/7qZUC0AQmSi7pxNP6cH3swkb8Is.jpg',
      vote_average: 3.5,
      vote_count: 6
    },
    {
      backdrop_path: null,
      first_air_date: '2021-11-15',
      genre_ids: [18],
      id: 122551,
      name: 'Viral Scandal',
      origin_country: ['PH'],
      original_language: 'tl',
      original_name: 'Viral Scandal',
      overview:
        'The lives of a simple family becomes disrupted when a scandalous video involving their eldest daughter goes viral.',
      popularity: 933.451,
      poster_path: '/zPsJG3DRDeZZCoja9nnU6p4d67V.jpg',
      vote_average: 2,
      vote_count: 1
    },
    {
      backdrop_path: '/t9gfV0eM9nWqJ4vMey4CSYFiqmZ.jpg',
      first_air_date: '2021-11-14',
      genre_ids: [18, 9648],
      id: 117488,
      name: 'Yellowjackets',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Yellowjackets',
      overview:
        'This equal parts survival epic, psychological horror story and coming-of-age drama tells the saga of a team of wildly talented high school girls soccer players who become the (un)lucky survivors of a plane crash deep in the remote northern wilderness. The series chronicles their descent from a complicated but thriving team to savage clans, while also tracking the lives they’ve attempted to piece back together nearly 25 years later.',
      popularity: 914.781,
      poster_path: '/XtnjzjjFAnmTEiDk4xu7diCvMF.jpg',
      vote_average: 7.3,
      vote_count: 92
    },
    {
      backdrop_path: '/8lBlBItnehgOAwFt0ezxlXuWeIO.jpg',
      first_air_date: '2021-11-08',
      genre_ids: [10766, 18],
      id: 132375,
      name: 'Um Lugar ao Sol',
      origin_country: ['BR'],
      original_language: 'pt',
      original_name: 'Um Lugar ao Sol',
      overview: '',
      popularity: 900.031,
      poster_path: '/63qlVcvlVzOvMaFO8tFA2VG64Yc.jpg',
      vote_average: 5,
      vote_count: 5
    }
  ],
  total_pages: 6167,
  total_results: 123338
}
