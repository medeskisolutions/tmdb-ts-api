export interface Dates {
  maximum: string
  minimum: string
}

export interface Result {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface UpcomingMovies {
  dates: Dates
  page: number
  results: Result[]
  total_pages: number
  total_results: number
}

export const mockUpcomingMovies: UpcomingMovies = {
  dates: {
    maximum: '2022-02-15',
    minimum: '2022-01-27'
  },
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: '/tutaKitJJIaqZPyMz7rxrhb4Yxm.jpg',
      genre_ids: [16, 35, 10751, 10402],
      id: 438695,
      original_language: 'en',
      original_title: 'Sing 2',
      overview:
        'Buster and his new cast now have their sights set on debuting a new show at the Crystal Tower Theater in glamorous Redshore City. But with no connections, he and his singers must sneak into the Crystal Entertainment offices, run by the ruthless wolf mogul Jimmy Crystal, where the gang pitches the ridiculous idea of casting the lion rock legend Clay Calloway in their show. Buster must embark on a quest to find the now-isolated Clay and persuade him to return to the stage.',
      popularity: 5211.181,
      poster_path: '/aWeKITRFbbwY8txG5uCj4rMCfSP.jpg',
      release_date: '2021-12-01',
      title: 'Sing 2',
      video: false,
      vote_average: 8.3,
      vote_count: 1110
    },
    {
      adult: false,
      backdrop_path: '/o76ZDm8PS9791XiuieNB93UZcRV.jpg',
      genre_ids: [27, 28, 878],
      id: 460458,
      original_language: 'en',
      original_title: 'Resident Evil: Welcome to Raccoon City',
      overview:
        'Once the booming home of pharmaceutical giant Umbrella Corporation, Raccoon City is now a dying Midwestern town. The company’s exodus left the city a wasteland…with great evil brewing below the surface. When that evil is unleashed, the townspeople are forever…changed…and a small group of survivors must work together to uncover the truth behind Umbrella and make it through the night.',
      popularity: 3107.294,
      poster_path: '/7uRbWOXxpWDMtnsd2PF3clu65jc.jpg',
      release_date: '2021-11-24',
      title: 'Resident Evil: Welcome to Raccoon City',
      video: false,
      vote_average: 6.1,
      vote_count: 936
    },
    {
      adult: false,
      backdrop_path: '/vumcocHugkAxMRDsQdVKyNCjkfh.jpg',
      genre_ids: [27, 9648, 53],
      id: 646385,
      original_language: 'en',
      original_title: 'Scream',
      overview:
        'Twenty-five years after a streak of brutal murders shocked the quiet town of Woodsboro, a new killer has donned the Ghostface mask and begins targeting a group of teenagers to resurrect secrets from the town’s deadly past.',
      popularity: 792.13,
      poster_path: '/kZNHR1upJKF3eTzdgl5V8s8a4C3.jpg',
      release_date: '2022-01-12',
      title: 'Scream',
      video: false,
      vote_average: 7.3,
      vote_count: 228
    },
    {
      adult: false,
      backdrop_path: '/9OE62lhp5FPNJMfKXodegVLjHUA.jpg',
      genre_ids: [16, 10751],
      id: 823609,
      original_language: 'en',
      original_title: 'Monster Family 2',
      overview:
        "To free Baba Yaga and Renfield from the clutches of Monster Hunter Mila Starr, the Wishbone Family once more transforms into a Vampire, Frankenstein's Monster, a Mummy and a Werewolf. Aided and abetted by their three pet bats, our Monster Family zooms around the world again to save their friends, make new monstrous acquaintances and finally come to the realization that ‘Nobody’s Perfect’ – even those with flaws can find happiness.",
      popularity: 340.404,
      poster_path: '/ypT4MsOuJrrFtlGShj3DrllIHN3.jpg',
      release_date: '2021-01-13',
      title: 'Monster Family 2',
      video: false,
      vote_average: 7.6,
      vote_count: 17
    },
    {
      adult: false,
      backdrop_path: '/4kb7uR1UmXa33U6GB6F9xckFlhn.jpg',
      genre_ids: [18, 36],
      id: 614917,
      original_language: 'en',
      original_title: 'King Richard',
      overview:
        'The story of how Richard Williams served as a coach to his daughters Venus and Serena, who will soon become two of the most legendary tennis players in history.',
      popularity: 184.5,
      poster_path: '/qQl0QS5P15vVzUcaP8rAqxbQ6Wp.jpg',
      release_date: '2021-11-18',
      title: 'King Richard',
      video: false,
      vote_average: 8.1,
      vote_count: 490
    },
    {
      adult: false,
      backdrop_path: '/uq8ZqjgFhmWLj4QzJshnNseVRbx.jpg',
      genre_ids: [10749, 18],
      id: 766105,
      original_language: 'da',
      original_title: 'Smagen af sult',
      overview:
        'Maggie and Carsten love each other, they have two wonderful children and run their own gourmet restaurant; Malus. They want it all. And they have it all. Almost. They are missing the coveted Michelin Star. It has been their dream, on which they gambled everything to win. One day Carsten receives a letter saying that his wife loves somebody else. But who sent the letter and why? In their continuous passion and pursuit for the ultimate recognition, they forget that the meals of life are best enjoyed together.',
      popularity: 160.547,
      poster_path: '/nk26r1JoKEXpptobBRBFRdq22lV.jpg',
      release_date: '2021-06-24',
      title: 'A Taste of Hunger',
      video: false,
      vote_average: 5.5,
      vote_count: 11
    },
    {
      adult: false,
      backdrop_path: '/tFwuQaHSFlb6mMDre3zruuux5Vk.jpg',
      genre_ids: [18],
      id: 716612,
      original_language: 'en',
      original_title: 'Spencer',
      overview:
        'During her Christmas holidays with the royal family at the Sandringham estate in Norfolk, England, Diana decides to leave her marriage to Prince Charles.',
      popularity: 157.142,
      poster_path: '/7GcqdBKaMM9BWXWN07BirBMkcBF.jpg',
      release_date: '2021-11-04',
      title: 'Spencer',
      video: false,
      vote_average: 7.3,
      vote_count: 372
    },
    {
      adult: false,
      backdrop_path: '/6YDUME6C125YRxVEPYebFA2nKRh.jpg',
      genre_ids: [10402, 16],
      id: 554594,
      original_language: 'en',
      original_title: 'Koati',
      overview:
        'A coati, a butterfly and a frog join forces in order to avoid an evil snake that is destroying their homes.',
      popularity: 154.354,
      poster_path: '/uTHtqB6fqchXVWQO8kKZ2F7ScXy.jpg',
      release_date: '2021-10-22',
      title: 'Koati',
      video: false,
      vote_average: 7.6,
      vote_count: 38
    },
    {
      adult: false,
      backdrop_path: '/oUoFM0f4YFW2jw7AymxUXYvGv7S.jpg',
      genre_ids: [28, 12],
      id: 335787,
      original_language: 'en',
      original_title: 'Uncharted',
      overview:
        'A young street-smart, Nathan Drake and his wisecracking partner Victor “Sully” Sullivan embark on a dangerous pursuit of “the greatest treasure never found” while also tracking clues that may lead to Nathan’s long-lost brother.',
      popularity: 153.619,
      poster_path: '/nMO3QWa6liTwNWhVICkjzaYfPoH.jpg',
      release_date: '2022-02-10',
      title: 'Uncharted',
      video: false,
      vote_average: 0,
      vote_count: 0
    },
    {
      adult: false,
      backdrop_path: '/ue7p1gBxBZeM9KNtwcUnBzdlRHk.jpg',
      genre_ids: [18],
      id: 554230,
      original_language: 'en',
      original_title: 'The Lost Daughter',
      overview:
        "A woman's seaside vacation takes a dark turn when her obsession with a young mother forces her to confront secrets from her past.",
      popularity: 135.882,
      poster_path: '/t1oLNRFixpFOVsyz1HCqCUW3wiW.jpg',
      release_date: '2021-12-16',
      title: 'The Lost Daughter',
      video: false,
      vote_average: 6.6,
      vote_count: 244
    },
    {
      adult: false,
      backdrop_path: '/aSgFDRnfppKxRGZE8BWOfgzAR3k.jpg',
      genre_ids: [28, 53],
      id: 523638,
      original_language: 'en',
      original_title: 'Prisoners of the Ghostland',
      overview:
        'In the treacherous frontier city of Samurai Town, a ruthless bank robber is sprung from jail by wealthy warlord The Governor, whose adopted granddaughter Bernice has gone missing. The Governor offers the prisoner his freedom in exchange for retrieving the runaway. Strapped into a leather suit that will self-destruct within five days, the bandit sets off on a journey to find the young woman—and his own path to redemption.',
      popularity: 92.352,
      poster_path: '/j5HRzcvN1QXZLvwfc3NLxX8XQJY.jpg',
      release_date: '2021-08-31',
      title: 'Prisoners of the Ghostland',
      video: false,
      vote_average: 5.2,
      vote_count: 213
    },
    {
      adult: false,
      backdrop_path: '/6UxCO59sdhvp43OCkrYx4EX61J.jpg',
      genre_ids: [18],
      id: 766798,
      original_language: 'es',
      original_title: 'Madres paralelas',
      overview:
        'Two unmarried women who have become pregnant by accident and are about to give birth meet in a hospital room: Janis, middle-aged, unrepentant and happy; Ana, a teenager, remorseful and frightened.',
      popularity: 89.714,
      poster_path: '/gDaxYkYNbHuM2VlUazbcpnFZB6d.jpg',
      release_date: '2021-10-08',
      title: 'Parallel Mothers',
      video: false,
      vote_average: 6.8,
      vote_count: 237
    },
    {
      adult: false,
      backdrop_path: '/jIAyjJMrEIDjojxQDdZemDwqr82.jpg',
      genre_ids: [10749, 16, 14],
      id: 573699,
      original_language: 'zh',
      original_title: '白蛇：缘起',
      overview:
        'One day a young woman named Blanca is saved by Xuan, a snake catcher from a nearby village. She has lost her memory, and together they go on a journey to discover her real identity, developing deeper feelings for one another along the way. But as they learn more about her past, they uncover a darker plot of supernatural forces vying for power, with the fate of the world hanging in the balance.',
      popularity: 88.698,
      poster_path: '/30SLnoKmYNyRPkKCYowsrGLRnJA.jpg',
      release_date: '2019-01-11',
      title: 'White Snake',
      video: false,
      vote_average: 7.8,
      vote_count: 271
    },
    {
      adult: false,
      backdrop_path: '/g0YNGpmlXsgHfhGnJz3c5uyzZ1B.jpg',
      genre_ids: [80, 18, 53],
      id: 597208,
      original_language: 'en',
      original_title: 'Nightmare Alley',
      overview:
        'An ambitious carny with a talent for manipulating people with a few well-chosen words hooks up with a female psychiatrist who is even more dangerous than he is.',
      popularity: 81.328,
      poster_path: '/zLYQ5NxLw9rvyID9vj4p3dvpvJW.jpg',
      release_date: '2021-12-02',
      title: 'Nightmare Alley',
      video: false,
      vote_average: 7.5,
      vote_count: 56
    },
    {
      adult: false,
      backdrop_path: '/koaxq5QbARIlfxCOR89atPHv367.jpg',
      genre_ids: [35, 10749, 10402],
      id: 615904,
      original_language: 'en',
      original_title: 'Marry Me',
      overview:
        'Explores the possibilities of what might happen when a superstar marries an average Joe as a joke and discovers that perhaps there are no accidents.',
      popularity: 76.825,
      poster_path: '/ko1JVbGj4bT8IhCWqjBQ6ZtF2t.jpg',
      release_date: '2022-02-09',
      title: 'Marry Me',
      video: false,
      vote_average: 0,
      vote_count: 0
    },
    {
      adult: false,
      backdrop_path: '/iJsV2JLhZOBhUjAmPGVoU8pMiTN.jpg',
      genre_ids: [878, 28, 12],
      id: 406759,
      original_language: 'en',
      original_title: 'Moonfall',
      overview:
        'A mysterious force knocks the moon from its orbit around Earth and sends it hurtling on a collision course with life as we know it.',
      popularity: 74.505,
      poster_path: '/odVv1sqVs0KxBXiA8bhIBlPgalx.jpg',
      release_date: '2022-02-03',
      title: 'Moonfall',
      video: false,
      vote_average: 0,
      vote_count: 0
    },
    {
      adult: false,
      backdrop_path: '/fhp1Kk7OPBeRqyh19H0StpDzHCz.jpg',
      genre_ids: [16, 18, 878],
      id: 776305,
      original_language: 'ja',
      original_title: '竜とそばかすの姫',
      overview:
        'Suzu is a 17-year-old high school student living in a rural town with her father. Wounded by the loss of her mother at a young age, Suzu one day discovers the massive online world "U" and dives into this alternate reality as her avatar, Belle. Before long, all of U\'s eyes are fixed on Belle, when, suddenly, a mysterious dragon-like figure appears before her.',
      popularity: 67.76,
      poster_path: '/e143CxHsD7oVxqrxk29I5SJrjrl.jpg',
      release_date: '2021-07-16',
      title: 'Belle',
      video: false,
      vote_average: 8.1,
      vote_count: 104
    },
    {
      adult: false,
      backdrop_path: '/fOjvX08c9TCLtCZZ4KnRqTCpU37.jpg',
      genre_ids: [18, 35],
      id: 718032,
      original_language: 'en',
      original_title: 'Licorice Pizza',
      overview:
        'The story of Alana Kane and Gary Valentine growing up, running around and going through the treacherous navigation of first love in the San Fernando Valley, 1973.',
      popularity: 63.25,
      poster_path: '/jD98aUKHQZNAmrk0wQQ9wmNQPnP.jpg',
      release_date: '2021-11-26',
      title: 'Licorice Pizza',
      video: false,
      vote_average: 7.3,
      vote_count: 146
    },
    {
      adult: false,
      backdrop_path: '/AqwA5sHHIhrz0r1TpwPl0Uh3nMG.jpg',
      genre_ids: [27],
      id: 661791,
      original_language: 'es',
      original_title: 'La abuela',
      overview:
        'A Paris model must return to Madrid where her grandmother, who raised her, has had a stroke. But spending just a few days with this relative turns into an unexpected nightmare.',
      popularity: 53.358,
      poster_path: '/kwW0Dl0pl50Uq1MHuWuIwTehjsm.jpg',
      release_date: '2022-01-28',
      title: 'The Grandmother',
      video: false,
      vote_average: 0,
      vote_count: 0
    },
    {
      adult: false,
      backdrop_path: '/56T4lCXrWCFhCeZxArSOXPQIfKc.jpg',
      genre_ids: [99, 35, 28],
      id: 656663,
      original_language: 'en',
      original_title: 'Jackass Forever',
      overview:
        'Celebrating the joy of being back together with your best friends and a perfectly executed shot to the dingdong, the original jackass crew return for another round of hilarious, wildly absurd, and often dangerous displays of comedy with a little help from some exciting new cast. Johnny and the team push the envelope even further in Jackass Forever.',
      popularity: 45.613,
      poster_path: '/ruHDFumJfW7F2vEqTZEQQ9xT7CA.jpg',
      release_date: '2022-02-01',
      title: 'Jackass Forever',
      video: false,
      vote_average: 0,
      vote_count: 0
    }
  ],
  total_pages: 15,
  total_results: 297
}
