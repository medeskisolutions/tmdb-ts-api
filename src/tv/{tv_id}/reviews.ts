export interface AuthorDetails {
  name: string
  username: string
  avatar_path?: any
  rating?: any
}

export interface Result {
  author: string
  author_details: AuthorDetails
  content: string
  created_at: string
  id: string
  updated_at: string
  url: string
}

export interface TvShowReviews {
  id: number
  page: number
  results: Result[]
  total_pages: number
  total_results: number
}

export const mockTvShowReviews: TvShowReviews = {
  id: 2316,
  page: 1,
  results: [
    {
      author: 'JSayer',
      author_details: {
        name: 'JSayer',
        username: 'jsayer7',
        avatar_path: null,
        rating: null
      },
      content:
        'Such an incredible show. Probably my favorite show of all time. The characters and office environment is easy to relate to. The Dwight and Jim rivalry is fantastic.',
      created_at: '2020-02-03T22:39:35.111Z',
      id: '5e38a127ac8e6b0011c7aca5',
      updated_at: '2021-06-23T15:58:33.740Z',
      url: 'https://www.themoviedb.org/review/5e38a127ac8e6b0011c7aca5'
    }
  ],
  total_pages: 1,
  total_results: 1
}
