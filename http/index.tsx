import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_URL,
});

// eslint-disable-next-line import/prefer-default-export
export const getPurposeData = async () => api.get("/purpose?populate=deep");

export const getCareersData = async () => api.get("/career?populate=deep");
