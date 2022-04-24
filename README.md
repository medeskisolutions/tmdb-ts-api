# The Movie Databse TypeScript API

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)

**WARNING:** This is a work-in-progress (`v0.0.x`). Once `v1` is released I'll
consider the API stable. For now, there may be lots of changes.

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
