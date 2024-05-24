import axios from "axios"

export const Api = axios.create({
  // timeout: 20000,
  baseURL: 'https://nodejs-auth-pi.vercel.app/api/auth/', // Địa chỉ cơ sở của API
  // baseURL: 'http://localhost:5000/api/auth/',
  withCredentials: true, // Cho phép gửi cookie
})