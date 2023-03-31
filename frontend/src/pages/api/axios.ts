import axios, { AxiosInstance } from "axios";

const AUTH_BASE_URL = process.env.DB_URL || "http://localhost:1112/";

export const authInstance: AxiosInstance = axios.create({
  baseURL: AUTH_BASE_URL,
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
  maxBodyLength: Infinity,
  withCredentials: true
});
