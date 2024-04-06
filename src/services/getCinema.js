import axios from "axios";
import { endpoints } from "./endpoint";

export const getCinemas = async () => {
    try {
      const { data } = await axios.get(endpoints.getCinemas);
      console.log(data)
      return data.results;
    } catch (error) {
      console.log(error);
      return [];
    }
  };