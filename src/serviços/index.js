import axios from "axios";
import react from "react";

export const api = axios.create({
  baseURL: "https://f517-191-243-26-45.sa.ngrok.io/" // http://localhost:3000/
})

export const baseURL = "https://f517-191-243-26-45.sa.ngrok.io/"