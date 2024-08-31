import axios from "axios";
import { Image } from "./components/types";

axios.defaults.baseURL = "https://api.unsplash.com/";

const keyApiUnsplash = "efrSee3R-jKFut61cD2ys3r7k2yFy4XWHvfvO9uv4rs";

const fetchImagesWithTopic = async (topic: string, page: number) => {
  const response = await axios.get("search/photos", {
    params: {
      query: topic,
      page: page,
      per_page: 10,
    },
    headers: {
      "Accept-Version": "v1",
      Authorization: `Client-ID ${keyApiUnsplash}`,
    },
  });
  return response.data.results as Image[];
};

export default fetchImagesWithTopic;
