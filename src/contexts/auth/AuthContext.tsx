import { Dispatch, FC, ReactNode, createContext, useEffect, useReducer } from "react";
import { AuthState } from "./types";
import { initialize, reducer } from "./reducers";
import { cookieService } from "../../hook/useCookie";

export enum AuthActionType {
  INITIALIZE = 'INITIALIZE',
  SIGN_IN = 'SIGN_IN',
  SIGN_OUT = 'SIGN_OUT',
}

export interface PayloadAction<T> {
  type: AuthActionType;
  payload: T;
}

export interface AuthContextType extends AuthState {
  dispatch: Dispatch<PayloadAction<AuthState>>;
}

const initialState: AuthState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

export const AuthContext = createContext<AuthContextType>({
  ...initialState,
  dispatch: () => null,
});

type TAuthProvider = {
  children: ReactNode
}
export const AuthProvider: FC<TAuthProvider> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async () => {
      const accessToken = cookieService.getCookie('ACCESS_TOKEN');
      if (!accessToken) {
        return dispatch(initialize({
          isAuthenticated: false,
          user: null,
        }));
      }

      try {
        // const user = await userService.getProfile(); // gọi api để lấy user info từ token
        const userString = cookieService.getCookie('USER');
        const user = JSON.parse(userString);
        // Đoạn trên lấy ra user info để set vào payload
        dispatch(initialize({ isAuthenticated: true, user }));
      } catch {
        dispatch(initialize({ isAuthenticated: false, user: null }));
      }
    })();
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>{children}</AuthContext.Provider>
  )
}
