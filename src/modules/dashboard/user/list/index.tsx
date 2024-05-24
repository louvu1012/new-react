import { FC } from "react";
import { useAuth } from "../../../../contexts/auth/AuthContext";
import { signOut } from "../../../../contexts/auth/reducers";
import { authService } from "../../../../service/authService";

const UserList: FC = () => {
  const { user, dispatch } = useAuth();
  
  async function handleSignOut() {
    try {
      await authService.signOut()
      dispatch(signOut());
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div>Xin chào {user?.email}</div>
      <button onClick={handleSignOut}>Logout</button>
    </>
  );
};

export default UserList