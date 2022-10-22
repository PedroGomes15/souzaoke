import axios from "axios";
const KEY = "AIzaSyD3ueJeFeXBLXCAzyKaqvkRltR3417KXs4"; // mention your youtube API key here

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet,id",
    maxResults: 10,
    key: KEY,
    regionCode: "BR",
    type: "video",
    videoEmbeddable: "true",
  },
});
