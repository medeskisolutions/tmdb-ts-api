import { Tmdb } from "."

describe("movie", () => {
  const tmdb = new Tmdb({ mock: true })

  it("getDetails", async () => {
    const result = await tmdb.movie.getDetails(603)
    expect(result).toMatchSnapshot()
  })

  it.skip("getAccountState", async () => {})
  it.skip("getAlternativeTitles", async () => {})
  it.skip("getChanges", async () => {})

  it("getCredits", async () => {
    const result = await tmdb.movie.getCredits(603)
    expect(result).toMatchSnapshot()
  })

  it.skip("getExternalIds", async () => {})

  it("getImages", async () => {
    const result = await tmdb.movie.getImages(603)
    expect(result).toMatchSnapshot()
  })

  it("getKeywords", async () => {
    const result = await tmdb.movie.getKeywords(603)
    expect(result).toMatchSnapshot()
  })

  it.skip("getLists", async () => {})

  it("getRecommendations", async () => {
    const recommendations = await tmdb.movie.getRecommendations(603)
    expect(recommendations).toMatchSnapshot()
  })

  it.skip("getReleaseDates", async () => {})
  it.skip("getReview", async () => {})
  it.skip("getSimilarMovies", async () => {})
  it.skip("getTranslations", async () => {})
  it.skip("getVideos", async () => {})
  it.skip("getWatchProviders", async () => {})

  it.skip("rateMovie", async () => {})
  it.skip("deleteRating", async () => {})
})
