# The Movie Databse TypeScript API

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

