import axios, { AxiosInstance } from "axios";

const BASE_URL = process.env.DB_URL || "http://localhost:4000/api/v1";

export const instance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
  maxBodyLength: Infinity,
});
