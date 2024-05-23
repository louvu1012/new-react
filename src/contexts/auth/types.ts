export interface User {
  email?: string;
  password?: string;
}

export interface AuthState {
  isAuthenticated?: boolean;
  isInitialized?: boolean;
  user: User | null;
}

export interface AuthDto {
  accessToken: string;
  user: User;
}