import { Api } from "./api"
import { Language } from "./configuration/languages"
import { TvShowsAiringToday, mockTvShowsAiringToday } from "./tv/airing_today"
import { LatestTvShow, mockLatestTvShow } from "./tv/latest"
import { TvShowsOnTheAir, mockTvShowsOnTheAir } from "./tv/on_the_air"
import { PopularTvShows, mockPopularTvShows } from "./tv/popular"
import { TopRatedTvShows, mockTopRatedTvShows } from "./tv/top_rated"

export default class TvShows extends Api {
  /**
   * Get the most newly created TV show. This is a live response and will
   * continuously change.
   *
   * @link https://developers.themoviedb.org/3/tv/get-latest-tv
   */
  async getLatest(params: { language?: Language } = {}) {
    return await this.get<LatestTvShow>(
      `/tv/latest`,
      { params },
      mockLatestTvShow,
    )
  }

  /**
   * Get a list of TV shows that are airing today. This query is purely day based as we do not currently support airing times.
   *
   * You can specify a timezone to offset the day calculation. Without a specified timezone, this query defaults to EST (Eastern Time UTC-05:00).
   *
   * @link https://developers.themoviedb.org/3/tv/get-tv-airing-today
   */
  async getTvShowsAiringToday(
    params: { language?: Language; page?: number } = {},
  ) {
    // TODO add timezone param
    return await this.get<TvShowsAiringToday>(
      `/tv/airing_today`,
      { params },
      mockTvShowsAiringToday,
    )
  }

  /**
   * Get a list of shows that are currently on the air.
   *
   * This query looks for any TV show that has an episode with an air date
   * in the next 7 days.
   *
   * @link https://developers.themoviedb.org/3/tv/get-tv-airing-today
   */
  async getTvShowsOnTheAir(
    params: { language?: Language; page?: number } = {},
  ) {
    return await this.get<TvShowsOnTheAir>(
      `/tv/on_the_air`,
      { params },
      mockTvShowsOnTheAir,
    )
  }

  /**
   * Get a list of the current popular TV shows on TMDB. This list updates daily.
   *
   * @link https://developers.themoviedb.org/3/tv/get-popular-tv-shows
   */
  async getPopular(params: { language?: Language; page?: number } = {}) {
    return await this.get<PopularTvShows>(
      `/tv/popular`,
      { params },
      mockPopularTvShows,
    )
  }

  /**
   * Get a list of the top rated TV shows on TMDB.
   *
   * @link https://developers.themoviedb.org/3/tv/get-top-rated-tv
   */
  async getTopRated(params: { language?: Language } = {}) {
    return await this.get<TopRatedTvShows>(
      `/tv/top_rated`,
      { params },
      mockTopRatedTvShows,
    )
  }
}
