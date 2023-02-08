import axios from "axios";
import react from "react";

export const api = axios.create({
  baseURL: "http://localhost:3000/" // http://localhost:3000/
})

export const baseURL = "http://localhost:3000/"