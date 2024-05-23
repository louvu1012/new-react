import { Navigate, useRoutes } from "react-router-dom";
import SignIn from "./auth/sign-in";
import UserList from "./dashboard/user/list";
import UserEdit from "./dashboard/user/edit";
import { FC } from "react";
import GuestGuard from "../guards/GuestGuard";
import AuthGuard from "../guards/AuthGuard";

const Router: FC = () => {
  return useRoutes([
    {
      // path: '*',
      index: true,
      element: <Navigate to="/auth" replace />
    },
    {
      path: 'auth',
      children: [
        {
          index: true,
          element: <Navigate to="/auth/sign-in" replace />
        },
        {
          path: 'sign-in',
          element: (
            <GuestGuard>
              <SignIn />
            </GuestGuard>
          ),
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
              element: (
                <AuthGuard>
                  <UserList />
                </AuthGuard>
              ),
            },
            {
              path: 'edit',
              element: (
                <AuthGuard>
                  <UserEdit />
                </AuthGuard>
              ),
            },
          ],
        },
      ],
    },
  ]);
};

export default Router;