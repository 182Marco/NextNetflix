import axios from "axios";
import { API_URL, API_KEY } from "./constants"; 
import { MovieOrTvShow } from "./interfaces";

// END POINTS
export const trends = (type: string, lang: string) => `${API_URL}/${type}/popular?api_key=${API_KEY}&language=${lang}&page=1`;

// API CALLS
export const getTrends = async (type: string, lang ='en-US') => {
    try {
       const res = await axios.get(trends(type, lang)) 
       return res.data.results as MovieOrTvShow[];
    } catch (er) {
      console.error(`getTrends api responded with an error: ${er}`);
    }
    return [];
  };