import { GiphyFilter } from "./types";

const baseUrl = "https://api.giphy.com/v1/gifs";
const API_KEY = "pLURtkhVrUXr3KG25Gy5IvzziV5OrZGa";

export function getGhyps({ text = "", limit = 10 }: GiphyFilter) {
  return fetch(
    `${baseUrl}/search?api_key=${API_KEY}&q=${text}&limit=${limit || 10}`
  ).then((res) => res.json());
}
