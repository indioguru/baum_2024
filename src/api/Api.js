import axios from "axios";

const URL_STRAPI = "http://localhost:1337";

export const getInfoHome = async () => {
  try {
    const response = await axios.get(`${URL_STRAPI}/home/`);
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
