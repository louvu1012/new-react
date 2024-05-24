import axios from "axios";

// Tạo một axios instance mới và thiết lập các cấu hình
const instance = axios.create({
  baseURL: 'http://localhost:5000/api/', // Địa chỉ cơ sở của API
  withCredentials: true, // Cho phép gửi cookie
});

class UserService {
  async getProfile(): Promise<any> {
    const response = await instance.get('auth/me');
    return Promise.resolve(response.data.user);
  }
}

export const userService = new UserService();