import { useContext } from "react";
import { AuthContext } from "../contexts/auth/AuthContext";
import { AuthDto, User } from "../contexts/auth/types";

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('Auth context must be inside AuthProvider');
  }

  return context;
}

class AuthService {
  async signIn(user: User): Promise<AuthDto> {
    // gọi api sign-in lấy ra token ở đây
    return Promise.resolve({
      accessToken: 'ACCESS_TOKEN__1',
      user,
    });
  }
}

export const authService = new AuthService();