import { Api } from "./api"
import { ApiConfiguration, mockApiConfiguration } from "./configuration/api"
import {
  CountriesConfiguration,
  mockCountriesConfiguration,
} from "./configuration/countries"
import { JobsConfiguration, mockJobsConfiguration } from "./configuration/jobs"
import {
  LanguagesConfiguration,
  mockLanguagesConfiguration,
} from "./configuration/languages"
import {
  PrimaryTranslations,
  mockPrimaryTranslations,
} from "./configuration/primary_translations"

export {
  ApiConfiguration,
  CountriesConfiguration,
  LanguagesConfiguration,
  PrimaryTranslations,
}

export default class Configuration extends Api {
  /**
   * Get the system wide configuration information.
   *
   * @link https://developers.themoviedb.org/3/configuration/get-api-configuration
   */
  async getApiConfiguration() {
    return await this.get<ApiConfiguration>(
      `/configuration`,
      {},
      mockApiConfiguration,
    )
  }

  /**
   * Get the list of countries (ISO 3166-1 tags) used throughout TMDB.
   *
   * https://developers.themoviedb.org/3/configuration/get-countries
   */
  async getCountries() {
    return await this.get<CountriesConfiguration>(
      `/configuration/countries`,
      {},
      mockCountriesConfiguration,
    )
  }

  /**
   * Get a list of the jobs and departments we use on TMDB.
   *
   * @link https://developers.themoviedb.org/3/configuration/get-jobs
   */
  async getJobs() {
    return await this.get<JobsConfiguration[]>(
      `/configuration/jobs`,
      {},
      mockJobsConfiguration,
    )
  }

  /**
   * Get the list of languages (ISO 639-1 tags) used throughout TMDB.
   *
   * @link https://developers.themoviedb.org/3/configuration/get-languages
   */
  async getLanguages() {
    return await this.get<LanguagesConfiguration>(
      `/configuration/jobs`,
      {},
      mockLanguagesConfiguration,
    )
  }

  /**
   * Get the list of languages (ISO 639-1 tags) used throughout TMDB.
   *
   * @link https://developers.themoviedb.org/3/configuration/get-languages
   */
  async getPrimaryTranslations() {
    return await this.get<PrimaryTranslations>(
      `/configuration/jobs`,
      {},
      mockPrimaryTranslations,
    )
  }

  /**
   * Get the list of timezones used throughout TMDB.
   *
   * @link https://developers.themoviedb.org/3/configuration/get-timezones
   */
  async getTimezones() {
    return await this.get<PrimaryTranslations>(
      `/configuration/timezones`,
      {},
      mockPrimaryTranslations,
    )
  }
}
