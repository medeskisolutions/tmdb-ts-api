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

export interface MoviesNowPlaying {
  dates: Dates
  page: number
  results: Result[]
  total_pages: number
  total_results: number
}

export const mockMoviesNowPlaying: MoviesNowPlaying = {
  dates: {
    maximum: "2022-01-26",
    minimum: "2021-12-09",
  },
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: "/1Rr5SrvHxMXHu5RjKpaMba8VTzi.jpg",
      genre_ids: [28, 12, 878],
      id: 634649,
      original_language: "en",
      original_title: "Spider-Man: No Way Home",
      overview:
        "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
      popularity: 5874.67,
      poster_path: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
      release_date: "2021-12-15",
      title: "Spider-Man: No Way Home",
      video: false,
      vote_average: 8.4,
      vote_count: 4367,
    },
    {
      adult: false,
      backdrop_path: "/tutaKitJJIaqZPyMz7rxrhb4Yxm.jpg",
      genre_ids: [16, 35, 10751, 10402],
      id: 438695,
      original_language: "en",
      original_title: "Sing 2",
      overview:
        "Buster and his new cast now have their sights set on debuting a new show at the Crystal Tower Theater in glamorous Redshore City. But with no connections, he and his singers must sneak into the Crystal Entertainment offices, run by the ruthless wolf mogul Jimmy Crystal, where the gang pitches the ridiculous idea of casting the lion rock legend Clay Calloway in their show. Buster must embark on a quest to find the now-isolated Clay and persuade him to return to the stage.",
      popularity: 5211.181,
      poster_path: "/aWeKITRFbbwY8txG5uCj4rMCfSP.jpg",
      release_date: "2021-12-01",
      title: "Sing 2",
      video: false,
      vote_average: 8.3,
      vote_count: 1110,
    },
    {
      adult: false,
      backdrop_path: "/3G1Q5xF40HkUBJXxt2DQgQzKTp5.jpg",
      genre_ids: [16, 35, 10751, 14],
      id: 568124,
      original_language: "en",
      original_title: "Encanto",
      overview:
        "The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family with a unique gift from super strength to the power to heal—every child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family's last hope.",
      popularity: 4832.255,
      poster_path: "/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg",
      release_date: "2021-11-24",
      title: "Encanto",
      video: false,
      vote_average: 7.8,
      vote_count: 3157,
    },
    {
      adult: false,
      backdrop_path: "/EnDlndEvw6Ptpp8HIwmRcSSNKQ.jpg",
      genre_ids: [35, 14, 12],
      id: 425909,
      original_language: "en",
      original_title: "Ghostbusters: Afterlife",
      overview:
        "When a single mom and her two kids arrive in a small town, they begin to discover their connection to the original Ghostbusters and the secret legacy their grandfather left behind.",
      popularity: 3894.636,
      poster_path: "/sg4xJaufDiQl7caFEskBtQXfD4x.jpg",
      release_date: "2021-11-11",
      title: "Ghostbusters: Afterlife",
      video: false,
      vote_average: 7.7,
      vote_count: 1363,
    },
    {
      adult: false,
      backdrop_path: "/o76ZDm8PS9791XiuieNB93UZcRV.jpg",
      genre_ids: [27, 28, 878],
      id: 460458,
      original_language: "en",
      original_title: "Resident Evil: Welcome to Raccoon City",
      overview:
        "Once the booming home of pharmaceutical giant Umbrella Corporation, Raccoon City is now a dying Midwestern town. The company’s exodus left the city a wasteland…with great evil brewing below the surface. When that evil is unleashed, the townspeople are forever…changed…and a small group of survivors must work together to uncover the truth behind Umbrella and make it through the night.",
      popularity: 3107.294,
      poster_path: "/7uRbWOXxpWDMtnsd2PF3clu65jc.jpg",
      release_date: "2021-11-24",
      title: "Resident Evil: Welcome to Raccoon City",
      video: false,
      vote_average: 6.1,
      vote_count: 936,
    },
    {
      adult: false,
      backdrop_path: "/eNI7PtK6DEYgZmHWP9gQNuff8pv.jpg",
      genre_ids: [878, 28, 12],
      id: 624860,
      original_language: "en",
      original_title: "The Matrix Resurrections",
      overview:
        "Plagued by strange memories, Neo's life takes an unexpected turn when he finds himself back inside the Matrix.",
      popularity: 2920.594,
      poster_path: "/8c4a8kE7PizaGQQnditMmI1xbRp.jpg",
      release_date: "2021-12-16",
      title: "The Matrix Resurrections",
      video: false,
      vote_average: 6.9,
      vote_count: 2346,
    },
    {
      adult: false,
      backdrop_path: "/1Wlwnhn5sXUIwlxpJgWszT622PS.jpg",
      genre_ids: [16, 35, 10751],
      id: 585245,
      original_language: "en",
      original_title: "Clifford the Big Red Dog",
      overview:
        "As Emily struggles to fit in at home and at school, she discovers a small red puppy who is destined to become her best friend. When Clifford magically undergoes one heck of a growth spurt, becomes a gigantic dog and attracts the attention of a genetics company, Emily and her Uncle Casey have to fight the forces of greed as they go on the run across New York City. Along the way, Clifford affects the lives of everyone around him and teaches Emily and her uncle the true meaning of acceptance and unconditional love.",
      popularity: 1149.839,
      poster_path: "/oifhfVhUcuDjE61V5bS5dfShQrm.jpg",
      release_date: "2021-11-10",
      title: "Clifford the Big Red Dog",
      video: false,
      vote_average: 7.4,
      vote_count: 898,
    },
    {
      adult: false,
      backdrop_path: "/9fzNf2QcsHVvdx5g5QUOgAWpADw.jpg",
      genre_ids: [18, 27, 9648],
      id: 516329,
      original_language: "en",
      original_title: "Antlers",
      overview:
        "A small-town Oregon teacher and her brother, the local sheriff, discover a young student is harbouring a dangerous secret that could have frightening consequences.",
      popularity: 1143.488,
      poster_path: "/cMch3tiexw3FdOEeZxMWVel61Xg.jpg",
      release_date: "2021-10-28",
      title: "Antlers",
      video: false,
      vote_average: 6.4,
      vote_count: 371,
    },
    {
      adult: false,
      backdrop_path: "/1BqX34aJS5J8PefVnQSfQIEPfkl.jpg",
      genre_ids: [80, 28, 53],
      id: 826749,
      original_language: "en",
      original_title: "Fortress",
      overview:
        "The story revolves around a top-secret resort for retired U.S. intelligence officers. A group of criminals led by Balzary breach the compound, hellbent on revenge on Robert, forcing the retired officer and his son to save the day.",
      popularity: 1060.68,
      poster_path: "/vQxtoPJVfpHgL7DCg9hQFZKDWJa.jpg",
      release_date: "2021-12-17",
      title: "Fortress",
      video: false,
      vote_average: 6.3,
      vote_count: 121,
    },
    {
      adult: false,
      backdrop_path: "/mRZDHjArYNWpOv06kxRK1cduQKh.jpg",
      genre_ids: [27, 53],
      id: 754934,
      original_language: "en",
      original_title: "Son",
      overview:
        "When a young boy contracts a mysterious illness, his mother must decide how far she will go to protect him from terrifying forces in her past.",
      popularity: 795.238,
      poster_path: "/4fl6EdtMp6p0RKJgESdFti1J3dC.jpg",
      release_date: "2021-08-06",
      title: "Son",
      video: false,
      vote_average: 6.2,
      vote_count: 67,
    },
    {
      adult: false,
      backdrop_path: "/vumcocHugkAxMRDsQdVKyNCjkfh.jpg",
      genre_ids: [27, 9648, 53],
      id: 646385,
      original_language: "en",
      original_title: "Scream",
      overview:
        "Twenty-five years after a streak of brutal murders shocked the quiet town of Woodsboro, a new killer has donned the Ghostface mask and begins targeting a group of teenagers to resurrect secrets from the town’s deadly past.",
      popularity: 792.13,
      poster_path: "/kZNHR1upJKF3eTzdgl5V8s8a4C3.jpg",
      release_date: "2022-01-12",
      title: "Scream",
      video: false,
      vote_average: 7.3,
      vote_count: 228,
    },
    {
      adult: false,
      backdrop_path: "/r2GAjd4rNOHJh6i6Y0FntmYuPQW.jpg",
      genre_ids: [12, 28, 53],
      id: 370172,
      original_language: "en",
      original_title: "No Time to Die",
      overview:
        "Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
      popularity: 684.577,
      poster_path: "/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg",
      release_date: "2021-09-29",
      title: "No Time to Die",
      video: false,
      vote_average: 7.5,
      vote_count: 3216,
    },
    {
      adult: false,
      backdrop_path: "/kGyl8SCp9We2eTjRydqjJQJ18tg.jpg",
      genre_ids: [80, 18, 53],
      id: 656991,
      original_language: "en",
      original_title: "Wild Indian",
      overview:
        "Decades after covering up his classmate’s murder, Michael has moved on from his reservation and fractured past. When a man who shares his violent secret seeks vengeance, Michael goes to great lengths to protect his new life with his wife and boss from the demons of his past.",
      popularity: 617.82,
      poster_path: "/yhOpkNvgW1ZzmEpR4iqxKwKKShL.jpg",
      release_date: "2021-09-03",
      title: "Wild Indian",
      video: false,
      vote_average: 6.4,
      vote_count: 15,
    },
    {
      adult: false,
      backdrop_path: "/nvxrQQspxmSblCYDtvDAbVFX8Jt.jpg",
      genre_ids: [35, 18, 878],
      id: 646380,
      original_language: "en",
      original_title: "Don't Look Up",
      overview:
        "Two low-level astronomers must go on a giant media tour to warn humankind of an approaching comet that will destroy planet Earth.",
      popularity: 605.236,
      poster_path: "/th4E1yqsE8DGpAseLiUrI60Hf8V.jpg",
      release_date: "2021-12-07",
      title: "Don't Look Up",
      video: false,
      vote_average: 7.3,
      vote_count: 3889,
    },
    {
      adult: false,
      backdrop_path: "/uWGPC7j70LE64nbetxQGSSYJO53.jpg",
      genre_ids: [53, 10752],
      id: 762433,
      original_language: "en",
      original_title: "Zeros and Ones",
      overview:
        "Called to Rome to stop an imminent terrorist bombing, a soldier desperately seeks news of his imprisoned brother — a rebel with knowledge that could thwart the attack. Navigating the capital's darkened streets, he races to a series of ominous encounters to keep the Vatican from being blown to bits.",
      popularity: 532.919,
      poster_path: "/a6balsDWCFMHPaPT6rFoBpNjR6z.jpg",
      release_date: "2021-11-18",
      title: "Zeros and Ones",
      video: false,
      vote_average: 5.5,
      vote_count: 101,
    },
    {
      adult: false,
      backdrop_path: "/4gKxQIW91hOTELjY5lzjMbLoGxB.jpg",
      genre_ids: [28, 53, 878],
      id: 763164,
      original_language: "en",
      original_title: "Apex",
      overview:
        "Ex-cop Thomas Malone is serving a life sentence for a crime he didn’t commit. He is offered a chance at freedom if he can survive a deadly game of Apex, in which six hunters pay for the pleasure of hunting another human on a remote island. He accepts, and once he arrives, all hell breaks loose.",
      popularity: 499.41,
      poster_path: "/chTkFGToW5bsyw3hgLAe4S5Gt3.jpg",
      release_date: "2021-11-12",
      title: "Apex",
      video: false,
      vote_average: 5.5,
      vote_count: 340,
    },
    {
      adult: false,
      backdrop_path: "/9e6wp707XMouPG939o2fHunXXJR.jpg",
      genre_ids: [16, 12, 35, 10751],
      id: 639721,
      original_language: "en",
      original_title: "The Addams Family 2",
      overview:
        "The Addams get tangled up in more wacky adventures and find themselves involved in hilarious run-ins with all sorts of unsuspecting characters.",
      popularity: 481.974,
      poster_path: "/ld7YB9vBRp1GM1DT3KmFWSmtBPB.jpg",
      release_date: "2021-10-01",
      title: "The Addams Family 2",
      video: false,
      vote_average: 7.3,
      vote_count: 709,
    },
    {
      adult: false,
      backdrop_path: "/cugmVwK0N4aAcLibelKN5jWDXSx.jpg",
      genre_ids: [16, 28, 14, 12],
      id: 768744,
      original_language: "ja",
      original_title:
        "僕のヒーローアカデミア THE MOVIE ワールド ヒーローズ ミッション",
      overview:
        "A mysterious group called Humarize strongly believes in the Quirk Singularity Doomsday theory which states that when quirks get mixed further in with future generations, that power will bring forth the end of humanity. In order to save everyone, the Pro-Heroes around the world ask UA Academy heroes-in-training to assist them and form a world-classic selected hero team. It is up to the heroes to save the world and the future of heroes in what is the most dangerous crisis to take place yet in My Hero Academia.",
      popularity: 458.271,
      poster_path: "/4NUzcKtYPKkfTwKsLjwNt8nRIXV.jpg",
      release_date: "2021-08-06",
      title: "My Hero Academia: World Heroes' Mission",
      video: false,
      vote_average: 7.2,
      vote_count: 44,
    },
    {
      adult: false,
      backdrop_path: "/jla6lIGCUwNfQM4YMYZ5GtYo5SS.jpg",
      genre_ids: [35],
      id: 922017,
      original_language: "en",
      original_title: "Chief Daddy 2: Going for Broke",
      overview:
        "The Beecroft family are ready to spend all of Chief Daddy's inheritance, but not if the CEO of his company has anything to do with it.",
      popularity: 408.816,
      poster_path: "/mCOhpT4thaUTPbBvFKYibgpNnCy.jpg",
      release_date: "2021-12-17",
      title: "Chief Daddy 2: Going for Broke",
      video: false,
      vote_average: 6.1,
      vote_count: 29,
    },
    {
      adult: false,
      backdrop_path: "/vo9MRyCMBAdSqZgkI70AfVg8ISI.jpg",
      genre_ids: [12, 10751, 18],
      id: 754067,
      original_language: "fr",
      original_title: "Mystère",
      overview:
        'Stéphane decides to move to the beautiful mountains of Cantal in order to reconnect with his 8-year-old daughter, Victoria, who has been silent since her mother\'s disappearance. During a walk in the forest, a shepherd gives Victoria a puppy named "Mystery" who will gradually give her a taste for life. But very quickly, Stéphane discovers that the animal is in reality a wolf… Despite the warnings and the danger of this situation, he cannot bring himself to separate his daughter from this seemingly harmless ball of hair.',
      popularity: 374.035,
      poster_path: "/u6fBXfWU7jaG0zWYiOvh1myEQC.jpg",
      release_date: "2021-12-15",
      title: "Vicky and Her Mystery",
      video: false,
      vote_average: 7.4,
      vote_count: 187,
    },
  ],
  total_pages: 73,
  total_results: 1443,
}
