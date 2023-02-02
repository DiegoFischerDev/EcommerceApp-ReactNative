import axios from "axios";

export const api = axios.create({
  baseURL: "https://8868-177-207-79-239.sa.ngrok.io/" // http://localhost:3000/
})