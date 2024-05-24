import axios from "axios"

export const Api = axios.create({
  // timeout: 20000,
  baseURL: 'https://nodejs-auth-pi.vercel.app', // Địa chỉ cơ sở của API
  withCredentials: true, // Cho phép gửi cookie
})