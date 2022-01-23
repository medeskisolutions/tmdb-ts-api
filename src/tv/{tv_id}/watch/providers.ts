import { Region } from '~/tmdb/region'

export interface WatchProvider {
  display_priority: number
  logo_path: string
  provider_id: number
  provider_name: string
}

export type WatchProviderResults = {
  [key in Region]?: {
    link: string
    flatrate: WatchProvider[]
    buy?: WatchProvider[]
    rent?: WatchProvider[]
    ads?: WatchProvider[]
  }
}

export interface TvShowWatchProviders {
  id: number
  results: WatchProviderResults
}

export const mockTvShowWatchProviders: TvShowWatchProviders = {
  id: 2316,
  results: {
    AE: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=AE',
      flatrate: [
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        }
      ]
    },
    AR: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=AR',
      flatrate: [
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        },
        {
          display_priority: 7,
          logo_path: '/pkAHkRhIq3Iu0ZlEhDzbguSlyZF.jpg',
          provider_id: 531,
          provider_name: 'Paramount Plus'
        },
        {
          display_priority: 8,
          logo_path: '/aS2zvJWn9mwiCOeaaCkIh4wleZS.jpg',
          provider_id: 384,
          provider_name: 'HBO Max'
        }
      ]
    },
    AT: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=AT',
      buy: [
        {
          display_priority: 11,
          logo_path: '/sVBEF7q7LqjHAWSnKwDbzmr2EMY.jpg',
          provider_id: 10,
          provider_name: 'Amazon Video'
        }
      ],
      flatrate: [
        {
          display_priority: 0,
          logo_path: '/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg',
          provider_id: 8,
          provider_name: 'Netflix'
        }
      ]
    },
    AU: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=AU',
      buy: [
        {
          display_priority: 0,
          logo_path: '/43Ykyf69e9Ca3jmTtefhINkw6PN.jpg',
          provider_id: 436,
          provider_name: 'Fetch TV'
        },
        {
          display_priority: 2,
          logo_path: '/q6tl6Ib6X5FT80RMlcDbexIo4St.jpg',
          provider_id: 2,
          provider_name: 'Apple iTunes'
        },
        {
          display_priority: 3,
          logo_path: '/p3Z12gKq2qvJaUOMeKNU2mzKVI9.jpg',
          provider_id: 3,
          provider_name: 'Google Play Movies'
        },
        {
          display_priority: 47,
          logo_path: '/paq2o2dIfQnxcERsVoq7Ys8KYz8.jpg',
          provider_id: 68,
          provider_name: 'Microsoft Store'
        }
      ],
      flatrate: [
        {
          display_priority: 0,
          logo_path: '/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg',
          provider_id: 8,
          provider_name: 'Netflix'
        },
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        },
        {
          display_priority: 3,
          logo_path: '/5XaVJgyS5FZcQSjLNaQj7Z8yY5r.jpg',
          provider_id: 385,
          provider_name: 'BINGE'
        },
        {
          display_priority: 6,
          logo_path: '/tzqnlrw6x1ipWEXbXvSqFH1Rupc.jpg',
          provider_id: 134,
          provider_name: 'Foxtel Now'
        },
        {
          display_priority: 8,
          logo_path: '/yyJuFDErO2IF65m8wgowkEzT7aS.jpg',
          provider_id: 21,
          provider_name: 'Stan'
        }
      ]
    },
    BB: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=BB',
      flatrate: [
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        }
      ]
    },
    BE: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=BE',
      flatrate: [
        {
          display_priority: 0,
          logo_path: '/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg',
          provider_id: 8,
          provider_name: 'Netflix'
        },
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        }
      ]
    },
    BG: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=BG',
      flatrate: [
        {
          display_priority: 0,
          logo_path: '/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg',
          provider_id: 8,
          provider_name: 'Netflix'
        },
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        }
      ]
    },
    BH: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=BH',
      flatrate: [
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        }
      ]
    },
    BM: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=BM',
      flatrate: [
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        }
      ]
    },
    BO: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=BO',
      flatrate: [
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        },
        {
          display_priority: 7,
          logo_path: '/pkAHkRhIq3Iu0ZlEhDzbguSlyZF.jpg',
          provider_id: 531,
          provider_name: 'Paramount Plus'
        },
        {
          display_priority: 8,
          logo_path: '/aS2zvJWn9mwiCOeaaCkIh4wleZS.jpg',
          provider_id: 384,
          provider_name: 'HBO Max'
        }
      ]
    },
    BR: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=BR',
      flatrate: [
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        },
        {
          display_priority: 7,
          logo_path: '/pkAHkRhIq3Iu0ZlEhDzbguSlyZF.jpg',
          provider_id: 531,
          provider_name: 'Paramount Plus'
        },
        {
          display_priority: 8,
          logo_path: '/aS2zvJWn9mwiCOeaaCkIh4wleZS.jpg',
          provider_id: 384,
          provider_name: 'HBO Max'
        },
        {
          display_priority: 17,
          logo_path: '/kUEY5arlNmaFWeKp6XaCkKafBry.jpg',
          provider_id: 582,
          provider_name: 'Paramount+ Amazon Channel'
        },
        {
          display_priority: 32,
          logo_path: '/dNAz0MMIPiqCD2axGIktXSFWmkz.jpg',
          provider_id: 484,
          provider_name: 'NOW'
        },
        {
          display_priority: 45,
          logo_path: '/2Ybxf5CHukSucAjhOmIkQ6hTmal.jpg',
          provider_id: 574,
          provider_name: 'Oi Play'
        }
      ]
    },
    BS: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=BS',
      flatrate: [
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        }
      ]
    },
    CA: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=CA',
      flatrate: [
        {
          display_priority: 0,
          logo_path: '/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg',
          provider_id: 8,
          provider_name: 'Netflix'
        }
      ],
      buy: [
        {
          display_priority: 2,
          logo_path: '/q6tl6Ib6X5FT80RMlcDbexIo4St.jpg',
          provider_id: 2,
          provider_name: 'Apple iTunes'
        },
        {
          display_priority: 3,
          logo_path: '/p3Z12gKq2qvJaUOMeKNU2mzKVI9.jpg',
          provider_id: 3,
          provider_name: 'Google Play Movies'
        }
      ]
    },
    CH: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=CH',
      flatrate: [
        {
          display_priority: 0,
          logo_path: '/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg',
          provider_id: 8,
          provider_name: 'Netflix'
        },
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        }
      ]
    },
    CL: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=CL',
      flatrate: [
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        },
        {
          display_priority: 7,
          logo_path: '/pkAHkRhIq3Iu0ZlEhDzbguSlyZF.jpg',
          provider_id: 531,
          provider_name: 'Paramount Plus'
        },
        {
          display_priority: 8,
          logo_path: '/aS2zvJWn9mwiCOeaaCkIh4wleZS.jpg',
          provider_id: 384,
          provider_name: 'HBO Max'
        },
        {
          display_priority: 9,
          logo_path: '/rgbalNWbAuhWklHH5JAnF53Wjey.jpg',
          provider_id: 339,
          provider_name: 'Movistar Play'
        }
      ]
    },
    CO: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=CO',
      flatrate: [
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        },
        {
          display_priority: 7,
          logo_path: '/pkAHkRhIq3Iu0ZlEhDzbguSlyZF.jpg',
          provider_id: 531,
          provider_name: 'Paramount Plus'
        },
        {
          display_priority: 8,
          logo_path: '/aS2zvJWn9mwiCOeaaCkIh4wleZS.jpg',
          provider_id: 384,
          provider_name: 'HBO Max'
        },
        {
          display_priority: 9,
          logo_path: '/rgbalNWbAuhWklHH5JAnF53Wjey.jpg',
          provider_id: 339,
          provider_name: 'Movistar Play'
        }
      ]
    },
    CR: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=CR',
      flatrate: [
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        },
        {
          display_priority: 7,
          logo_path: '/pkAHkRhIq3Iu0ZlEhDzbguSlyZF.jpg',
          provider_id: 531,
          provider_name: 'Paramount Plus'
        },
        {
          display_priority: 8,
          logo_path: '/aS2zvJWn9mwiCOeaaCkIh4wleZS.jpg',
          provider_id: 384,
          provider_name: 'HBO Max'
        }
      ]
    },
    CZ: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=CZ',
      flatrate: [
        {
          display_priority: 0,
          logo_path: '/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg',
          provider_id: 8,
          provider_name: 'Netflix'
        },
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        }
      ]
    },
    DE: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=DE',
      flatrate: [
        {
          display_priority: 0,
          logo_path: '/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg',
          provider_id: 8,
          provider_name: 'Netflix'
        }
      ],
      buy: [
        {
          display_priority: 2,
          logo_path: '/q6tl6Ib6X5FT80RMlcDbexIo4St.jpg',
          provider_id: 2,
          provider_name: 'Apple iTunes'
        },
        {
          display_priority: 3,
          logo_path: '/p3Z12gKq2qvJaUOMeKNU2mzKVI9.jpg',
          provider_id: 3,
          provider_name: 'Google Play Movies'
        },
        {
          display_priority: 11,
          logo_path: '/sVBEF7q7LqjHAWSnKwDbzmr2EMY.jpg',
          provider_id: 10,
          provider_name: 'Amazon Video'
        },
        {
          display_priority: 15,
          logo_path: '/mosNtwHNCqCmjk7n5odKgYYf2GI.jpg',
          provider_id: 20,
          provider_name: 'maxdome Store'
        },
        {
          display_priority: 28,
          logo_path: '/6QfNLK9toSu2bvsWN7A0sEsTz3j.jpg',
          provider_id: 178,
          provider_name: 'EntertainTV'
        },
        {
          display_priority: 47,
          logo_path: '/paq2o2dIfQnxcERsVoq7Ys8KYz8.jpg',
          provider_id: 68,
          provider_name: 'Microsoft Store'
        }
      ]
    },
    DK: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=DK',
      flatrate: [
        {
          display_priority: 0,
          logo_path: '/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg',
          provider_id: 8,
          provider_name: 'Netflix'
        },
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        },
        {
          display_priority: 8,
          logo_path: '/aS2zvJWn9mwiCOeaaCkIh4wleZS.jpg',
          provider_id: 384,
          provider_name: 'HBO Max'
        },
        {
          display_priority: 26,
          logo_path: '/okuStqHQL2ImgtNxNM40La91u3A.jpg',
          provider_id: 76,
          provider_name: 'Viaplay'
        },
        {
          display_priority: 36,
          logo_path: '/vAtH6Z6Oq7zCmEGS3Sdu08dxvYZ.jpg',
          provider_id: 118,
          provider_name: 'HBO'
        }
      ]
    },
    DO: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=DO',
      flatrate: [
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        }
      ]
    },
    DZ: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=DZ',
      flatrate: [
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        }
      ]
    },
    EC: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=EC',
      flatrate: [
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        },
        {
          display_priority: 7,
          logo_path: '/pkAHkRhIq3Iu0ZlEhDzbguSlyZF.jpg',
          provider_id: 531,
          provider_name: 'Paramount Plus'
        },
        {
          display_priority: 8,
          logo_path: '/aS2zvJWn9mwiCOeaaCkIh4wleZS.jpg',
          provider_id: 384,
          provider_name: 'HBO Max'
        }
      ]
    },
    EE: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=EE',
      flatrate: [
        {
          display_priority: 0,
          logo_path: '/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg',
          provider_id: 8,
          provider_name: 'Netflix'
        },
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        },
        {
          display_priority: 26,
          logo_path: '/okuStqHQL2ImgtNxNM40La91u3A.jpg',
          provider_id: 76,
          provider_name: 'Viaplay'
        }
      ]
    },
    EG: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=EG',
      flatrate: [
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        }
      ]
    },
    ES: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=ES',
      flatrate: [
        {
          display_priority: 0,
          logo_path: '/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg',
          provider_id: 8,
          provider_name: 'Netflix'
        },
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        }
      ]
    },
    FI: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=FI',
      flatrate: [
        {
          display_priority: 0,
          logo_path: '/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg',
          provider_id: 8,
          provider_name: 'Netflix'
        },
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        },
        {
          display_priority: 8,
          logo_path: '/aS2zvJWn9mwiCOeaaCkIh4wleZS.jpg',
          provider_id: 384,
          provider_name: 'HBO Max'
        },
        {
          display_priority: 26,
          logo_path: '/okuStqHQL2ImgtNxNM40La91u3A.jpg',
          provider_id: 76,
          provider_name: 'Viaplay'
        },
        {
          display_priority: 27,
          logo_path: '/tWRRzWXY5G9Zw3FbbEFADBPu0yL.jpg',
          provider_id: 540,
          provider_name: 'Elisa Viihde'
        },
        {
          display_priority: 36,
          logo_path: '/vAtH6Z6Oq7zCmEGS3Sdu08dxvYZ.jpg',
          provider_id: 118,
          provider_name: 'HBO'
        }
      ]
    },
    FR: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=FR',
      buy: [
        {
          display_priority: 2,
          logo_path: '/q6tl6Ib6X5FT80RMlcDbexIo4St.jpg',
          provider_id: 2,
          provider_name: 'Apple iTunes'
        },
        {
          display_priority: 47,
          logo_path: '/paq2o2dIfQnxcERsVoq7Ys8KYz8.jpg',
          provider_id: 68,
          provider_name: 'Microsoft Store'
        }
      ],
      flatrate: [
        {
          display_priority: 0,
          logo_path: '/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg',
          provider_id: 8,
          provider_name: 'Netflix'
        },
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        },
        {
          display_priority: 29,
          logo_path: '/poXZMWlolHPlENKesObjzufzp7A.jpg',
          provider_id: 564,
          provider_name: 'SALTO'
        }
      ]
    },
    GB: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=GB',
      buy: [
        {
          display_priority: 2,
          logo_path: '/q6tl6Ib6X5FT80RMlcDbexIo4St.jpg',
          provider_id: 2,
          provider_name: 'Apple iTunes'
        },
        {
          display_priority: 3,
          logo_path: '/p3Z12gKq2qvJaUOMeKNU2mzKVI9.jpg',
          provider_id: 3,
          provider_name: 'Google Play Movies'
        },
        {
          display_priority: 8,
          logo_path: '/pZgeSWpfvD59x6sY6stT5c6uc2h.jpg',
          provider_id: 130,
          provider_name: 'Sky Store'
        },
        {
          display_priority: 11,
          logo_path: '/sVBEF7q7LqjHAWSnKwDbzmr2EMY.jpg',
          provider_id: 10,
          provider_name: 'Amazon Video'
        },
        {
          display_priority: 47,
          logo_path: '/paq2o2dIfQnxcERsVoq7Ys8KYz8.jpg',
          provider_id: 68,
          provider_name: 'Microsoft Store'
        }
      ],
      flatrate: [
        {
          display_priority: 0,
          logo_path: '/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg',
          provider_id: 8,
          provider_name: 'Netflix'
        },
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 9,
          provider_name: 'Amazon Prime Video'
        },
        {
          display_priority: 8,
          logo_path: '/iWEiQXKaRtHqelZKtgUjyrYoWa6.jpg',
          provider_id: 29,
          provider_name: 'Sky Go'
        },
        {
          display_priority: 9,
          logo_path: '/bzWGPi4Jxdzm9ehkT9ZDuiwj1Hp.jpg',
          provider_id: 39,
          provider_name: 'Now TV'
        },
        {
          display_priority: 63,
          logo_path: '/2OTvHZ5EjTd55bC0LF8KzQlkzgJ.jpg',
          provider_id: 594,
          provider_name: 'Virgin TV Go'
        }
      ]
    },
    GF: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=GF',
      flatrate: [
        {
          display_priority: 0,
          logo_path: '/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg',
          provider_id: 8,
          provider_name: 'Netflix'
        },
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        }
      ]
    },
    GI: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=GI',
      flatrate: [
        {
          display_priority: 0,
          logo_path: '/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg',
          provider_id: 8,
          provider_name: 'Netflix'
        },
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        }
      ]
    },
    GR: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=GR',
      flatrate: [
        {
          display_priority: 0,
          logo_path: '/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg',
          provider_id: 8,
          provider_name: 'Netflix'
        },
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        }
      ]
    },
    GT: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=GT',
      flatrate: [
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        },
        {
          display_priority: 7,
          logo_path: '/pkAHkRhIq3Iu0ZlEhDzbguSlyZF.jpg',
          provider_id: 531,
          provider_name: 'Paramount Plus'
        },
        {
          display_priority: 8,
          logo_path: '/aS2zvJWn9mwiCOeaaCkIh4wleZS.jpg',
          provider_id: 384,
          provider_name: 'HBO Max'
        }
      ]
    },
    HK: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=HK',
      flatrate: [
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        }
      ]
    },
    HN: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=HN',
      flatrate: [
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        },
        {
          display_priority: 7,
          logo_path: '/pkAHkRhIq3Iu0ZlEhDzbguSlyZF.jpg',
          provider_id: 531,
          provider_name: 'Paramount Plus'
        },
        {
          display_priority: 8,
          logo_path: '/aS2zvJWn9mwiCOeaaCkIh4wleZS.jpg',
          provider_id: 384,
          provider_name: 'HBO Max'
        }
      ]
    },
    HR: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=HR',
      flatrate: [
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        }
      ]
    },
    HU: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=HU',
      flatrate: [
        {
          display_priority: 0,
          logo_path: '/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg',
          provider_id: 8,
          provider_name: 'Netflix'
        },
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        }
      ]
    },
    ID: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=ID',
      flatrate: [
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        }
      ]
    },
    IE: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=IE',
      flatrate: [
        {
          display_priority: 0,
          logo_path: '/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg',
          provider_id: 8,
          provider_name: 'Netflix'
        },
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        },
        {
          display_priority: 8,
          logo_path: '/iWEiQXKaRtHqelZKtgUjyrYoWa6.jpg',
          provider_id: 29,
          provider_name: 'Sky Go'
        },
        {
          display_priority: 9,
          logo_path: '/bzWGPi4Jxdzm9ehkT9ZDuiwj1Hp.jpg',
          provider_id: 39,
          provider_name: 'Now TV'
        }
      ],
      buy: [
        {
          display_priority: 8,
          logo_path: '/pZgeSWpfvD59x6sY6stT5c6uc2h.jpg',
          provider_id: 130,
          provider_name: 'Sky Store'
        }
      ]
    },
    IN: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=IN',
      flatrate: [
        {
          display_priority: 0,
          logo_path: '/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg',
          provider_id: 8,
          provider_name: 'Netflix'
        },
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        }
      ]
    },
    IS: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=IS',
      flatrate: [
        {
          display_priority: 0,
          logo_path: '/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg',
          provider_id: 8,
          provider_name: 'Netflix'
        },
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        }
      ]
    },
    IT: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=IT',
      flatrate: [
        {
          display_priority: 0,
          logo_path: '/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg',
          provider_id: 8,
          provider_name: 'Netflix'
        },
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        }
      ]
    },
    JM: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=JM',
      flatrate: [
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        }
      ]
    },
    JO: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=JO',
      flatrate: [
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        }
      ]
    },
    JP: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=JP',
      flatrate: [
        {
          display_priority: 6,
          logo_path: '/giwM8XX4V2AQb9vsoN7yti82tKK.jpg',
          provider_id: 15,
          provider_name: 'Hulu'
        }
      ]
    },
    KR: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=KR',
      buy: [
        {
          display_priority: 6,
          logo_path: '/gvykO994iHcqL1Cgpii4RJCtDud.jpg',
          provider_id: 96,
          provider_name: 'Naver Store'
        }
      ],
      rent: [
        {
          display_priority: 6,
          logo_path: '/gvykO994iHcqL1Cgpii4RJCtDud.jpg',
          provider_id: 96,
          provider_name: 'Naver Store'
        }
      ],
      flatrate: [
        {
          display_priority: 4,
          logo_path: '/cNi4Nv5EPsnvf5WmgwhfWDsdMUd.jpg',
          provider_id: 97,
          provider_name: 'Watcha'
        }
      ]
    },
    KW: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=KW',
      flatrate: [
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        }
      ]
    },
    LT: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=LT',
      flatrate: [
        {
          display_priority: 0,
          logo_path: '/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg',
          provider_id: 8,
          provider_name: 'Netflix'
        },
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        },
        {
          display_priority: 26,
          logo_path: '/okuStqHQL2ImgtNxNM40La91u3A.jpg',
          provider_id: 76,
          provider_name: 'Viaplay'
        }
      ]
    },
    LV: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=LV',
      flatrate: [
        {
          display_priority: 0,
          logo_path: '/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg',
          provider_id: 8,
          provider_name: 'Netflix'
        },
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        },
        {
          display_priority: 26,
          logo_path: '/okuStqHQL2ImgtNxNM40La91u3A.jpg',
          provider_id: 76,
          provider_name: 'Viaplay'
        }
      ]
    },
    LY: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=LY',
      flatrate: [
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        }
      ]
    },
    MA: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=MA',
      flatrate: [
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        }
      ]
    },
    MC: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=MC',
      flatrate: [
        {
          display_priority: 0,
          logo_path: '/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg',
          provider_id: 8,
          provider_name: 'Netflix'
        },
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        }
      ]
    },
    MD: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=MD',
      flatrate: [
        {
          display_priority: 0,
          logo_path: '/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg',
          provider_id: 8,
          provider_name: 'Netflix'
        },
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        }
      ]
    },
    MX: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=MX',
      flatrate: [
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        },
        {
          display_priority: 7,
          logo_path: '/pkAHkRhIq3Iu0ZlEhDzbguSlyZF.jpg',
          provider_id: 531,
          provider_name: 'Paramount Plus'
        },
        {
          display_priority: 8,
          logo_path: '/aS2zvJWn9mwiCOeaaCkIh4wleZS.jpg',
          provider_id: 384,
          provider_name: 'HBO Max'
        },
        {
          display_priority: 17,
          logo_path: '/kUEY5arlNmaFWeKp6XaCkKafBry.jpg',
          provider_id: 582,
          provider_name: 'Paramount+ Amazon Channel'
        }
      ]
    },
    MY: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=MY',
      flatrate: [
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        }
      ]
    },
    NL: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=NL',
      flatrate: [
        {
          display_priority: 0,
          logo_path: '/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg',
          provider_id: 8,
          provider_name: 'Netflix'
        },
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        },
        {
          display_priority: 5,
          logo_path: '/tEILg8I5fsDtVIWv8n6Flf4XO3N.jpg',
          provider_id: 72,
          provider_name: 'Videoland'
        },
        {
          display_priority: 34,
          logo_path: '/9sOKDL0W3HeUFAY8kCJGz9kadhC.jpg',
          provider_id: 563,
          provider_name: 'KPN'
        }
      ],
      buy: [
        {
          display_priority: 47,
          logo_path: '/paq2o2dIfQnxcERsVoq7Ys8KYz8.jpg',
          provider_id: 68,
          provider_name: 'Microsoft Store'
        }
      ]
    },
    NO: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=NO',
      flatrate: [
        {
          display_priority: 0,
          logo_path: '/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg',
          provider_id: 8,
          provider_name: 'Netflix'
        },
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        },
        {
          display_priority: 8,
          logo_path: '/aS2zvJWn9mwiCOeaaCkIh4wleZS.jpg',
          provider_id: 384,
          provider_name: 'HBO Max'
        },
        {
          display_priority: 26,
          logo_path: '/okuStqHQL2ImgtNxNM40La91u3A.jpg',
          provider_id: 76,
          provider_name: 'Viaplay'
        },
        {
          display_priority: 35,
          logo_path: '/2SZVMASyXPKC7sEBHgmTjCMySNG.jpg',
          provider_id: 578,
          provider_name: 'Strim'
        },
        {
          display_priority: 36,
          logo_path: '/vAtH6Z6Oq7zCmEGS3Sdu08dxvYZ.jpg',
          provider_id: 118,
          provider_name: 'HBO'
        }
      ]
    },
    NZ: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=NZ',
      flatrate: [
        {
          display_priority: 0,
          logo_path: '/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg',
          provider_id: 8,
          provider_name: 'Netflix'
        },
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        },
        {
          display_priority: 2,
          logo_path: '/wRfIw4x22z9Zag6DZ8qLYwzpjOA.jpg',
          provider_id: 273,
          provider_name: 'Neon TV'
        }
      ]
    },
    OM: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=OM',
      flatrate: [
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        }
      ]
    },
    PA: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=PA',
      flatrate: [
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        }
      ]
    },
    PE: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=PE',
      flatrate: [
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        },
        {
          display_priority: 7,
          logo_path: '/pkAHkRhIq3Iu0ZlEhDzbguSlyZF.jpg',
          provider_id: 531,
          provider_name: 'Paramount Plus'
        },
        {
          display_priority: 8,
          logo_path: '/aS2zvJWn9mwiCOeaaCkIh4wleZS.jpg',
          provider_id: 384,
          provider_name: 'HBO Max'
        }
      ]
    },
    PH: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=PH',
      flatrate: [
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        }
      ]
    },
    PL: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=PL',
      flatrate: [
        {
          display_priority: 0,
          logo_path: '/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg',
          provider_id: 8,
          provider_name: 'Netflix'
        },
        {
          display_priority: 1,
          logo_path: '/49zBTsyFqE0u2hO8NxlyVmjFZDH.jpg',
          provider_id: 250,
          provider_name: 'Horizon'
        },
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        },
        {
          display_priority: 13,
          logo_path: '/lfjI3SjcFS4prMWggqUKWACsrWv.jpg',
          provider_id: 505,
          provider_name: 'Player'
        },
        {
          display_priority: 26,
          logo_path: '/okuStqHQL2ImgtNxNM40La91u3A.jpg',
          provider_id: 76,
          provider_name: 'Viaplay'
        }
      ]
    },
    PT: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=PT',
      flatrate: [
        {
          display_priority: 0,
          logo_path: '/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg',
          provider_id: 8,
          provider_name: 'Netflix'
        },
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        }
      ]
    },
    PY: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=PY',
      flatrate: [
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        },
        {
          display_priority: 7,
          logo_path: '/pkAHkRhIq3Iu0ZlEhDzbguSlyZF.jpg',
          provider_id: 531,
          provider_name: 'Paramount Plus'
        },
        {
          display_priority: 8,
          logo_path: '/aS2zvJWn9mwiCOeaaCkIh4wleZS.jpg',
          provider_id: 384,
          provider_name: 'HBO Max'
        }
      ]
    },
    QA: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=QA',
      flatrate: [
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        }
      ]
    },
    RO: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=RO',
      flatrate: [
        {
          display_priority: 0,
          logo_path: '/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg',
          provider_id: 8,
          provider_name: 'Netflix'
        },
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        }
      ]
    },
    RU: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=RU',
      buy: [
        {
          display_priority: 3,
          logo_path: '/As8vTHasikgyhZPkSOI9QzAst4L.jpg',
          provider_id: 115,
          provider_name: 'Okko'
        },
        {
          display_priority: 15,
          logo_path: '/4AWMLvjQUQNmU3CkpLp7FSSIyZX.jpg',
          provider_id: 501,
          provider_name: 'Wink'
        }
      ],
      flatrate: [
        {
          display_priority: 0,
          logo_path: '/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg',
          provider_id: 8,
          provider_name: 'Netflix'
        },
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        },
        {
          display_priority: 30,
          logo_path: '/hH99ng4jQdmt6qFzoie8SyoUiR8.jpg',
          provider_id: 117,
          provider_name: 'Kinopoisk'
        }
      ]
    },
    SA: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=SA',
      flatrate: [
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        }
      ]
    },
    SE: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=SE',
      flatrate: [
        {
          display_priority: 0,
          logo_path: '/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg',
          provider_id: 8,
          provider_name: 'Netflix'
        },
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        },
        {
          display_priority: 8,
          logo_path: '/aS2zvJWn9mwiCOeaaCkIh4wleZS.jpg',
          provider_id: 384,
          provider_name: 'HBO Max'
        },
        {
          display_priority: 26,
          logo_path: '/okuStqHQL2ImgtNxNM40La91u3A.jpg',
          provider_id: 76,
          provider_name: 'Viaplay'
        },
        {
          display_priority: 27,
          logo_path: '/wmuCrsSBQ3iLK9LRqp5PlpyCQyu.jpg',
          provider_id: 497,
          provider_name: 'Comhem Play'
        },
        {
          display_priority: 36,
          logo_path: '/vAtH6Z6Oq7zCmEGS3Sdu08dxvYZ.jpg',
          provider_id: 118,
          provider_name: 'HBO'
        }
      ]
    },
    SG: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=SG',
      flatrate: [
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        }
      ]
    },
    SK: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=SK',
      flatrate: [
        {
          display_priority: 0,
          logo_path: '/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg',
          provider_id: 8,
          provider_name: 'Netflix'
        },
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        }
      ]
    },
    SM: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=SM',
      flatrate: [
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        }
      ]
    },
    SV: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=SV',
      flatrate: [
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        },
        {
          display_priority: 8,
          logo_path: '/aS2zvJWn9mwiCOeaaCkIh4wleZS.jpg',
          provider_id: 384,
          provider_name: 'HBO Max'
        }
      ]
    },
    TH: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=TH',
      flatrate: [
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        }
      ]
    },
    TN: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=TN',
      flatrate: [
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        }
      ]
    },
    TR: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=TR',
      flatrate: [
        {
          display_priority: 0,
          logo_path: '/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg',
          provider_id: 8,
          provider_name: 'Netflix'
        },
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        }
      ]
    },
    TW: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=TW',
      flatrate: [
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        }
      ]
    },
    US: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=US',
      flatrate: [
        {
          display_priority: 5,
          logo_path: '/2wPRZit7b8u79GsqTdygmGL6kBW.jpg',
          provider_id: 257,
          provider_name: 'fuboTV'
        },
        {
          display_priority: 10,
          logo_path: '/7cOEzL1ogV1hQV9a65qAeG7dK6c.jpg',
          provider_id: 387,
          provider_name: 'Peacock Premium'
        },
        {
          display_priority: 53,
          logo_path: '/qZdEeINwQotbr1Rq15dL5G2BaAh.jpg',
          provider_id: 358,
          provider_name: 'DIRECTV'
        },
        {
          display_priority: 103,
          logo_path: '/maVzhbLzY1EZs9P0ZBB067Vy4VW.jpg',
          provider_id: 299,
          provider_name: 'Sling TV'
        }
      ],
      ads: [
        {
          display_priority: 9,
          logo_path: '/d9cPwjnMYUEdjsfPuX96akc807z.jpg',
          provider_id: 386,
          provider_name: 'Peacock'
        },
        {
          display_priority: 10,
          logo_path: '/7cOEzL1ogV1hQV9a65qAeG7dK6c.jpg',
          provider_id: 387,
          provider_name: 'Peacock Premium'
        }
      ],
      buy: [
        {
          display_priority: 2,
          logo_path: '/q6tl6Ib6X5FT80RMlcDbexIo4St.jpg',
          provider_id: 2,
          provider_name: 'Apple iTunes'
        },
        {
          display_priority: 3,
          logo_path: '/p3Z12gKq2qvJaUOMeKNU2mzKVI9.jpg',
          provider_id: 3,
          provider_name: 'Google Play Movies'
        },
        {
          display_priority: 11,
          logo_path: '/sVBEF7q7LqjHAWSnKwDbzmr2EMY.jpg',
          provider_id: 10,
          provider_name: 'Amazon Video'
        },
        {
          display_priority: 36,
          logo_path: '/hBdCQamqj7J2VPZNbqf0wiLBous.jpg',
          provider_id: 7,
          provider_name: 'Vudu'
        },
        {
          display_priority: 47,
          logo_path: '/paq2o2dIfQnxcERsVoq7Ys8KYz8.jpg',
          provider_id: 68,
          provider_name: 'Microsoft Store'
        }
      ]
    },
    UY: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=UY',
      flatrate: [
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        },
        {
          display_priority: 7,
          logo_path: '/pkAHkRhIq3Iu0ZlEhDzbguSlyZF.jpg',
          provider_id: 531,
          provider_name: 'Paramount Plus'
        },
        {
          display_priority: 8,
          logo_path: '/aS2zvJWn9mwiCOeaaCkIh4wleZS.jpg',
          provider_id: 384,
          provider_name: 'HBO Max'
        }
      ]
    },
    VE: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=VE',
      flatrate: [
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        },
        {
          display_priority: 7,
          logo_path: '/pkAHkRhIq3Iu0ZlEhDzbguSlyZF.jpg',
          provider_id: 531,
          provider_name: 'Paramount Plus'
        },
        {
          display_priority: 8,
          logo_path: '/aS2zvJWn9mwiCOeaaCkIh4wleZS.jpg',
          provider_id: 384,
          provider_name: 'HBO Max'
        }
      ]
    },
    YE: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=YE',
      flatrate: [
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        }
      ]
    },
    ZA: {
      link: 'https://www.themoviedb.org/tv/2316-the-office/watch?locale=ZA',
      flatrate: [
        {
          display_priority: 0,
          logo_path: '/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg',
          provider_id: 8,
          provider_name: 'Netflix'
        },
        {
          display_priority: 1,
          logo_path: '/68MNrwlkpF7WnmNPXLah69CR5cb.jpg',
          provider_id: 119,
          provider_name: 'Amazon Prime Video'
        }
      ]
    }
  }
}
