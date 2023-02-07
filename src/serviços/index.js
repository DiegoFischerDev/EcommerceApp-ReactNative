import axios from "axios";

export const api = axios.create({
  baseURL: "https://40d8-191-243-26-45.sa.ngrok.io" // http://localhost:3000/
})