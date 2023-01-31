import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL
});


// eslint-disable-next-line import/prefer-default-export
export const getPurposeData = async () => api.get("/purpose?populate=deep");