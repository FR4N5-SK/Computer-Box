import { useContext, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPath from "./components/Errors/ErrorPath";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Recovery from "./components/auth/Recovery";
import Home from "./components/views/Home";
import Add from "./components/views/Add";
import Read from "./components/views/Read";
import { Context } from "./context/Context";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  const {token} = useContext(Context)
  console.log(token);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute isAllowed={token} redirectTo="/login">
          <Home />
        </ProtectedRoute>
      ),
    },
    {
      path: "/read",
      element: (
        <ProtectedRoute isAllowed={token} redirectTo="/login">
          <Read />
        </ProtectedRoute>
      ),
    },
    {
      path: "/add",
      element: (
        <ProtectedRoute isAllowed={token} redirectTo="/login">
          <Add />
        </ProtectedRoute>
      ),
    },
    {
      path: "/login",
      element: (
        <ProtectedRoute isAllowed={!token} redirectTo="/">
          <Login />
        </ProtectedRoute>
      ),
    },
    {
      path: "/register",
      element: (
        <ProtectedRoute isAllowed={!token} redirectTo="/">
          <Register />
        </ProtectedRoute>
      ),
    },
    {
      path: "/recovery",
      element: (
        <ProtectedRoute isAllowed={!token} redirectTo="/">
          <Recovery />
        </ProtectedRoute>
      ),
    },
    {
      path: "*",
      element: <ErrorPath />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
