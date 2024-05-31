import { FC } from "react";
import { useAuth } from "../../../../contexts/auth/AuthContext";
import { signOut } from "../../../../contexts/auth/reducers";
import { authService } from "../../../../service/authService";
import { Link } from "react-router-dom";
import { Flex } from "antd";

const UserDashboard: FC = () => {
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
      <h2>User Dashboard</h2>
      <Flex gap={10}>
        <div>Xin chào {user?.email}</div>
        <Link to={`/dashboard/user/profile`}>Xem thông tin</Link>
      </Flex>
      <button onClick={handleSignOut}>Logout</button>
    </>
  );
};

export default UserDashboard