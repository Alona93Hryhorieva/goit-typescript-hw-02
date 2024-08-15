import axios from "axios";
import { Image } from "./types";

axios.defaults.headers.common["Authorization"] =
  "Client-ID eveoGfY9v-_vE6YRah7GhiqRw7dhND10Bec3NxLWXH8";
axios.defaults.baseURL = "https://api.unsplash.com";

interface FetchImagesResponse {
  results: Image[];
  total: number;
  total_pages: number;
}

export const fetchImages = async (
  searchQuery: string,
  currentPage: number = 1
): Promise<FetchImagesResponse> => {
  const response = await axios.get<FetchImagesResponse>("/search/photos", {
    params: {
      query: searchQuery,
      page: currentPage,
      per_page: 9,
    },
  });

  return {
    results: response.data.results,
    total: response.data.total,
    total_pages: response.data.total_pages,
  };
};
