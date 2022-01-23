import { Tmdb } from "."

describe("movie", () => {
  const tmdb = new Tmdb()

  it("getDetails", async () => {
    const details = await tmdb.movie.getDetails("603")
    expect(details).toMatchSnapshot()
  })
})
