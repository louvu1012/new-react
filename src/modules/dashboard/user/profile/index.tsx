import { FC, useEffect, useState } from "react";
import { useAuth } from "../../../../contexts/auth/AuthContext";
import { signOut } from "../../../../contexts/auth/reducers";
import { authService } from "../../../../service/authService";
import { userService } from "../../../../service/userService";
import { User } from "../../../entities/user";
import { Descriptions, DescriptionsProps } from "antd";
import { Link } from "react-router-dom";

const UserProfile: FC = () => {
  const { dispatch } = useAuth();
  const [data, setData] = useState<User>({})

  async function handleSignOut() {
    try {
      await authService.signOut()
      dispatch(signOut());
    } catch (error) {
      console.error(error);
    }
  }

  const fetchData = async () => {
    const user = await userService.getProfile();
    setData(user);
  }

  useEffect(() => {
    fetchData()
  }, [])

  const items: DescriptionsProps['items'] = data && [
    {
      key: '1',
      label: 'id',
      children: <p>{data.id}</p>,
    },
    {
      key: '2',
      label: 'name',
      children: <p>{data.name}</p>,
    },
    {
      key: '3',
      label: 'email',
      children: <p>{data.email}</p>,
    },
    {
      key: '4',
      label: 'phone',
      children: <p>{data.phone}</p>,
    },
    {
      key: '5',
      label: 'role',
      children: <p>{data.role}</p>,
    },
    {
      key: '6',
      label: 'status',
      children: <p>{data.status}</p>,
    },
    {
      key: '7',
      label: 'createdAt',
      children: <p>{data.createdAt}</p>,
    },
    {
      key: '8',
      label: 'updatedAt',
      children: <p>{data.updatedAt}</p>,
    },
  ];

  return (
    <>
      <h2>User Profile</h2>
      <Link to={`/dashboard/user/dashboard`}>Trang chủ</Link>
      <Descriptions title="User Info" items={items} />
      <button onClick={handleSignOut}>Logout</button>
    </>
  );
};

export default UserProfile