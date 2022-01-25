import axios, { AxiosInstance } from "axios"

export interface TmdbApiOptions {
  api_key: string
  proxyURL: string
  mock?: boolean
}

const createAxios = ({ api_key, proxyURL }: TmdbApiOptions) => {
  const baseURL =
    typeof window === "undefined" ? "https://api.themoviedb.org/3" : proxyURL
  return axios.create({ baseURL, params: { api_key } })
}

/**
 * API class for tmdb, includes get, post, patch, delete, etc...
 */
export class Api {
  axios: AxiosInstance

  constructor(options: TmdbApiOptions) {
    this.axios = createAxios(options)
  }

  async get<T>(uri: string, params: Object, mock: T): Promise<T> {
    const { data } = mock
      ? { data: mock }
      : await this.axios.get<T>(uri, { params })
    return data
  }
}
