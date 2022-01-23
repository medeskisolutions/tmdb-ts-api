export interface Result {
  description: string
  episode_count: number
  group_count: number
  id: string
  name: string
  network?: any
  type: number
}

export interface TvShowEpisodeGroups {
  results: Result[]
  id: number
}

export const mockTvShowEpisodeGroups: TvShowEpisodeGroups = {
  results: [
    {
      description: '',
      episode_count: 0,
      group_count: 0,
      id: '60331bb741ad8d004032b33c',
      name: 'temporada 9 completa 27 episodios',
      network: null,
      type: 2
    },
    {
      description: '',
      episode_count: 69,
      group_count: 9,
      id: '6054b076fab3fa003d4f10d7',
      name: 'Blu-ray Order',
      network: null,
      type: 3
    }
  ],
  id: 2316
}
