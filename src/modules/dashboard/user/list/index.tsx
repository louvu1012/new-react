import { FC } from "react";
import { useAuth } from "../../../../hook/useAuth";
import { signOut } from "../../../../contexts/auth/reducers";

const UserList: FC = () => {
  const { dispatch } = useAuth();
  
  async function handleSignOut() {
    try {
      dispatch(signOut());
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div>User List</div>
      <button onClick={handleSignOut}>Logout</button>
    </>
  );
};

export default UserList