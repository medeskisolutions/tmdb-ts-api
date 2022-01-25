import { Api, TmdbApiOptions } from "./api"
import TvShowEpisode from "./tvShowEpisode"

export default class TvShowSeason extends Api {
  episode: TvShowEpisode

  constructor(options: TmdbApiOptions) {
    super(options)
    this.episode = new TvShowEpisode(options)
  }

  async getDetails(tvShowId: string, seasonNumber: number) {}
  async getAccountStates(tvShowId: string, seasonNumber: number) {}
  async getAggregateCredits(tvShowId: string, seasonNumber: number) {}
  async getChanges(seasonId: string) {}
  async getCredits(tvShowId: string, seasonNumber: number) {}
  async getExternalIds(tvShowId: string, seasonNumber: number) {}
  async getImages(tvShowId: string, seasonNumber: number) {}
  async getTranslations(tvShowId: string, seasonNumber: number) {}
  async getVideos(tvShowId: string, seasonNumber: number) {}
}
