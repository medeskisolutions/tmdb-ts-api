// cSpell:word tvrage
export interface PersonExternalIds {
  id: number
  freebase_mid: string | null
  freebase_id: string | null
  imdb_id: string
  tvrage_id: number | null
  facebook_id: string | null
  instagram_id: string | null
  twitter_id: string | string
}

export const mockPersonExternalIds = {
  id: 6384,
  freebase_mid: "/m/0479b",
  freebase_id: "/en/keanu_reeves",
  imdb_id: "nm0000206",
  tvrage_id: 19449,
  facebook_id: null,
  instagram_id: null,
  twitter_id: "",
}
