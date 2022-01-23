import tvShowEpisode from './tvShowEpisode'

export default {
  getDetails: async (tvShowId: string, seasonNumber: number) => {},
  getAccountStates: async (tvShowId: string, seasonNumber: number) => {},
  getAggregateCredits: async (tvShowId: string, seasonNumber: number) => {},
  getChanges: async (seasonId: string) => {},
  getCredits: async (tvShowId: string, seasonNumber: number) => {},
  getExternalIds: async (tvShowId: string, seasonNumber: number) => {},
  getImages: async (tvShowId: string, seasonNumber: number) => {},
  getTranslations: async (tvShowId: string, seasonNumber: number) => {},
  getVideos: async (tvShowId: string, seasonNumber: number) => {},

  episode: tvShowEpisode
}
