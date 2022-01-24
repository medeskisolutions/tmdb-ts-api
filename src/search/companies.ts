import { PaginatedResponse } from ".."

export interface CompanySearchResult {
  id: number
  logo_path: string | null
  name: string
  origin_country: string
}

export type CompaniesSearchResults = PaginatedResponse<CompanySearchResult>

export const mockCompaniesSearchResults: CompaniesSearchResults = {
  page: 1,
  results: [
    {
      id: 113412,
      logo_path: null,
      name: "Warner Brothers Music",
      origin_country: "",
    },
    {
      id: 104048,
      logo_path: null,
      name: "Warner Brothers Studios",
      origin_country: "",
    },
    {
      id: 141257,
      logo_path: null,
      name: "Warner Brothers/Seven Arts Animation",
      origin_country: "",
    },
    {
      id: 156180,
      logo_path: "/jBU647elfIKfCzdzgiMPK4TmKnr.png",
      name: "Warner Brothers International Television Production",
      origin_country: "DK",
    },
    {
      id: 4051,
      logo_path: "/cr7fvW3IZ1xQmlHTk0CHqoa038b.png",
      name: "Warner Bros./Seven Arts",
      origin_country: "US",
    },
    {
      id: 105378,
      logo_path: null,
      name: "Warner Bros. New Zealand",
      origin_country: "NZ",
    },
  ],
  total_pages: 1,
  total_results: 6,
}
