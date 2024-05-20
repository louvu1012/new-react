import { useContext } from "react";
import { AuthContext } from "../contexts/auth/AuthContext";
import { User } from "../contexts/auth/types";

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('Auth context must be inside AuthProvider');
  }

  return context;
}

export interface AuthDto {
  accessToken: string;
  user: User;
}

export const USER: User = {
  email: 'luong.vu1012@gmail.com',
  password: '123456'
} as const;

class AuthService {
  async signIn(): Promise<AuthDto> {
    return Promise.resolve({
      accessToken: 'ACCESS_TOKEN',
      user: USER,
    });
  }
}

export const authService = new AuthService();