## Coding Challenge - Autofi - Frontend

### Task

Build a ReactJS project that fetches from the posts and comments APIs, presents a list of
posts and when any of the items is clicked show the list of comments that are associated with
that specific post.

### Solution

To solve this challenge, I wrote a React app using Create React App that fetches post and comments data and shows them. The data is stored in a Redux store. It allows to write a new comment that won't be persisted (it's lost after refreshing state).
Main packages I used:

- `Chakra UI` for styling.
- `React Router` to handle routing.
- `Redux / Redux thunk` to store state and handle asynchronous data fetching.

### Running the Solution

To start the dev server:

```
yarn install
yarn start
```

### Assumptions

For new comments, they aren't persisted anywhere.

When refreshing on Post Details page, it redirects to Posts List page (no state rehydration).

Data fetching isn't optimized (no cache, unnecesary fetchs).

Project structure and design isn't optimized to scale.
