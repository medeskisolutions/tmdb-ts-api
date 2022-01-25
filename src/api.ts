import axios, { AxiosInstance } from "axios"

export interface TmdbApiOptions {
  apiKey?: string
  proxyUrl?: string
  mock?: boolean
}

const createAxios = ({ apiKey, proxyUrl, mock }: TmdbApiOptions) => {
  if (mock) return axios.create()
  if (proxyUrl) return axios.create({ baseURL: proxyUrl })
  if (!apiKey) throw "API key not provided"

  return axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: { api_key: apiKey },
  })
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
