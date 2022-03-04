<div>
  <h1 align="center">Canal plus test</h1>
  <p>
  <strong>
    An application  used to search movies and tv shows in themovedb database and view details (Casting, overviews...) built with React, NextJs, SWR, TypeScript, Jest, react-testing, Msw.
  </strong>
  </p>
<p>
Pages: <br />
    - Home: You can search and view the list of movies and tv shows <br />
    - movie: You can check all the details of selected movie<br />
    - tv show: You can check all the details of selected tv show<br />
</p>
</div>
<hr />

## technical stack

<p>
    NextJs: I chose next because it offers a default routing system also to be able to create a back end server to optimize the number of requests and server-side data normalization.
    Easy deployment with vercel cloud services
</p>
<p>
    SWR: is a strategy to first return the data from cache (stale), then send the fetch request (revalidate), and finally come with the up-to-date data.
</p>
<p>
    MSW: Mock Service Worker is an API mocking library that uses Service Worker API to intercept actual requests. In a short description, MSW leverages service workers to intercept requests on the network level and return mocked data for that specific request.
</p>

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Live DEMO

https://canal-plus-test.vercel.app/
