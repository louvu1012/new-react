import { Navigate, useRoutes } from "react-router-dom";
import SignIn from "./auth/sign-in";
import UserList from "./dashboard/user/list";
import UserEdit from "./dashboard/user/edit";
import { FC } from "react";

const Router: FC = () => {
  return useRoutes([
    {
      path: 'auth',
      children: [
        {
          path: 'sign-in',
          element: <SignIn />
        },
      ],
    },
    {
      path: 'dashboard',
      children: [
        {
          index: true,
          element: <Navigate to="/dashboard/user" replace />
        },
        {
          path: 'user',
          children: [
            {
              index: true,
              element: <Navigate to="/dashboard/user/list" replace />
            },
            {
              path: 'list',
              element: <UserList />,
            },
            {
              path: 'edit',
              element: <UserEdit />,
            },
          ],
        },
      ],
    },
  ]);
};

export default Router;