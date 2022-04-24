import {Language} from "~/configuration/languages";

export interface PopularPeople {
    page:          number;
    results:       Result[];
    total_pages:   number;
    total_results: number;
}

export interface Result {
    adult:                boolean;
    gender:               number;
    id:                   number;
    known_for:            KnownFor[];
    // TODO add department enum
    known_for_department: string;
    name:                 string;
    popularity:           number;
    profile_path:         string;
}

export interface KnownFor {
    adult?:            boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    media_type:        MediaType;
    original_language: Language;
    original_title?:   string;
    overview:          string;
    poster_path:       string;
    release_date?:     Date;
    title?:            string;
    video?:            boolean;
    vote_average:      number;
    vote_count:        number;
    first_air_date?:   Date;
    name?:             string;
    origin_country?:   string[];
    original_name?:    string;
}

export enum MediaType {
    Movie = "movie",
    Tv = "tv",
}

export const mockPopularPeople: PopularPeople = {
    "page": 1,
    "results": [
        {
            "adult": false,
            "gender": 2,
            "id": 1136406,
            "known_for": [
                {
                    "adult": false,
                    "backdrop_path": "/lmZFxXgJE3vgrciwuDib0N8CfQo.jpg",
                    "genre_ids": [
                        12,
                        28,
                        878
                    ],
                    "id": 299536,
                    "media_type": "movie",
                    "original_language": "en",
                    "original_title": "Avengers: Infinity War",
                    "overview": "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
                    "poster_path": "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
                    "release_date": "2018-04-25",
                    "title": "Avengers: Infinity War",
                    "video": false,
                    "vote_average": 8.3,
                    "vote_count": 24413
                },
                {
                    "adult": false,
                    "backdrop_path": "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
                    "genre_ids": [
                        12,
                        878,
                        28
                    ],
                    "id": 299534,
                    "media_type": "movie",
                    "original_language": "en",
                    "original_title": "Avengers: Endgame",
                    "overview": "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
                    "poster_path": "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
                    "release_date": "2019-04-24",
                    "title": "Avengers: Endgame",
                    "video": false,
                    "vote_average": 8.3,
                    "vote_count": 20844
                },
                {
                    "adult": false,
                    "backdrop_path": "/7FWlcZq3r6525LWOcvO9kNWurN1.jpg",
                    "genre_ids": [
                        12,
                        28,
                        878
                    ],
                    "id": 271110,
                    "media_type": "movie",
                    "original_language": "en",
                    "original_title": "Captain America: Civil War",
                    "overview": "Following the events of Age of Ultron, the collective governments of the world pass an act designed to regulate all superhuman activity. This polarizes opinion amongst the Avengers, causing two factions to side with Iron Man or Captain America, which causes an epic battle between former allies.",
                    "poster_path": "/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg",
                    "release_date": "2016-04-27",
                    "title": "Captain America: Civil War",
                    "video": false,
                    "vote_average": 7.4,
                    "vote_count": 19681
                }
            ],
            "known_for_department": "Acting",
            "name": "Tom Holland",
            "popularity": 139.319,
            "profile_path": "/bBRlrpJm9XkNSg0YT5LCaxqoFMX.jpg"
        },
        {
            "adult": false,
            "gender": 2,
            "id": 17142,
            "known_for": [
                {
                    "adult": false,
                    "backdrop_path": "/umUyVxJ4HeNebLMAcScdhF0QB3h.jpg",
                    "genre_ids": [
                        18,
                        36
                    ],
                    "id": 76203,
                    "media_type": "movie",
                    "original_language": "en",
                    "original_title": "12 Years a Slave",
                    "overview": "In the pre-Civil War United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery. Facing cruelty as well as unexpected kindnesses Solomon struggles not only to stay alive, but to retain his dignity. In the twelfth year of his unforgettable odyssey, Solomon’s chance meeting with a Canadian abolitionist will forever alter his life.",
                    "poster_path": "/xdANQijuNrJaw1HA61rDccME4Tm.jpg",
                    "release_date": "2013-10-18",
                    "title": "12 Years a Slave",
                    "video": false,
                    "vote_average": 7.9,
                    "vote_count": 9627
                },
                {
                    "adult": false,
                    "backdrop_path": "/tlK9mWLquPawoHT9jIWe9WGANKx.jpg",
                    "genre_ids": [
                        18,
                        53,
                        80
                    ],
                    "id": 146233,
                    "media_type": "movie",
                    "original_language": "en",
                    "original_title": "Prisoners",
                    "overview": "Keller Dover faces a parent's worst nightmare when his 6-year-old daughter, Anna, and her friend go missing. The only lead is an old motorhome that had been parked on their street. The head of the investigation, Detective Loki, arrests the driver, but a lack of evidence forces Loki to release his only suspect. Dover, knowing that his daughter's life is at stake, decides that he has no choice but to take matters into his own hands.",
                    "poster_path": "/tuZhZ6biFMr5n9YSVuHOJnNL1uU.jpg",
                    "release_date": "2013-09-18",
                    "title": "Prisoners",
                    "video": false,
                    "vote_average": 8.1,
                    "vote_count": 9168
                },
                {
                    "adult": false,
                    "backdrop_path": "/lVTYM5m7ZDnEyhxcYrkxJaYqExh.jpg",
                    "genre_ids": [
                        28,
                        53,
                        878
                    ],
                    "id": 59967,
                    "media_type": "movie",
                    "original_language": "en",
                    "original_title": "Looper",
                    "overview": "In the futuristic action thriller Looper, time travel will be invented but it will be illegal and only available on the black market. When the mob wants to get rid of someone, they will send their target 30 years into the past where a looper, a hired gun, like Joe is waiting to mop up. Joe is getting rich and life is good until the day the mob decides to close the loop, sending back Joe's future self for assassination.",
                    "poster_path": "/sNjL6SqErDBE8OUZlrDLkexfsCj.jpg",
                    "release_date": "2012-09-26",
                    "title": "Looper",
                    "video": false,
                    "vote_average": 6.9,
                    "vote_count": 8838
                }
            ],
            "known_for_department": "Acting",
            "name": "Paul Dano",
            "popularity": 123.638,
            "profile_path": "/tHsaqfauzG4MuFs5oCbq0pRy5EF.jpg"
        },
        {
            "adult": false,
            "gender": 1,
            "id": 224513,
            "known_for": [
                {
                    "adult": false,
                    "backdrop_path": "/sAtoMqDVhNDQBc3QJL3RF6hlhGq.jpg",
                    "genre_ids": [
                        878,
                        18
                    ],
                    "id": 335984,
                    "media_type": "movie",
                    "original_language": "en",
                    "original_title": "Blade Runner 2049",
                    "overview": "Thirty years after the events of the first film, a new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. K's discovery leads him on a quest to find Rick Deckard, a former LAPD blade runner who has been missing for 30 years.",
                    "poster_path": "/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
                    "release_date": "2017-10-04",
                    "title": "Blade Runner 2049",
                    "video": false,
                    "vote_average": 7.5,
                    "vote_count": 10642
                },
                {
                    "adult": false,
                    "backdrop_path": "/4HWAQu28e2yaWrtupFPGFkdNU7V.jpg",
                    "genre_ids": [
                        35,
                        80,
                        9648
                    ],
                    "id": 546554,
                    "media_type": "movie",
                    "original_language": "en",
                    "original_title": "Knives Out",
                    "overview": "When renowned crime novelist Harlan Thrombey is found dead at his estate just after his 85th birthday, the inquisitive and debonair Detective Benoit Blanc is mysteriously enlisted to investigate. From Harlan's dysfunctional family to his devoted staff, Blanc sifts through a web of red herrings and self-serving lies to uncover the truth behind Harlan's untimely death.",
                    "poster_path": "/pThyQovXQrw2m0s9x82twj48Jq4.jpg",
                    "release_date": "2019-11-27",
                    "title": "Knives Out",
                    "video": false,
                    "vote_average": 7.9,
                    "vote_count": 8706
                },
                {
                    "adult": false,
                    "backdrop_path": "/r2GAjd4rNOHJh6i6Y0FntmYuPQW.jpg",
                    "genre_ids": [
                        12,
                        28,
                        53
                    ],
                    "id": 370172,
                    "media_type": "movie",
                    "original_language": "en",
                    "original_title": "No Time to Die",
                    "overview": "Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
                    "poster_path": "/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg",
                    "release_date": "2021-09-29",
                    "title": "No Time to Die",
                    "video": false,
                    "vote_average": 7.5,
                    "vote_count": 3913
                }
            ],
            "known_for_department": "Acting",
            "name": "Ana de Armas",
            "popularity": 97.251,
            "profile_path": "/14uxt0jH28J9zn4vNQNTae3Bmr7.jpg"
        },
        {
            "adult": false,
            "gender": 2,
            "id": 85,
            "known_for": [
                {
                    "adult": false,
                    "backdrop_path": "/3rlclw8qHWEX2hYHNi7dAaW1e0.jpg",
                    "genre_ids": [
                        12,
                        14,
                        28
                    ],
                    "id": 22,
                    "media_type": "movie",
                    "original_language": "en",
                    "original_title": "Pirates of the Caribbean: The Curse of the Black Pearl",
                    "overview": "Jack Sparrow, a freewheeling 18th-century pirate, quarrels with a rival pirate bent on pillaging Port Royal. When the governor's daughter is kidnapped, Sparrow decides to help the girl's love save her.",
                    "poster_path": "/z8onk7LV9Mmw6zKz4hT6pzzvmvl.jpg",
                    "release_date": "2003-07-09",
                    "title": "Pirates of the Caribbean: The Curse of the Black Pearl",
                    "video": false,
                    "vote_average": 7.8,
                    "vote_count": 17262
                },
                {
                    "adult": false,
                    "backdrop_path": "/8Qsr8pvDL3s1jNZQ4HK1d1Xlvnh.jpg",
                    "genre_ids": [
                        12,
                        14
                    ],
                    "id": 259316,
                    "media_type": "movie",
                    "original_language": "en",
                    "original_title": "Fantastic Beasts and Where to Find Them",
                    "overview": "In 1926, Newt Scamander arrives at the Magical Congress of the United States of America with a magically expanded briefcase, which houses a number of dangerous creatures and their habitats. When the creatures escape from the briefcase, it sends the American wizarding authorities after Newt, and threatens to strain even further the state of magical and non-magical relations.",
                    "poster_path": "/fLsaFKExQt05yqjoAvKsmOMYvJR.jpg",
                    "release_date": "2016-11-16",
                    "title": "Fantastic Beasts and Where to Find Them",
                    "video": false,
                    "vote_average": 7.3,
                    "vote_count": 16465
                },
                {
                    "adult": false,
                    "backdrop_path": "/vv5a8u6e40kyH0Hp6HuamAgzRai.jpg",
                    "genre_ids": [
                        12,
                        14,
                        28
                    ],
                    "id": 58,
                    "media_type": "movie",
                    "original_language": "en",
                    "original_title": "Pirates of the Caribbean: Dead Man's Chest",
                    "overview": "Captain Jack Sparrow works his way out of a blood debt with the ghostly Davy Jones to avoid eternal damnation.",
                    "poster_path": "/uXEqmloGyP7UXAiphJUu2v2pcuE.jpg",
                    "release_date": "2006-07-06",
                    "title": "Pirates of the Caribbean: Dead Man's Chest",
                    "video": false,
                    "vote_average": 7.3,
                    "vote_count": 13285
                }
            ],
            "known_for_department": "Acting",
            "name": "Johnny Depp",
            "popularity": 90.622,
            "profile_path": "/ilPBHd3r3ahlipNQtjr4E3G04jJ.jpg"
        },
        {
            "adult": false,
            "gender": 2,
            "id": 1290466,
            "known_for": [
                {
                    "adult": false,
                    "backdrop_path": "/ddIkmH3TpR6XSc47jj0BrGK5Rbz.jpg",
                    "genre_ids": [
                        10752,
                        28,
                        18
                    ],
                    "id": 374720,
                    "media_type": "movie",
                    "original_language": "en",
                    "original_title": "Dunkirk",
                    "overview": "The story of the miraculous evacuation of Allied soldiers from Belgium, Britain, Canada and France, who were cut off and surrounded by the German army from the beaches and harbour of Dunkirk between May 26th and June 4th 1940 during World War II.",
                    "poster_path": "/ebSnODDg9lbsMIaWg2uAbjn7TO5.jpg",
                    "release_date": "2017-07-19",
                    "title": "Dunkirk",
                    "video": false,
                    "vote_average": 7.5,
                    "vote_count": 13986
                },
                {
                    "adult": false,
                    "backdrop_path": "/c6H7Z4u73ir3cIoCteuhJh7UCAR.jpg",
                    "genre_ids": [
                        878,
                        28
                    ],
                    "id": 524434,
                    "media_type": "movie",
                    "original_language": "en",
                    "original_title": "Eternals",
                    "overview": "The Eternals are a team of ancient aliens who have been living on Earth in secret for thousands of years. When an unexpected tragedy forces them out of the shadows, they are forced to reunite against mankind’s most ancient enemy, the Deviants.",
                    "poster_path": "/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg",
                    "release_date": "2021-11-03",
                    "title": "Eternals",
                    "video": false,
                    "vote_average": 7.1,
                    "vote_count": 5324
                },
                {
                    "backdrop_path": "/900tHlUYUkp7Ol04XFSoAaEIXcT.jpg",
                    "first_air_date": "2019-05-06",
                    "genre_ids": [
                        18
                    ],
                    "id": 87108,
                    "media_type": "tv",
                    "name": "Chernobyl",
                    "origin_country": [
                        "US"
                    ],
                    "original_language": "en",
                    "original_name": "Chernobyl",
                    "overview": "The true story of one of the worst man-made catastrophes in history: the catastrophic nuclear accident at Chernobyl. A tale of the brave men and women who sacrificed to save Europe from unimaginable disaster.",
                    "poster_path": "/hlLXt2tOPT6RRnjiUmoxyG1LTFi.jpg",
                    "vote_average": 8.6,
                    "vote_count": 3898
                }
            ],
            "known_for_department": "Acting",
            "name": "Barry Keoghan",
            "popularity": 86.051,
            "profile_path": "/15xPjrzSbtXlbQUhmLpQUil4tCN.jpg"
        },
        {
            "adult": false,
            "gender": 2,
            "id": 21523,
            "known_for": [
                {
                    "backdrop_path": "/dpzC0ACzwkVporKvzZGvNFOBFr6.jpg",
                    "first_air_date": "2005-03-27",
                    "genre_ids": [
                        18
                    ],
                    "id": 1416,
                    "media_type": "tv",
                    "name": "Grey's Anatomy",
                    "origin_country": [
                        "US"
                    ],
                    "original_language": "en",
                    "original_name": "Grey's Anatomy",
                    "overview": "Follows the personal and professional lives of a group of doctors at Seattle’s Grey Sloan Memorial Hospital.",
                    "poster_path": "/zPIug5giU8oug6Xes5K1sTfQJxY.jpg",
                    "vote_average": 8.3,
                    "vote_count": 7900
                },
                {
                    "adult": false,
                    "backdrop_path": "/bYimqNnizPUCnL5HOdoCW02IGmH.jpg",
                    "genre_ids": [
                        18,
                        35,
                        10749
                    ],
                    "id": 74643,
                    "media_type": "movie",
                    "original_language": "en",
                    "original_title": "The Artist",
                    "overview": "Hollywood, 1927: As silent movie star George Valentin wonders if the arrival of talking pictures will cause him to fade into oblivion, he sparks with Peppy Miller, a young dancer set for a big break.",
                    "poster_path": "/khtVL4abxYczXAWbo1wAz13CLx3.jpg",
                    "release_date": "2011-10-12",
                    "title": "The Artist",
                    "video": false,
                    "vote_average": 7.4,
                    "vote_count": 2678
                },
                {
                    "adult": false,
                    "backdrop_path": "/kP2DsgcIwuubm3WBvmxJcWFKzL2.jpg",
                    "genre_ids": [
                        53,
                        18,
                        9648
                    ],
                    "id": 3594,
                    "media_type": "movie",
                    "original_language": "en",
                    "original_title": "The Number 23",
                    "overview": "Walter Sparrow is an animal control officer that becomes obsessed with a mysterious book that seems to be based on his own life. As soon as he opens the book, he notices strange parallels between what he reads and what he's experienced. But now he's worried that a fictional murder might materialize.",
                    "poster_path": "/mlNU8a1SkTu6cKA4LAoZxfNPng0.jpg",
                    "release_date": "2007-02-23",
                    "title": "The Number 23",
                    "video": false,
                    "vote_average": 6.4,
                    "vote_count": 2664
                }
            ],
            "known_for_department": "Acting",
            "name": "Ed Lauter",
            "popularity": 80.224,
            "profile_path": "/5q1CNG6M4cKIrFjFmy7typjEPqt.jpg"
        },
    ],
    "total_pages": 500,
    "total_results": 10000
}
