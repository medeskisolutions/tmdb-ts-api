export interface TvShowExternalIds {
  id: number
  imdb_id: string
  freebase_mid: string
  freebase_id: string
  tvdb_id: number
  tvrage_id: number
  facebook_id: string
  instagram_id: string
  twitter_id: string
}

export const mockTvShowExternalIds: TvShowExternalIds = {
  id: 2316,
  imdb_id: "tt0386676",
  freebase_mid: "/m/08jgk1",
  freebase_id: "/en/the_office",
  tvdb_id: 73244,
  tvrage_id: 6061,
  facebook_id: "TheOfficeTV",
  instagram_id: "theoffice",
  twitter_id: "theofficetv",
}
