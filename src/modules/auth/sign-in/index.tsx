import { FC } from "react";
import { useAuth } from "../../../hook/useAuth";
import { authService } from "../../../hook/useAuth";
import { signIn } from "../../../contexts/auth/reducers";

const SignIn: FC = () => {
  const { dispatch } = useAuth();

  async function handleSignIn() {
    try {
      const { accessToken, user } = await authService.signIn();
      localStorage.setItem('ACCESS_TOKEN', accessToken);
      dispatch(signIn({ user }));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div>Sign In</div>
      <button onClick={handleSignIn}>...</button>
    </>
  );
};

export default SignIn