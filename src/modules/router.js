import React, { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

const SignIn = lazy(() => import('./auth/sign-in'));
const UserList = lazy(() => import('./dashboard/user/list'));
const UserEdit = lazy(() => import('./dashboard/user/edit'));

const Router = () => {
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