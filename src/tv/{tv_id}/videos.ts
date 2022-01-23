export interface Result {
  iso_639_1: string
  iso_3166_1: string
  name: string
  key: string
  site: string
  size: number
  type: string
  official: boolean
  published_at: string
  id: string
}

export interface TvShowVideos {
  id: number
  results: Result[]
}

export const mockTvShowVideos: TvShowVideos = {
  id: 2316,
  results: [
    {
      iso_639_1: 'en',
      iso_3166_1: 'US',
      name: 'The Office Trailer (2017)',
      key: 'LHOtME2DL4g',
      site: 'YouTube',
      size: 1080,
      type: 'Trailer',
      official: false,
      published_at: '2017-10-18T05:19:26.000Z',
      id: '5fb15dbde24e3a0040e85d65'
    }
  ]
}
