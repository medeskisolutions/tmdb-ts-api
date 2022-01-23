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

export interface TopRatedTvShows {
  page: number
  results: Result[]
  total_pages: number
  total_results: number
}

export const mockTopRatedTvShows: TopRatedTvShows = {
  page: 1,
  results: [
    {
      backdrop_path: null,
      first_air_date: '2004-05-10',
      genre_ids: [16, 35],
      id: 100,
      name: 'I Am Not an Animal',
      origin_country: ['GB'],
      original_language: 'en',
      original_name: 'I Am Not an Animal',
      overview:
        'I Am Not An Animal is an animated comedy series about the only six talking animals in the world, whose cosseted existence in a vivisection unit is turned upside down when they are liberated by animal rights activists.',
      popularity: 13.285,
      poster_path: '/qG59J1Q7rpBc1dvku4azbzcqo8h.jpg',
      vote_average: 9.2,
      vote_count: 688
    },
    {
      backdrop_path: '/q8eejQcg1bAqImEV8jh8RtBD4uH.jpg',
      first_air_date: '2021-11-06',
      genre_ids: [16, 10765, 10759, 18],
      id: 94605,
      name: 'Arcane',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Arcane',
      overview:
        'Amid the stark discord of twin cities Piltover and Zaun, two sisters fight on rival sides of a war between magic technologies and clashing convictions.',
      popularity: 401.684,
      poster_path: '/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg',
      vote_average: 9.1,
      vote_count: 1568
    },
    {
      backdrop_path: '/c8dm74uPCMA27iKAR1WnHKTsI9h.jpg',
      first_air_date: '2015-08-01',
      genre_ids: [10764],
      id: 77696,
      name: 'Run BTS!',
      origin_country: ['KR'],
      original_language: 'ko',
      original_name: '달려라 방탄!',
      overview:
        'Run BTS! is a South Korean show by the boy band BTS. The show is all about BTS doing activities, challenges and lots more.',
      popularity: 22.917,
      poster_path: '/xxv8Ibs8Anni6qrWkAf60rDsPCu.jpg',
      vote_average: 9.1,
      vote_count: 234
    },
    {
      backdrop_path: '/7gbmM2NWcqZONbp65HUWDf4wr0Q.jpg',
      first_air_date: '2019-07-12',
      genre_ids: [16, 18],
      id: 88040,
      name: 'Given',
      origin_country: ['JP'],
      original_language: 'ja',
      original_name: 'ギヴン',
      overview:
        "Tightly clutching his Gibson guitar, Mafuyu Satou steps out of his dark apartment to begin another day of his high school life. While taking a nap in a quiet spot on the gymnasium staircase, he has a chance encounter with fellow student Ritsuka Uenoyama, who berates him for letting his guitar's strings rust and break. Noticing Uenoyama's knowledge of the instrument, Satou pleads for him to fix it and to teach him how to play. Uenoyama eventually agrees and invites him to sit in on a jam session with his two band mates: bassist Haruki Nakayama and drummer Akihiko Kaji.",
      popularity: 48.353,
      poster_path: '/pdDCcAq8RNSZNk81PXYoHNUPHjn.jpg',
      vote_average: 9,
      vote_count: 569
    },
    {
      backdrop_path: '/hqFaSNICeh0Y3Hp0gtEIzDBmUVo.jpg',
      first_air_date: '2020-08-19',
      genre_ids: [10764],
      id: 106600,
      name: 'BTS In the SOOP',
      origin_country: ['KR'],
      original_language: 'ko',
      original_name: 'In the SOOP BTS편',
      overview:
        "'In the SOOP BTS ver.' is a reality show, portraying BTS members' everyday life, relaxation, and everything in between, away from the city life. A time of freedom and healing in a place for BTS, and BTS only.",
      popularity: 21.625,
      poster_path: '/eBsIEKqLMtktw2jpFPa9WTuGyPN.jpg',
      vote_average: 9,
      vote_count: 252
    },
    {
      backdrop_path: '/3C9PgPZxmECrNZGqOU5ssnESANT.jpg',
      first_air_date: '2021-07-01',
      genre_ids: [18],
      id: 125910,
      name: 'Young Royals',
      origin_country: ['SE'],
      original_language: 'sv',
      original_name: 'Young Royals',
      overview:
        'Prince Wilhelm adjusts to life at his prestigious new boarding school, Hillerska, but following his heart proves more challenging than anticipated.',
      popularity: 54.741,
      poster_path: '/6CHznbr0BF78ar16zJwTVRYLLOX.jpg',
      vote_average: 9,
      vote_count: 551
    },
    {
      backdrop_path: '/qSgBzXdu6QwVVeqOYOlHolkLRxZ.jpg',
      first_air_date: '2019-01-09',
      genre_ids: [16, 10759, 10765, 18],
      id: 83095,
      name: 'The Rising of the Shield Hero',
      origin_country: ['JP'],
      original_language: 'ja',
      original_name: '盾の勇者の成り上がり',
      overview:
        "Iwatani Naofumi was summoned into a parallel world along with 3 other people to become the world's Heroes. Each of the heroes respectively equipped with their own legendary equipment when summoned, Naofumi received the Legendary Shield as his weapon. Due to Naofumi's lack of charisma and experience he's labeled as the weakest, only to end up betrayed, falsely accused, and robbed by on the third day of adventure. Shunned by everyone from the king to peasants, Naofumi's thoughts were filled with nothing but vengeance and hatred. Thus, his destiny in a parallel World begins...",
      popularity: 63.926,
      poster_path: '/hm7AAWOMNxGzpGolgzNATgnyQbb.jpg',
      vote_average: 8.9,
      vote_count: 750
    },
    {
      backdrop_path: '/uAjMQlbPkVHmUahhCouANlHSDW2.jpg',
      first_air_date: '2019-01-11',
      genre_ids: [16, 9648, 10765, 10759, 18],
      id: 83097,
      name: 'The Promised Neverland',
      origin_country: ['JP'],
      original_language: 'ja',
      original_name: '約束のネバーランド',
      overview:
        'Surrounded by a forest and a gated entrance, the Grace Field House is inhabited by orphans happily living together as one big family, looked after by their "Mama," Isabella. Although they are required to take tests daily, the children are free to spend their time as they see fit, usually playing outside, as long as they do not venture too far from the orphanage — a rule they are expected to follow no matter what. However, all good times must come to an end, as every few months, a child is adopted and sent to live with their new family... never to be heard from again.\n\nHowever, the three oldest siblings have their suspicions about what is actually happening at the orphanage, and they are about to discover the cruel fate that awaits the children living at Grace Field, including the twisted nature of their beloved Mama.',
      popularity: 81.392,
      poster_path: '/oBgRCpAbtMpk1v8wfdsIph7lPQE.jpg',
      vote_average: 8.9,
      vote_count: 749
    },
    {
      backdrop_path: '/ohOrfdh80HVY5QBD8kV2FYYSVwF.jpg',
      first_air_date: '2021-01-10',
      genre_ids: [16, 10759],
      id: 110309,
      name: 'SK8 the Infinity',
      origin_country: ['JP'],
      original_language: 'ja',
      original_name: 'SK∞ エスケーエイト',
      overview:
        '"S" is a dangerous, top secret, no-holds-barred downhill skateboarding race down an abandoned mine. When avid skateboarder Reki takes Langa to the mountain where "S" is held, Langa, who\'s never been on a skateboard in his life, finds himself sucked into the world of "S", and…?!',
      popularity: 84.207,
      poster_path: '/ksb6QlSCsRLr3MNmxc8ojOOLK6V.jpg',
      vote_average: 8.9,
      vote_count: 180
    },
    {
      backdrop_path: '/1ejS56lC8db62IKVj1pTQlfAEQy.jpg',
      first_air_date: '2018-09-13',
      genre_ids: [10759, 16, 18, 10751],
      id: 123566,
      name: 'Metal Family',
      origin_country: ['RU'],
      original_language: 'ko',
      original_name: 'Metal Family',
      overview:
        'Metal Family follows the daily lives of Glam and Victoria, two metal fans that fell in love and had two children together, Dee and Heavy.',
      popularity: 67.739,
      poster_path: '/yovTSLBdNjXIVo8CPaPWFE5NcAw.jpg',
      vote_average: 8.9,
      vote_count: 262
    },
    {
      backdrop_path: '/2f8OLO6UYp78dIQMs0oi7ja15Bl.jpg',
      first_air_date: '2010-04-02',
      genre_ids: [16, 35, 18],
      id: 65648,
      name: 'Maid Sama!',
      origin_country: ['JP'],
      original_language: 'ja',
      original_name: '会長はメイド様！',
      overview:
        'Misaki Ayuzawa is the first female student council president at a once all-boys school turned co-ed. She rules the school with strict discipline demeanor. But she has a secret—she works at a maid cafe due to her families circumstances. One day the popular A-student and notorious heart breaker Takumi Usui finds out her secret and makes a deal with her to keep it hush from the school in exchange for spending some time with him.',
      popularity: 34.672,
      poster_path: '/igkn0M1bgMeATz59LShvVxZNdVd.jpg',
      vote_average: 8.9,
      vote_count: 426
    },
    {
      backdrop_path: '/ci7jTekDFEx6U48XUCl3vBMdrns.jpg',
      first_air_date: '2018-07-06',
      genre_ids: [10759, 18, 9648, 16],
      id: 80564,
      name: 'Banana Fish',
      origin_country: ['JP'],
      original_language: 'ja',
      original_name: 'バナナフィッシュ',
      overview:
        "Nature made Ash Lynx beautiful; nurture made him a cold ruthless killer. A runaway brought up as the adopted heir and sex toy of \"Papa\" Dino Golzine, Ash, now at the rebellious age of seventeen, forsakes the kingdom held out by the devil who raised him. But the hideous secret that drove Ash's older brother mad in Vietnam has suddenly fallen into Papa's insatiably ambitious hands—and it's exactly the wrong time for Eiji Okamura, a pure-hearted young photographer from Japan, to make Ash Lynx's acquaintance...",
      popularity: 57.616,
      poster_path: '/1UV5di9UIXwrpCW3xQ4RNli5hEV.jpg',
      vote_average: 8.9,
      vote_count: 645
    },
    {
      backdrop_path: '/x6jWDL4H9TaBLGEvyej0qKiirBU.jpg',
      first_air_date: '2014-10-10',
      genre_ids: [16, 35, 18],
      id: 61663,
      name: 'Your Lie in April',
      origin_country: ['JP'],
      original_language: 'ja',
      original_name: '四月は君の嘘',
      overview:
        "Kousei Arima was a genius pianist until his mother's sudden death took away his ability to play. Each day was dull for Kousei. But, then he meets a violinist named Kaori Miyazono who has an eccentric playing style. Can the heartfelt sounds of the girl's violin lead the boy to play the piano again?",
      popularity: 42.234,
      poster_path: '/IGbeFv5Ji4W0x530JcSHiQpamY.jpg',
      vote_average: 8.9,
      vote_count: 623
    },
    {
      backdrop_path: '/T2Oi1KTOOVhHygBK99yX4QHZg9.jpg',
      first_air_date: '2021-02-20',
      genre_ids: [10759, 35, 18],
      id: 117376,
      name: 'Vincenzo',
      origin_country: ['KR'],
      original_language: 'ko',
      original_name: '빈센조',
      overview:
        'Vincenzo Cassano is an Italian lawyer and Mafia consigliere who moves back to Korea due to a conflict within his organization. He ends up crossing paths with a sharp-tongued lawyer named Cha-young, and the two join forces in using villainous methods to take down villains who cannot be punished by the law.',
      popularity: 90.793,
      poster_path: '/dvXJgEDQXhL9Ouot2WkBHpQiHGd.jpg',
      vote_average: 8.9,
      vote_count: 427
    },
    {
      backdrop_path: '/dwEkNoGFZJWqiwJrnzVfmtmVhfU.jpg',
      first_air_date: '2019-01-11',
      genre_ids: [16, 35, 18],
      id: 84669,
      name: 'The Quintessential Quintuplets',
      origin_country: ['JP'],
      original_language: 'ja',
      original_name: '五等分の花嫁',
      overview:
        'Fuutarou Uesugi is a poor, antisocial ace student who one day meets the rich transfer student Itsuki Nakano. They argue but when Uesugi realizes he is to be her tutor, he tries to get on better terms. While trying to do so he meets four other girls.',
      popularity: 115.955,
      poster_path: '/mrahUSmFjae8UHtlOcZ58ytmAGu.jpg',
      vote_average: 8.9,
      vote_count: 476
    },
    {
      backdrop_path: '/mWwWhDiQWONiSS4Go12TTjNw0E5.jpg',
      first_air_date: '2016-10-06',
      genre_ids: [16, 35, 18],
      id: 68129,
      name: 'Yuri!!! on Ice',
      origin_country: ['JP'],
      original_language: 'ja',
      original_name: 'ユーリ!!! on ICE',
      overview:
        "Yūri Katsuki carried all of Japan's hopes on his shoulders to win at the Gran Prix Finale ice skating competition, but suffered a crushing defeat. He returns home to Kyushu and half feels like he wants to retire, and half feels like he wants to continue ice skating. Suddenly the five-time consecutive world championship ice skater Victor Nikiforov appears before him with Yuri Plisetsky, a young Russian figure skater who is already defeating his seniors. Victor and both Yuris take up the challenge on an unprecedented Gran Prix series.",
      popularity: 30.404,
      poster_path: '/oKVFf2uNCLMsovWBxAW14MmhHUm.jpg',
      vote_average: 8.9,
      vote_count: 454
    },
    {
      backdrop_path: '/rXXC22YUo31QfOsavy0jUbqdxFc.jpg',
      first_air_date: '2014-12-09',
      genre_ids: [10765, 10759, 16],
      id: 73055,
      name: 'Attack on Titan: No Regrets',
      origin_country: ['JP'],
      original_language: 'ja',
      original_name: '進撃の巨人 悔いなき選択',
      overview:
        "Many years before becoming the famed captain of the Survey Corps, a young Levi struggles to survive in the capital's garbage dump, the Underground. As the boss of his own criminal operation, Levi attempts to get by with meager earnings while aided by fellow criminals, Isabel Magnolia and Farlan Church. With little hope for the future, Levi accepts a deal from the anti-expedition faction leader Nicholas Lobov, who promises the trio citizenship aboveground if they are able to successfully assassinate Erwin Smith, a squad leader of the Survey Corps.",
      popularity: 162.153,
      poster_path: '/xGdz67d5WHIU7kIqVHO2TxIpmhZ.jpg',
      vote_average: 8.9,
      vote_count: 1839
    },
    {
      backdrop_path: '/sWghoJDqMRHDnkmk7fr3By5XPnf.jpg',
      first_air_date: '2019-10-05',
      genre_ids: [16, 35, 10765],
      id: 91801,
      name: 'Welcome to Demon School! Iruma-kun',
      origin_country: ['JP'],
      original_language: 'ja',
      original_name: '魔入りました！入間くん',
      overview:
        'Fourteen-year-old Suzuki Iruma has just been abandoned and sold to a demon by his irresponsible parents! Surprisingly, the next thing he knows he\'s living with the demon who has adopted him as his new grandson, and has been transferred into a school in the demon world where his new "demon" grandfather works as the principal. Thus begins the cowardly Iruma-kun\'s extraordinary school life among the otherworldly as he faces his true self, takes on challenges, and rises to become someone great.',
      popularity: 85.2,
      poster_path: '/aed6I1EMR4Lbk8bdikWrndbn5Og.jpg',
      vote_average: 8.9,
      vote_count: 158
    },
    {
      backdrop_path: '/zEQz64k0WD8SLd97MDCgauAsXQn.jpg',
      first_air_date: '2010-04-23',
      genre_ids: [16, 10759, 10762, 10751, 9648],
      id: 32118,
      name: 'Generator Rex',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Generator Rex',
      overview:
        'Generator Rex, an average teenager with the ability to turn his body into amazing machines, helps the secret organization Providence save the world from the nanite threat and dangerous EVO monsters.',
      popularity: 31.642,
      poster_path: '/fL7S22SWWOjJTgHEkk68VZ4Z8RO.jpg',
      vote_average: 8.8,
      vote_count: 245
    },
    {
      backdrop_path: '/3ILMlmC30QUnYkY3XEBOyJ82Dqu.jpg',
      first_air_date: '2016-04-03',
      genre_ids: [10759, 16],
      id: 65930,
      name: 'My Hero Academia',
      origin_country: ['JP'],
      original_language: 'ja',
      original_name: '僕のヒーローアカデミア',
      overview:
        "In a world where eighty percent of the population has some kind of super-powered Quirk, Izuku was unlucky enough to be born completely normal. But that won't stop him from enrolling in a prestigious hero academy. Now, he'll get his first taste of brutal rivalry from other schools as he braves the cutthroat, no-holds-barred provisional license exam.",
      popularity: 109.38,
      poster_path: '/phuYuzqWW9ru8EA3HVjE9W2Rr3M.jpg',
      vote_average: 8.8,
      vote_count: 3505
    }
  ],
  total_pages: 113,
  total_results: 2252
}
