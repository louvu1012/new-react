import axios from "axios";
import { User } from "../contexts/auth/types";

// Tạo một axios instance mới và thiết lập các cấu hình
const instance = axios.create({
  baseURL: 'http://localhost:5000/api/', // Địa chỉ cơ sở của API
  withCredentials: true, // Cho phép gửi cookie
});

class AuthService {
  async signIn(user: User): Promise<void> {
    await instance.post('auth/login', user);
  }

  async signOut(): Promise<void> {
    await instance.post('auth/logout');
  }
}

export const authService = new AuthService();