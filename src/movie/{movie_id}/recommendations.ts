export interface Result {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  media_type: string
  title: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface MovieRecommendations {
  page: number
  results: Result[]
  total_pages: number
  total_results: number
}

export const mockMovieRecommendations = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: '/tva2OlLELCagFynFibcefhn2D9i.jpg',
      genre_ids: [12, 28, 53, 878],
      id: 604,
      media_type: 'movie',
      title: 'The Matrix Reloaded',
      original_language: 'en',
      original_title: 'The Matrix Reloaded',
      overview:
        "Six months after the events depicted in The Matrix, Neo has proved to be a good omen for the free humans, as more and more humans are being freed from the matrix and brought to Zion, the one and only stronghold of the Resistance.  Neo himself has discovered his superpowers including super speed, ability to see the codes of the things inside the matrix and a certain degree of pre-cognition. But a nasty piece of news hits the human resistance: 250,000 machine sentinels are digging to Zion and would reach them in 72 hours. As Zion preares for the ultimate war, Neo, Morpheus and Trinity are advised by the Oracle to find the Keymaker who would help them reach the Source.  Meanwhile Neo's recurrent dreams depicting Trinity's death have got him worried and as if it was not enough, Agent Smith has somehow escaped deletion, has become more powerful than before and has fixed Neo as his next target.",
      popularity: 106.575,
      poster_path: '/9TGHDvWrqKBzwDxDodHYXEmOE6J.jpg',
      release_date: '2003-05-15',
      video: false,
      vote_average: 7.011,
      vote_count: 8700
    },
    {
      adult: false,
      backdrop_path: '/kJYPag1YrA4PsXIftFdq3QEaanV.jpg',
      genre_ids: [12, 28, 53, 878],
      id: 605,
      media_type: 'movie',
      title: 'The Matrix Revolutions',
      original_language: 'en',
      original_title: 'The Matrix Revolutions',
      overview:
        'The human city of Zion defends itself against the massive invasion of the machines as Neo fights to end the war at another front while also opposing the rogue Agent Smith.',
      popularity: 91.661,
      poster_path: '/fgm8OZ7o4G1G1I9EeGcb85Noe6L.jpg',
      release_date: '2003-11-05',
      video: false,
      vote_average: 6.694,
      vote_count: 7798
    },
    {
      adult: false,
      backdrop_path: '/vRQnzOn4HjIMX4LBq9nHhFXbsSu.jpg',
      genre_ids: [12, 14, 28],
      id: 120,
      media_type: 'movie',
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      original_language: 'en',
      original_title: 'The Lord of the Rings: The Fellowship of the Ring',
      overview:
        'Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed.',
      popularity: 137.875,
      poster_path: '/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg',
      release_date: '2001-12-18',
      video: false,
      vote_average: 8.371,
      vote_count: 20362
    },
    {
      adult: false,
      backdrop_path: '/nS4picOwj15APKzJeBCk6EBcMG5.jpg',
      genre_ids: [12, 14, 28],
      id: 121,
      media_type: 'movie',
      title: 'The Lord of the Rings: The Two Towers',
      original_language: 'en',
      original_title: 'The Lord of the Rings: The Two Towers',
      overview:
        'Frodo and Sam are trekking to Mordor to destroy the One Ring of Power while Gimli, Legolas and Aragorn search for the orc-captured Merry and Pippin. All along, nefarious wizard Saruman awaits the Fellowship members at the Orthanc Tower in Isengard.',
      popularity: 126.743,
      poster_path: '/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg',
      release_date: '2002-12-18',
      video: false,
      vote_average: 8.355,
      vote_count: 17608
    },
    {
      adult: false,
      backdrop_path: '/lXhgCODAbBXL5buk9yEmTpOoOgR.jpg',
      genre_ids: [12, 14, 28],
      id: 122,
      media_type: 'movie',
      title: 'The Lord of the Rings: The Return of the King',
      original_language: 'en',
      original_title: 'The Lord of the Rings: The Return of the King',
      overview:
        "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam take the ring closer to the heart of Mordor, the dark lord's realm.",
      popularity: 120.668,
      poster_path: '/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg',
      release_date: '2003-12-01',
      video: false,
      vote_average: 8.48,
      vote_count: 18934
    },
    {
      adult: false,
      backdrop_path: '/s3TBrRGB1iav7gFOCNx3H31MoES.jpg',
      genre_ids: [28, 878, 12],
      id: 27205,
      media_type: 'movie',
      title: 'Inception',
      original_language: 'en',
      original_title: 'Inception',
      overview:
        'Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: "inception", the implantation of another person\'s idea into a target\'s subconscious.',
      popularity: 161.343,
      poster_path: '/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
      release_date: '2010-07-15',
      video: false,
      vote_average: 8.351,
      vote_count: 30769
    },
    {
      adult: false,
      backdrop_path: '/nMKdUUepR0i5zn0y1T4CsSB5chy.jpg',
      genre_ids: [18, 28, 80, 53],
      id: 155,
      media_type: 'movie',
      title: 'The Dark Knight',
      original_language: 'en',
      original_title: 'The Dark Knight',
      overview:
        'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.',
      popularity: 87.265,
      poster_path: '/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
      release_date: '2008-07-14',
      video: false,
      vote_average: 8.483,
      vote_count: 26668
    },
    {
      adult: false,
      backdrop_path: '/yguBaPk5V0nZCcSBthre4YFMAgk.jpg',
      genre_ids: [18],
      id: 550,
      media_type: 'movie',
      title: 'Fight Club',
      original_language: 'en',
      original_title: 'Fight Club',
      overview:
        'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
      popularity: 59.04,
      poster_path: '/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
      release_date: '1999-10-15',
      video: false,
      vote_average: 8.427,
      vote_count: 23318
    },
    {
      adult: false,
      backdrop_path: '/zqkmTXzjkAgXmEWLRsY4UpTWCeo.jpg',
      genre_ids: [12, 28, 878],
      id: 11,
      media_type: 'movie',
      title: 'Star Wars',
      original_language: 'en',
      original_title: 'Star Wars',
      overview:
        'Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.',
      popularity: 81.635,
      poster_path: '/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg',
      release_date: '1977-05-25',
      video: false,
      vote_average: 8.2,
      vote_count: 16588
    },
    {
      adult: false,
      backdrop_path: '/xKb6mtdfI5Qsggc44Hr9CCUDvaj.jpg',
      genre_ids: [28, 53, 878],
      id: 280,
      media_type: 'movie',
      title: 'Terminator 2: Judgment Day',
      original_language: 'en',
      original_title: 'Terminator 2: Judgment Day',
      overview:
        'Nearly 10 years have passed since Sarah Connor was targeted for termination by a cyborg from the future. Now her son, John, the future leader of the resistance, is the target for a newer, more deadly terminator. Once again, the resistance has managed to send a protector back to attempt to save John and his mother Sarah.',
      popularity: 65.683,
      poster_path: '/weVXMD5QBGeQil4HEATZqAkXeEc.jpg',
      release_date: '1991-07-03',
      video: false,
      vote_average: 8.06,
      vote_count: 10021
    },
    {
      adult: false,
      backdrop_path: '/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg',
      genre_ids: [53, 80],
      id: 680,
      media_type: 'movie',
      title: 'Pulp Fiction',
      original_language: 'en',
      original_title: 'Pulp Fiction',
      overview:
        "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
      popularity: 67.033,
      poster_path: '/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
      release_date: '1994-09-10',
      video: false,
      vote_average: 8.481,
      vote_count: 22483
    },
    {
      adult: false,
      backdrop_path: '/y9AuabF1SXnn3xZ0tAJLLhv33Uj.jpg',
      genre_ids: [28, 80, 18],
      id: 272,
      media_type: 'movie',
      title: 'Batman Begins',
      original_language: 'en',
      original_title: 'Batman Begins',
      overview:
        'Driven by tragedy, billionaire Bruce Wayne dedicates his life to uncovering and defeating the corruption that plagues his home, Gotham City.  Unable to work within the system, he instead creates a new identity, a symbol of fear for the criminal underworld - The Batman.',
      popularity: 67.735,
      poster_path: '/8RW2runSEc34IwKN2D1aPcJd2UL.jpg',
      release_date: '2005-06-10',
      video: false,
      vote_average: 7.685,
      vote_count: 17121
    },
    {
      adult: false,
      backdrop_path: '/aZtwH3RQ0L8jbInxr7OSc9tlGMJ.jpg',
      genre_ids: [28, 18, 12],
      id: 98,
      media_type: 'movie',
      title: 'Gladiator',
      original_language: 'en',
      original_title: 'Gladiator',
      overview:
        "In the year 180, the death of emperor Marcus Aurelius throws the Roman Empire into chaos.  Maximus is one of the Roman army's most capable and trusted generals and a key advisor to the emperor.  As Marcus' devious son Commodus ascends to the throne, Maximus is set to be executed.  He escapes, but is captured by slave traders.  Renamed Spaniard and forced to become a gladiator, Maximus must battle to the death with other men for the amusement of paying audiences.",
      popularity: 55.3,
      poster_path: '/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg',
      release_date: '2000-05-01',
      video: false,
      vote_average: 8.2,
      vote_count: 14648
    },
    {
      adult: false,
      backdrop_path: '/3lbTiIN8cVonMUQwaeh5nvn61lr.jpg',
      genre_ids: [12, 35, 878, 10751],
      id: 105,
      media_type: 'movie',
      title: 'Back to the Future',
      original_language: 'en',
      original_title: 'Back to the Future',
      overview:
        "Eighties teenager Marty McFly is accidentally sent back in time to 1955, inadvertently disrupting his parents' first meeting and attracting his mother's romantic interest. Marty must repair the damage to history by rekindling his parents' romance and - with the help of his eccentric inventor friend Doc Brown - return to 1985.",
      popularity: 53.724,
      poster_path: '/7lyBcpYB0Qt8gYhXYaEZUNlNQAv.jpg',
      release_date: '1985-07-03',
      video: false,
      vote_average: 8.303,
      vote_count: 16070
    },
    {
      adult: false,
      backdrop_path: '/zwhcwvr3kOAlw1JdyIXeVK4Mq6u.jpg',
      genre_ids: [28, 53, 878],
      id: 218,
      media_type: 'movie',
      title: 'The Terminator',
      original_language: 'en',
      original_title: 'The Terminator',
      overview:
        'In the post-apocalyptic future, reigning tyrannical supercomputers teleport a cyborg assassin known as the "Terminator" back to 1984 to kill Sarah Connor, whose unborn son is destined to lead insurgents against 21st century mechanical hegemony. Meanwhile, the human-resistance movement dispatches a lone warrior to safeguard Sarah. Can he stop the virtually indestructible killing machine?',
      popularity: 54.441,
      poster_path: '/qvktm0BHcnmDpul4Hz01GIazWPr.jpg',
      release_date: '1984-10-26',
      video: false,
      vote_average: 7.616,
      vote_count: 10109
    },
    {
      adult: false,
      backdrop_path: '/dMZxEdrWIzUmUoOz2zvmFuutbj7.jpg',
      genre_ids: [12, 28, 878],
      id: 1891,
      media_type: 'movie',
      title: 'The Empire Strikes Back',
      original_language: 'en',
      original_title: 'The Empire Strikes Back',
      overview:
        'The epic saga continues as Luke Skywalker, in hopes of defeating the evil Galactic Empire, learns the ways of the Jedi from aging master Yoda. But Darth Vader is more determined than ever to capture Luke. Meanwhile, rebel leader Princess Leia, cocky Han Solo, Chewbacca, and droids C-3PO and R2-D2 are thrown into various stages of capture, betrayal and despair.',
      popularity: 37.486,
      poster_path: '/7BuH8itoSrLExs2YZSsM01Qk2no.jpg',
      release_date: '1980-05-20',
      video: false,
      vote_average: 8.381,
      vote_count: 13771
    },
    {
      adult: false,
      backdrop_path: '/8EgxSaVRZwcm3pWChyW4j7yPplq.jpg',
      genre_ids: [28, 878, 12],
      id: 1726,
      media_type: 'movie',
      title: 'Iron Man',
      original_language: 'en',
      original_title: 'Iron Man',
      overview:
        'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',
      popularity: 164.591,
      poster_path: '/78lPtwv72eTNqFW9COBYI0dWDJa.jpg',
      release_date: '2008-04-30',
      video: false,
      vote_average: 7.622,
      vote_count: 22083
    },
    {
      adult: false,
      backdrop_path: '/hjQp148VjWF4KjzhsD90OCMr11h.jpg',
      genre_ids: [18, 36, 10752],
      id: 857,
      media_type: 'movie',
      title: 'Saving Private Ryan',
      original_language: 'en',
      original_title: 'Saving Private Ryan',
      overview:
        'As U.S. troops storm the beaches of Normandy, three brothers lie dead on the battlefield, with a fourth trapped behind enemy lines. Ranger captain John Miller and seven men are tasked with penetrating German-held territory and bringing the boy home.',
      popularity: 72.914,
      poster_path: '/1wY4psJ5NVEhCuOYROwLH2XExM2.jpg',
      release_date: '1998-07-24',
      video: false,
      vote_average: 8.188,
      vote_count: 12611
    },
    {
      adult: false,
      backdrop_path: '/wgvc3PmjQGtYYDWaeuV867mnFDs.jpg',
      genre_ids: [12, 14, 28, 53, 878],
      id: 18,
      media_type: 'movie',
      title: 'The Fifth Element',
      original_language: 'en',
      original_title: 'The Fifth Element',
      overview:
        'In 2257, a taxi driver is unintentionally given the task of saving a young girl who is part of the key that will ensure the survival of humanity.',
      popularity: 46.208,
      poster_path: '/fPtlCO1yQtnoLHOwKtWz7db6RGU.jpg',
      release_date: '1997-05-02',
      video: false,
      vote_average: 7.504,
      vote_count: 8721
    },
    {
      adult: false,
      backdrop_path: '/d354XqicJ7vi48YnPDr1vRk5uhZ.jpg',
      genre_ids: [28, 80, 18, 53],
      id: 49026,
      media_type: 'movie',
      title: 'The Dark Knight Rises',
      original_language: 'en',
      original_title: 'The Dark Knight Rises',
      overview:
        "Following the death of District Attorney Harvey Dent, Batman assumes responsibility for Dent's crimes to protect the late attorney's reputation and is subsequently hunted by the Gotham City Police Department. Eight years later, Batman encounters the mysterious Selina Kyle and the villainous Bane, a new terrorist leader who overwhelms Gotham's finest. The Dark Knight resurfaces to protect a city that has branded him an enemy.",
      popularity: 101.733,
      poster_path: '/85cWkCVftiVs0BVey6pxX8uNmLt.jpg',
      release_date: '2012-07-16',
      video: false,
      vote_average: 7.76,
      vote_count: 18904
    },
    {
      adult: false,
      backdrop_path: '/i5H7zusQGsysGQ8i6P361Vnr0n2.jpg',
      genre_ids: [80, 9648, 53],
      id: 807,
      media_type: 'movie',
      title: 'Se7en',
      original_language: 'en',
      original_title: 'Se7en',
      overview:
        'Two homicide detectives are on a desperate hunt for a serial killer whose crimes are based on the "seven deadly sins" in this dark and haunting film that takes viewers from the tortured remains of one victim to the next. The seasoned Det. Sommerset researches each sin in an effort to get inside the killer\'s mind, while his novice partner, Mills, scoffs at his efforts to unravel the case.',
      popularity: 40.897,
      poster_path: '/69Sns8WoET6CfaYlIkHbla4l7nC.jpg',
      release_date: '1995-09-22',
      video: false,
      vote_average: 8.343,
      vote_count: 16424
    }
  ],
  total_pages: 2,
  total_results: 40
}
