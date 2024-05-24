import axios from "axios"

export const Api = axios.create({
  // timeout: 20000,
  baseURL: 'http://localhost:5000/api/auth/', // Địa chỉ cơ sở của API
  withCredentials: true, // Cho phép gửi cookie
})