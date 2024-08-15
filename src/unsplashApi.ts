import axios from "axios";
import { Image } from "./types";

axios.defaults.headers.common["Authorization"] =
  "Client-ID eveoGfY9v-_vE6YRah7GhiqRw7dhND10Bec3NxLWXH8";
axios.defaults.baseURL = "https://api.unsplash.com";

interface FetchImagesResponse {
  results: Image[];
  total: number;
}

export const fetchImages = async (
  searchQuery: string,
  currentPage: number = 1
): Promise<FetchImagesResponse> => {
  const response = await axios.get("/search/photos", {
    params: {
      query: searchQuery,
      page: currentPage,
      per_page: 9,
    },
  });

  return {
    results: response.data.results,
    total: response.data.total_pages,
  };
};

// без тс
// import axios from "axios";

// const API_KEY = "Client-ID eveoGfY9v-_vE6YRah7GhiqRw7dhND10Bec3NxLWXH8";
// const baseURL = "https://api.unsplash.com/search/photos";

// export const fetchImages = async (searchQuery, currentPage) => {
//   const response = await axios.get(baseURL, {
//     headers: {
//       Authorization: API_KEY,
//     },
//     params: {
//       query: searchQuery,
//       page: currentPage,
//       per_page: 9,
//     },
//   });

//   return {
//     results: response.data.results,
//     total: response.data.total_pages,
//   };
// };
