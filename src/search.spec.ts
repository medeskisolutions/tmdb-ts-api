import { Tmdb } from "."
import { mockCollectionsSearchResults } from "./search/collections"
import { mockCompaniesSearchResults } from "./search/companies"
import { mockKeywordsSearchResults } from "./search/keywords"
import { mockMoviesSearchResults } from "./search/movies"
import { mockMultiSearchResults } from "./search/multi"
import { mockPeopleSearchResults } from "./search/people"
import { mockTvShowsSearchResults } from "./search/tv-shows"

describe("search", () => {
  const tmdb = new Tmdb({
    api_key: "your-api-key",
    proxyURL: "http://localhost:3000/api/tmdb",
    mock: true,
  })

  it("searchCollections", async () => {
    const result = await tmdb.search.searchCollections("matrix")
    expect(result).toBe(mockCollectionsSearchResults)
  })

  it("searchCompanies", async () => {
    const result = await tmdb.search.searchCompanies("warner brothers")
    expect(result).toBe(mockCompaniesSearchResults)
  })

  it("searchKeywords", async () => {
    const result = await tmdb.search.searchKeywords("science fiction")
    expect(result).toBe(mockKeywordsSearchResults)
  })

  it("searchMovies", async () => {
    const result = await tmdb.search.searchMovies("matrix")
    expect(result).toBe(mockMoviesSearchResults)
  })

  it("searchMulti", async () => {
    const result = await tmdb.search.searchMulti("matrix")
    expect(result).toBe(mockMultiSearchResults)
  })

  it("searchPeople", async () => {
    const result = await tmdb.search.searchPeople("fisher")
    expect(result).toBe(mockPeopleSearchResults)
  })

  it("searchTvShows", async () => {
    const result = await tmdb.search.searchTvShows("shameless")
    expect(result).toBe(mockTvShowsSearchResults)
  })
})
