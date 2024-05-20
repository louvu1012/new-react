import { Dispatch, FC, createContext, useEffect, useReducer } from "react";
import { AuthState } from "./types";
import { initialize, reducer } from "./reducers";

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

export const AuthProvider: FC<any> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  useEffect(()=> {
    (async () => {
      const accessToken = localStorage.getItem('ACCESS_TOKEN');
      console.log(accessToken)
      if (!accessToken) {
        return dispatch(initialize({
          isAuthenticated: false,
          user: null,
        }));
      }

      try {
        // const user = await userService.getProfile();
        const user = {
          email: '123@gmail.com',
          password: '123456'
        }
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
