import { User } from "../contexts/auth/types";
import { Api } from "../lib/Api";

class AuthService {
  async signIn(user: User): Promise<void> {
    await Api.post('login', user);
  }

  async signOut(): Promise<void> {
    await Api.post('logout');
  }
}

export const authService = new AuthService();