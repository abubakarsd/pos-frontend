import axios from "axios";

const defaultHeader = {
  Accept: "application/json",
};

export const axiosWrapper = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || "https://pos-backend-production-aa12.up.railway.app/",
  withCredentials: true,
  headers: { ...defaultHeader },
});
