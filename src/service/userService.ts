import { Api } from "../lib/Api";

class UserService {
  async getProfile(): Promise<any> {
    const response = await Api.get('auth/me');
    return Promise.resolve(response.data.user);
  }
}

export const userService = new UserService();