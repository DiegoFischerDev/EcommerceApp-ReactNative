import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/" // http://localhost:3000/
})

export const baseURL = "http://localhost:3000/"