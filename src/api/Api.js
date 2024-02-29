import axios from "axios";

// const URL_STRAPI = "http://localhost:1337";
const URL_STRAPI = "https://baum-2024-be1e7766ad39.herokuapp.com";

export const getInfoHome = async () => {
  try {
    const response = await axios.get(`${URL_STRAPI}/home/`);
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
