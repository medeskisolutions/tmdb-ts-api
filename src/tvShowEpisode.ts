import { Api } from "./api"

export default class TvShowEpisode extends Api {
  getDetails(tvShowId: string, seasonNumber: number, episodeNumber: number) {}
  getAccountStates(
    tvShowId: string,
    seasonNumber: number,
    episodeNumber: number,
  ) {}
  async getChanges(episodeNumber: number) {}
  getCredits(tvShowId: string, seasonNumber: number, episodeNumber: number) {}
  getExternalIds(
    tvShowId: string,
    seasonNumber: number,
    episodeNumber: number,
  ) {}
  getImages(tvShowId: string, seasonNumber: number, episodeNumber: number) {}
  getTranslations(
    tvShowId: string,
    seasonNumber: number,
    episodeNumber: number,
  ) {}
  rate(tvShowId: string, seasonNumber: number, episodeNumber: number) {}
  deleteRating(tvShowId: string, seasonNumber: number, episodeNumber: number) {}
  getVideos(tvShowId: string, seasonNumber: number, episodeNumber: number) {}
}
