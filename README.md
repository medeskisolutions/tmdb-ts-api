# The Movie Databse TypeScript API

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)

**WARNING:** This is a work-in-progress (`v0.0.x`). Once `v1` is released I'll
consider the API stable. For now, there may be lots of changes.

## Upcoming

- [ ] Convert to monorepo
  - [ ] Add changeset CLI to monorepo
- [ ] Caching
  - [ ] Add image pre-render
  - [ ] Add ability to cache image URLS
  - [ ] Add ability to cache api responses
- [ ] Testing
  - [ ] Add Vitest unit tests to package
  - [ ] Test TMDB API calls with zod schema validator
  - [ ] Add Cypress integration tests to UI components (and/or js-dom Vietest tests) 
- [ ] Add sqlite3 database cache to package (bring your own cache)
- [ ] UI
  - [ ] Reusable React components (for examples and docs)
  - [ ] Ability to overwrite default TailwindCSS styles (or extend)
  - [ ] Ability to set TailwindCSS theme
  - [ ] Ability to set link component (for Next.js vs remix)
- [ ] Add Astro site (docs + examples)
  - [ ] Showcase examples
  - [ ] Document how to use API
  - [ ] Compare performance of examples
  - [ ] Compare hosting costs of examples
  - [ ] Add page transition element (see [example](https://www.maxiferreira.com/blog/astro-page-transitions/))
- [ ] Add NextJS Example
  - [ ] with proxy URL
  - [ ] Nested layout
  - [ ] OG image
  - [ ] Server components
  - [ ] Incremental Static Regeneration (compared to server components)
- [ ] tRPC example (NextJS + React Native)
  - [ ] with proxy URL
  - [ ] with tRPC
  - [ ] [cache React Native images](https://blog.logrocket.com/caching-images-react-native-tutorial-with-examples/)
- [ ] Add Fly.io Remix example
  - [ ] with proxy URL
  - [ ] fly.io sqlite3 cache
- [ ] Add Cloudflare Remix example
  - [ ] with proxy URL
  - [ ] [Cloudflare Workers KV](https://www.cloudflare.com/products/workers-kv/)
  - [ ] [Cloudflare images](https://www.cloudflare.com/products/cloudflare-images/)
- [ ] Astro example
  - [ ] with proxy URL (SSR)

## How to install

Install the `tmdb-ts-api` npm package.

```sh
npm install tmdb-ts-api
```

```sh
yarn add tmdb-ts-api
```

## How to configure

Add the following environmental varaibles to your `.env` file.

```sh
TMDB_API_KEY="your key goes here"
TMDB_API_PROXY_URL="server side endpoint"
```

## How to use

Create a new instance of `Tmbd` and use it!

```ts
// 1. Import Tmdb dependency
import { Tmdb } from 'tmdb-ts-api'

// 2. Create new instance of Tmdb
const tmdb = new Tmdb()

// 3. Get movie details
const details = await tmdb.movie.getDetails('603')
console.log(details)
```

## How to publish

Coming soon

