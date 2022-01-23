import { tmdbGet } from ".";
import { ApiConfiguration, mockApiConfiguration } from "./configuration/api";
import {
  CountriesConfiguration,
  mockCountriesConfiguration,
} from "./configuration/countries";
import { JobsConfiguration, mockJobsConfiguration } from "./configuration/jobs";
import {
  LanguagesConfiguration,
  mockLanguagesConfiguration,
} from "./configuration/languages";
import {
  PrimaryTranslations,
  mockPrimaryTranslations,
} from "./configuration/primary_translations";

export default {
  /**
   * Get the system wide configuration information.
   *
   * @link https://developers.themoviedb.org/3/configuration/get-api-configuration
   */
  getApiConfiguration: async () => {
    return await tmdbGet<ApiConfiguration>(
      `/configuration`,
      {},
      mockApiConfiguration
    );
  },

  /**
   * Get the list of countries (ISO 3166-1 tags) used throughout TMDB.
   *
   * https://developers.themoviedb.org/3/configuration/get-countries
   */
  getCountries: async () => {
    return await tmdbGet<CountriesConfiguration>(
      `/configuration/countries`,
      {},
      mockCountriesConfiguration
    );
  },

  /**
   * Get a list of the jobs and departments we use on TMDB.
   *
   * @link https://developers.themoviedb.org/3/configuration/get-jobs
   */
  getJobs: async () => {
    return await tmdbGet<JobsConfiguration[]>(
      `/configuration/jobs`,
      {},
      mockJobsConfiguration
    );
  },

  /**
   * Get the list of languages (ISO 639-1 tags) used throughout TMDB.
   *
   * @link https://developers.themoviedb.org/3/configuration/get-languages
   */
  getLanguages: async () => {
    return await tmdbGet<LanguagesConfiguration>(
      `/configuration/jobs`,
      {},
      mockLanguagesConfiguration
    );
  },

  /**
   * Get the list of languages (ISO 639-1 tags) used throughout TMDB.
   *
   * @link https://developers.themoviedb.org/3/configuration/get-languages
   */
  getPrimaryTranslations: async () => {
    return await tmdbGet<PrimaryTranslations>(
      `/configuration/jobs`,
      {},
      mockPrimaryTranslations
    );
  },

  /**
   * Get the list of timezones used throughout TMDB.
   *
   * @link https://developers.themoviedb.org/3/configuration/get-timezones
   */
  getTimezones: async () => {
    return await tmdbGet<PrimaryTranslations>(
      `/configuration/timezones`,
      {},
      mockPrimaryTranslations
    );
  },
};
