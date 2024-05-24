import { useContext , Dispatch, FC, ReactNode, createContext, useEffect, useReducer } from "react";
import { AuthState } from "./types";
import { initialize, reducer } from "./reducers";
import { userService } from "../../service/userService";

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

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('Auth context must be inside AuthProvider');
  }

  return context;
}

type TAuthProvider = {
  children: ReactNode
}
export const AuthProvider: FC<TAuthProvider> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async () => {
      // const accessToken = Cookies.get('ACCESS_TOKEN');
      // console.log(accessToken)
      // if (!accessToken) {
      //   return dispatch(initialize({
      //     isAuthenticated: false,
      //     user: null,
      //   }));
      // }

      try {
        const user = await userService.getProfile();
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
